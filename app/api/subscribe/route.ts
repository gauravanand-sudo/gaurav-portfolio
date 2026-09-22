import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'gaurav.anand54@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = String(body.email || '').trim()
    if (!email || !email.includes('@')) return NextResponse.json({ ok:false }, { status:400 })

    const subscriber = { email, source: body.source || 'site', createdAt:new Date().toISOString() }

    if (process.env.MARKETING_WEBHOOK_URL) {
      fetch(process.env.MARKETING_WEBHOOK_URL, {
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(subscriber)
      }).catch(() => null)
    }

    await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`, {
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        _subject:'New ga.tech Build Notes subscriber',
        _autoresponse:'Thanks for joining ga.tech Build Notes. You are on the list for occasional product, AI and delivery updates.',
        email,
        subscriber_email:email,
        source:subscriber.source,
        created_at:subscriber.createdAt,
      }),
    }).catch(() => null)

    return NextResponse.json({ ok:true })
  } catch {
    return NextResponse.json({ ok:false }, { status:500 })
  }
}
