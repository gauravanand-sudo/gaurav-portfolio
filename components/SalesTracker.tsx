'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

function sessionId() {
  if (typeof window === 'undefined') return ''
  let id = sessionStorage.getItem('ga_session_id')
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem('ga_session_id', id)
  }
  return id
}

function getAttribution() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
  const current: Record<string,string> = {}

  for (const key of keys) {
    const value = params.get(key)
    if (value) current[key] = value
  }

  if (Object.keys(current).length) {
    sessionStorage.setItem('ga_attribution', JSON.stringify({
      ...current,
      landing_page: window.location.pathname + window.location.search,
      referrer: document.referrer || '',
      captured_at: new Date().toISOString(),
    }))
  }

  try { return JSON.parse(sessionStorage.getItem('ga_attribution') || '{}') } catch { return {} }
}

function ga4(event: string, data: Record<string, unknown>) {
  if (!GA_ID || typeof window === 'undefined') return
  const gtag = (window as any).gtag
  if (typeof gtag !== 'function') return
  const safe: Record<string, unknown> = {}
  for (const key of ['label','href','source','mode','step','budget','search']) {
    if (data[key] !== undefined) safe[key] = data[key]
  }
  gtag('event', event, safe)
}

export async function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const body = {
    event,
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
    session_id: sessionId(),
    attribution: getAttribution(),
    ...data,
  }

  ga4(event, data)

  try {
    const payload = JSON.stringify(body)
    if (navigator.sendBeacon) navigator.sendBeacon('/api/events', new Blob([payload], { type: 'application/json' }))
    else await fetch('/api/events', { method:'POST', headers:{'Content-Type':'application/json'}, body:payload, keepalive:true })
  } catch {}
}

export default function SalesTracker() {
  const pathname = usePathname()

  useEffect(() => {
    sessionId()
    getAttribution()

    if (GA_ID && !(window as any).gtag) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(script)
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).gtag = function(){ (window as any).dataLayer.push(arguments) }
      ;(window as any).gtag('js', new Date())
      ;(window as any).gtag('config', GA_ID, { anonymize_ip: true })
    }

    track('page_view', { search: window.location.search })

    let engaged = false
    const markEngaged = () => {
      if (engaged) return
      const scrolled = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * 0.5
      if (scrolled) {
        engaged = true
        track('engaged_view', { mode:'scroll_50' })
      }
    }
    const timer = window.setTimeout(() => {
      if (!engaged) {
        engaged = true
        track('engaged_view', { mode:'20_seconds' })
      }
    }, 20000)
    window.addEventListener('scroll', markEngaged, { passive:true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', markEngaged)
    }
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('[data-track]') as HTMLElement | null
      if (!target) return
      track(target.dataset.track || 'cta_click', {
        label: target.dataset.trackLabel || target.textContent?.trim().slice(0,120) || '',
        href: target.getAttribute('href') || '',
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

export function readAttribution() { return getAttribution() }
