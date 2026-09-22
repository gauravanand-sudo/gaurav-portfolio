import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const event = await request.json()
    const enriched = {
      ...event,
      receivedAt:new Date().toISOString(),
      userAgent:request.headers.get('user-agent') || '',
      country:request.headers.get('x-vercel-ip-country') || '',
    }

    if (process.env.ANALYTICS_WEBHOOK_URL) {
      const headers:Record<string,string>={'Content-Type':'application/json'}
      if (process.env.ANALYTICS_WEBHOOK_SECRET) headers.Authorization=`Bearer ${process.env.ANALYTICS_WEBHOOK_SECRET}`
      await fetch(process.env.ANALYTICS_WEBHOOK_URL,{method:'POST',headers,body:JSON.stringify(enriched)}).catch(()=>null)
    }

    console.info('ga.tech event', JSON.stringify(enriched))
    return NextResponse.json({ ok:true })
  } catch {
    return NextResponse.json({ ok:false }, { status:400 })
  }
}
