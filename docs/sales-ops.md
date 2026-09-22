# ga.tech Sales Operations

## Lead lifecycle
New -> Qualified -> Discovery -> Scope -> Proposal -> Negotiation -> Won/Lost -> Active -> Care/Retainer -> Referral

## Lead scoring
The website scores budget, timeline, company context, business email, request specificity and brief detail. Scores are routing hints, not automated acceptance decisions.

## Attribution
The browser stores UTM source/medium/campaign/content/term, original landing page and referrer in session storage. Project/discovery submissions send this context with the lead.

## CRM
Set `CRM_WEBHOOK_URL` to a private CRM automation endpoint. The payload includes lead ID, stage, score/tier, attribution and form fields. Never route personal lead data into a public repository.

## Notifications
`LEAD_NOTIFY_EMAIL` receives a FormSubmit notification. Keep the notification inbox private; the public website does not expose the Gmail address.

## Analytics
Events are POSTed to `/api/events` and appear in server logs. Set `ANALYTICS_WEBHOOK_URL` to persist them in your analytics/warehouse. Core events include page_view, contact_started/completed, discovery_started/completed, offer/service/solution clicks and newsletter subscriptions.

## Nurture
Set `MARKETING_WEBHOOK_URL` to your email platform or automation tool. Subscribers are also notified to the private lead inbox during bootstrap.

## Recommended dashboard
Track visitors -> CTA clicks -> form starts -> completed leads -> qualified leads -> discovery -> proposals -> wins -> revenue -> care-plan conversion -> referrals.

## Professional email
Create a real domain mailbox/alias before public launch (for example hello@yourdomain). Until then the site routes contact through branded forms/WhatsApp rather than publishing a consumer Gmail address.
