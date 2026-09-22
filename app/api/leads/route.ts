import { NextRequest, NextResponse } from 'next/server'
import { scoreLead } from '@/lib/lead-scoring'

export const runtime = 'nodejs'

const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'gaurav.anand54@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (body.website) return NextResponse.json({ ok: true })

    const required = ['name','email','request','message','budget','timeline']
    const missing = required.filter((key) => !String(body[key] || '').trim())
    if (missing.length) return NextResponse.json({ ok:false, error:`Missing: ${missing.join(', ')}` }, { status: 400 })

    const scoring = scoreLead(body)
    const lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      stage: 'New',
      ...body,
      leadScore: scoring.score,
      leadTier: scoring.tier,
      leadScoreReasons: scoring.reasons,
    }

    const deliveries: Promise<unknown>[] = []

    const crmWebhook = process.env.CRM_WEBHOOK_URL
    if (crmWebhook) {
      deliveries.push(fetch(crmWebhook, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(lead),
      }).catch(() => null))
    }

    deliveries.push(fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`, {
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        _subject: `[${scoring.tier.toUpperCase()} ${scoring.score}] ga.tech lead: ${body.request}`,
        ...lead,
      }),
    }).catch(() => null))

    await Promise.allSettled(deliveries)
    console.info('ga.tech lead', JSON.stringify({ id: lead.id, stage: lead.stage, tier: scoring.tier, score: scoring.score, source: body.utm_source || body.referrer || 'direct' }))

    return NextResponse.json({ ok:true, id:lead.id, score:scoring.score, tier:scoring.tier })
  } catch {
    return NextResponse.json({ ok:false, error:'Unable to process lead' }, { status:500 })
  }
}
