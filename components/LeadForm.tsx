'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { readAttribution, track } from '@/components/SalesTracker'

type Props = {
  defaultRequest?: string
  mode?: 'project' | 'discovery'
}

export default function LeadForm({ defaultRequest = '', mode = 'project' }: Props) {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [attribution, setAttribution] = useState<Record<string,string>>({})

  useEffect(() => {
    setAttribution(readAttribution() as Record<string,string>)
    track(mode === 'project' ? 'contact_started' : 'discovery_started')
  }, [mode])

  const next = () => {
    setStep((value) => Math.min(value + 1, 3))
    track('lead_form_step', { mode, step: step + 1 })
  }

  const back = () => setStep((value) => Math.max(value - 1, 1))

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, ...attribution, leadType: mode }),
      })
      if (!response.ok) throw new Error('Could not submit your request.')
      await track(mode === 'project' ? 'contact_completed' : 'discovery_completed', { request: data.request || '', budget: data.budget || '' })
      window.location.href = mode === 'project' ? '/thank-you' : '/thank-you?type=discovery'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit your request.')
      setSubmitting(false)
    }
  }

  return (
    <form className="lead-form progressive-lead-form" onSubmit={submit}>
      <input type="text" name="website" className="lead-honey" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="landing_page" value={attribution.landing_page || ''} />
      <input type="hidden" name="referrer" value={attribution.referrer || ''} />
      <input type="hidden" name="utm_source" value={attribution.utm_source || ''} />
      <input type="hidden" name="utm_medium" value={attribution.utm_medium || ''} />
      <input type="hidden" name="utm_campaign" value={attribution.utm_campaign || ''} />
      <input type="hidden" name="utm_content" value={attribution.utm_content || ''} />
      <input type="hidden" name="utm_term" value={attribution.utm_term || ''} />

      <div className="lead-progress" aria-label={`Step ${step} of 3`}>
        {[1,2,3].map((item) => <i key={item} className={item <= step ? 'active' : ''} />)}
        <span>Step {step} of 3</span>
      </div>

      {step === 1 && (
        <fieldset className="lead-fieldset">
          <legend>{mode === 'project' ? 'What are you trying to accomplish?' : 'What would you like help deciding?'}</legend>
          <label>
            <span>Project / problem *</span>
            <input name="request" required defaultValue={defaultRequest} placeholder="Example: launch an MVP, automate weekly reporting, rebuild our website..." />
          </label>
          <label>
            <span>Context *</span>
            <textarea name="message" required rows={6} placeholder="Who is this for? What is painful today? What should be different when the work is done?" />
          </label>
          <button type="button" className="button button-primary lead-next" onClick={next}>Continue →</button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="lead-fieldset">
          <legend>Budget and timing</legend>
          <div className="lead-form-grid two-col">
            <label>
              <span>Budget range *</span>
              <select name="budget" required defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>Under ₹50k / equivalent</option>
                <option>₹50k – ₹2L / equivalent</option>
                <option>₹2L – ₹8L / equivalent</option>
                <option>₹8L+ / equivalent</option>
                <option>Exploring / need guidance</option>
              </select>
            </label>
            <label>
              <span>Timeline *</span>
              <select name="timeline" required defaultValue="">
                <option value="" disabled>Select</option>
                <option>Urgent / ASAP</option>
                <option>2–4 weeks</option>
                <option>1–3 months</option>
                <option>3+ months</option>
                <option>Flexible / exploring</option>
              </select>
            </label>
          </div>
          {mode === 'discovery' && (
            <div className="lead-form-grid two-col">
              <label><span>Preferred date</span><input type="date" name="preferred_date" /></label>
              <label><span>Preferred time / timezone</span><input name="preferred_time" placeholder="Example: 4–6 PM IST" /></label>
            </div>
          )}
          <div className="lead-step-actions">
            <button type="button" className="button button-secondary" onClick={back}>← Back</button>
            <button type="button" className="button button-primary" onClick={next}>Continue →</button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="lead-fieldset">
          <legend>Where should we reply?</legend>
          <div className="lead-form-grid two-col">
            <label><span>Name *</span><input type="text" name="name" required autoComplete="name" /></label>
            <label><span>Email *</span><input type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></label>
          </div>
          <div className="lead-form-grid two-col">
            <label><span>Company / brand</span><input type="text" name="company" autoComplete="organization" /></label>
            <label><span>Phone / WhatsApp</span><input type="tel" name="phone" autoComplete="tel" /></label>
          </div>
          <details className="optional-details">
            <summary>Add optional reference link <span aria-hidden="true">+</span></summary>
            <label><span>Reference URL</span><input type="url" name="reference_url" placeholder="https://..." /></label>
          </details>
          <label className="consent-row">
            <input type="checkbox" required name="privacy_consent" value="yes" />
            <span>I agree that ga.tech may use this information to evaluate and respond to my request. See the <Link href="/privacy">Privacy Policy</Link>.</span>
          </label>
          {error ? <p className="form-error" role="alert">{error}</p> : null}
          <div className="lead-step-actions">
            <button type="button" className="button button-secondary" onClick={back}>← Back</button>
            <button type="submit" className="button button-primary" disabled={submitting}>{submitting ? 'Sending…' : mode === 'project' ? 'Send project brief →' : 'Request discovery slot →'}</button>
          </div>
          <p className="form-expectation">Target response: within 1 business day. No obligation.</p>
        </fieldset>
      )}
    </form>
  )
}
