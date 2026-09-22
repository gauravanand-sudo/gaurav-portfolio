# ga.tech Sales Operations

## Lead lifecycle
New -> Qualified -> Discovery -> Scope -> Proposal -> Negotiation -> Won/Lost -> Active -> Care/Retainer -> Referral.

The website sends every project/discovery request with a pipeline, stage, score/tier, route, next action, response target and source attribution. The external CRM should remain the system of record.

## Lead scoring
The website scores budget, timeline, company context, business email, request specificity and brief detail. Scores are routing hints, not automated acceptance decisions.

Suggested routing:
- high -> Priority sales
- medium -> Standard sales
- low -> Nurture / review
- discovery -> Discovery queue
- referral -> Referral queue

## Attribution
The browser stores UTM source/medium/campaign/content/term, original landing page and referrer in session storage. A per-session ID connects page views, CTA clicks, engaged views and form activity without putting personal form fields into GA4.

## CRM
Set `CRM_WEBHOOK_URL` to a private CRM automation endpoint. Set `CRM_WEBHOOK_SECRET` when the receiving endpoint supports a bearer secret.

Recommended CRM fields:
- lead_id
- created_at
- stage
- pipeline
- lead_type
- lead_score / lead_tier
- route_to
- next_action
- response_target
- name / email / company / phone
- request / message
- budget / timeline
- preferred_date / preferred_time
- source_key
- utm_source / utm_medium / utm_campaign / utm_content / utm_term
- landing_page / referrer

Do not store personal lead data in the public Git repository.

## Notifications
`LEAD_NOTIFY_EMAIL` receives a FormSubmit notification during bootstrap. Keep it private.

## Professional email
Create a domain mailbox or alias and set `PUBLIC_SALES_EMAIL`. The UI only displays a public sales email when this variable exists, so a consumer Gmail address is never exposed by default.

## Discovery calendar
Set `BOOKING_URL` to Cal.com, Calendly or another real booking page. When unset, /book remains functional as a preferred-slot request form.

## Analytics
All events POST to `/api/events` and appear in server logs. Set `ANALYTICS_WEBHOOK_URL` to persist them. Use `ANALYTICS_WEBHOOK_SECRET` if the destination supports bearer auth.

Optionally set `NEXT_PUBLIC_GA_ID` to forward sanitized funnel events to GA4. Personal request/message/email data is not forwarded to GA4.

Core events:
- page_view
- engaged_view
- hero_request_scope
- hero_book_discovery
- solution_click
- service_click
- offer_scope_click
- contact_started / contact_completed
- discovery_started / discovery_completed
- newsletter_subscribed
- whatsapp_click
- calendar_opened

## Nurture
Set `MARKETING_WEBHOOK_URL` to your email platform or automation tool and optionally `MARKETING_WEBHOOK_SECRET`. Build Notes is the low-commitment nurture path.

## Recommended dashboard
Measure:
Visitors -> Engaged visitors -> CTA clicks -> Form starts -> Completed leads -> Qualified leads -> Discovery -> Proposals -> Wins -> Revenue -> Care-plan conversion -> Referrals.

Break the dashboard down by source/campaign, solution, service, offer, device and lead tier.

## Launch planning / urgency
Do not invent scarcity. Use planning windows instead:
- focused launch work: start scoping ~2–5 weeks before target
- AI workflow sprint: ~2–6 weeks
- MVP/product build: ~6–14 weeks
- complex integrations/migrations: plan earlier

## External setup checklist
1. Create domain mailbox and set `PUBLIC_SALES_EMAIL`.
2. Connect a CRM webhook and map pipeline stages.
3. Connect a booking URL.
4. Connect analytics persistence and/or GA4.
5. Connect a marketing list provider.
6. Replace illustrative case-study scenarios with permissioned client evidence as real projects close.
