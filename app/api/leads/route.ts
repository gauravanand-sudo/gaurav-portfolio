import { NextRequest, NextResponse } from 'next/server'
import { scoreLead } from '@/lib/lead-scoring'

export const runtime = 'nodejs'
const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'gaurav.anand54@gmail.com'

function routeLead(tier:'high'|'medium'|'low', leadType:string) {
  if (leadType === 'discovery') return { routeTo:'Discovery queue', nextAction:'Confirm slot and qualify the decision/problem', responseTarget:'1 business day' }
  if (leadType === 'referral') return { routeTo:'Referral queue', nextAction:'Validate permission, fit and introduction path', responseTarget:'1 business day' }
  if (tier === 'high') return { routeTo:'Priority sales', nextAction:'Qualify and prepare discovery/scope path', responseTarget:'4 business hours when practical' }
  if (tier === 'medium') return { routeTo:'Standard sales', nextAction:'Review fit and send scope questions', responseTarget:'1 business day' }
  return { routeTo:'Nurture / review', nextAction:'Assess fit, redirect or nurture', responseTarget:'1 business day' }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (body.website) return NextResponse.json({ ok: true })

    const required = ['name','email','request','message','budget','timeline']
    const missing = required.filter((key) => !String(body[key] || '').trim())
    if (missing.length) return NextResponse.json({ ok:false, error:`Missing: ${missing.join(', ')}` }, { status: 400 })

    const scoring = scoreLead(body)
    const routing = routeLead(scoring.tier, String(body.leadType || 'project'))
    const lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      stage: 'New',
      pipeline: 'ga.tech Sales',
      ...routing,
      ...body,
      leadScore: scoring.score,
      leadTier: scoring.tier,
      leadScoreReasons: scoring.reasons,
      sourceKey: body.utm_campaign || body.utm_source || body.referrer || 'direct',
    }

    const deliveries: Promise<unknown>[] = []
    const crmWebhook = process.env.CRM_WEBHOOK_URL
    if (crmWebhook) {
      const headers:Record<string,string>={'Content-Type':'application/json'}
      if (process.env.CRM_WEBHOOK_SECRET) headers.Authorization=`Bearer ${process.env.CRM_WEBHOOK_SECRET}`
      deliveries.push(fetch(crmWebhook,{method:'POST',headers,body:JSON.stringify(lead)}).catch(()=>null))
    }

    deliveries.push(fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        _subject:`[${scoring.tier.toUpperCase()} ${scoring.score}] ga.tech lead: ${body.request}`,
        _autoresponse:'Thanks for contacting ga.tech. Your request has been received. Target response time is within 1 business day.',
        ...lead,
      }),
    }).catch(()=>null))

    await Promise.allSettled(deliveries)
    console.info('ga.tech lead',JSON.stringify({id:lead.id,stage:lead.stage,tier:scoring.tier,score:scoring.score,routeTo:routing.routeTo,source:lead.sourceKey}))
    return NextResponse.json({ok:true,id:lead.id,score:scoring.score,tier:scoring.tier,routeTo:routing.routeTo,responseTarget:routing.responseTarget})
  } catch {
    return NextResponse.json({ok:false,error:'Unable to process lead'},{status:500})
  }
}
