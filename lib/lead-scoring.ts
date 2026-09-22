export type LeadInput = {
  budget?: string
  timeline?: string
  company?: string
  email?: string
  request?: string
  message?: string
  leadType?: string
}

export type LeadScore = {
  score: number
  tier: 'high' | 'medium' | 'low'
  reasons: string[]
}

export function scoreLead(input: LeadInput): LeadScore {
  let score = 0
  const reasons: string[] = []
  const budget = (input.budget || '').toLowerCase()
  const timeline = (input.timeline || '').toLowerCase()
  const email = (input.email || '').toLowerCase()
  const message = input.message || ''
  const request = input.request || ''

  if (budget.includes('₹8l+') || budget.includes('8l+')) { score += 35; reasons.push('larger budget range') }
  else if (budget.includes('₹2l') || budget.includes('2l')) { score += 28; reasons.push('project budget fit') }
  else if (budget.includes('₹50k') || budget.includes('50k')) { score += 16; reasons.push('mid-range budget') }
  else if (budget.includes('guidance') || budget.includes('exploring')) { score += 8; reasons.push('exploratory budget') }

  if (timeline.includes('1–3 months') || timeline.includes('1-3 months')) { score += 18; reasons.push('workable delivery window') }
  else if (timeline.includes('3+ months')) { score += 16; reasons.push('planning ahead') }
  else if (timeline.includes('2–4 weeks') || timeline.includes('2-4 weeks')) { score += 12; reasons.push('near-term project') }
  else if (timeline.includes('urgent')) { score += 4; reasons.push('urgent timeline needs qualification') }

  if (input.company?.trim()) { score += 10; reasons.push('company identified') }
  if (email && !/(gmail|yahoo|hotmail|outlook)\./.test(email)) { score += 12; reasons.push('business email') }
  if (message.length >= 180) { score += 10; reasons.push('detailed project context') }
  if (request.length >= 8) { score += 5; reasons.push('specific request') }

  const capped = Math.min(score, 100)
  return { score: capped, tier: capped >= 65 ? 'high' : capped >= 35 ? 'medium' : 'low', reasons }
}
