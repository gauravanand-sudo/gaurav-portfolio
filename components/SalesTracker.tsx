'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

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

export async function track(event: string, data: Record<string, unknown> = {}) {
  try {
    const payload = JSON.stringify({
      event,
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
      attribution: getAttribution(),
      ...data,
    })
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/events', new Blob([payload], { type: 'application/json' }))
    } else {
      await fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true })
    }
  } catch {}
}

export default function SalesTracker() {
  const pathname = usePathname()
  const search = useSearchParams()

  useEffect(() => {
    getAttribution()
    track('page_view', { search: search.toString() })
  }, [pathname, search])

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

export function readAttribution() {
  return getAttribution()
}
