'use client'

import { FormEvent, useState } from 'react'
import { track } from '@/components/SalesTracker'

export default function SubscribeForm({ source = 'site' }: { source?: string }) {
  const [state, setState] = useState<'idle'|'sending'|'done'|'error'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ ...data, source }),
    })
    if (response.ok) {
      setState('done')
      track('newsletter_subscribed', { source })
    } else setState('error')
  }

  if (state === 'done') return <p className="subscribe-success">You’re on the list. Check your inbox for confirmation.</p>

  return (
    <form className="subscribe-form" onSubmit={submit}>
      <input type="email" name="email" required placeholder="you@company.com" aria-label="Email address" />
      <button className="button button-primary" disabled={state === 'sending'}>{state === 'sending' ? 'Joining…' : 'Get Build Notes →'}</button>
      {state === 'error' ? <span role="alert">Could not subscribe. Please try again.</span> : null}
    </form>
  )
}
