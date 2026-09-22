export type Solution = {
  slug: string
  eyebrow: string
  title: string
  audience: string
  pain: string
  outcome: string
  fit: string[]
  examples: string[]
  cta: string
}

export const solutions: Solution[] = [
  {
    slug: 'startup-founders',
    eyebrow: 'FOR STARTUP FOUNDERS',
    title: 'Launch the first credible version without assembling a full product team.',
    audience: 'Early-stage founders and small product teams',
    pain: 'You need something real enough to sell, test or raise around, but hiring design, frontend, backend, cloud and content separately creates delay and coordination overhead.',
    outcome: 'One accountable delivery path from scope to launch, with the riskiest product assumptions validated before the build expands.',
    fit: ['MVP or SaaS launch', 'New company/product website', 'Customer portal', 'Pitch/launch collateral'],
    examples: ['MVP build', 'Landing + product onboarding', 'Founder dashboard', 'Launch creative'],
    cta: 'Plan a startup launch',
  },
  {
    slug: 'operations-teams',
    eyebrow: 'FOR OPERATIONS TEAMS',
    title: 'Remove repetitive work with AI and workflow automation your team can operate.',
    audience: 'Operations, support and knowledge-heavy teams',
    pain: 'Time disappears into document lookup, manual reporting, repetitive handoffs and fragmented tools.',
    outcome: 'A mapped, measurable workflow with the right mix of software, AI and human review—not an uncontrolled prompt demo.',
    fit: ['Document intelligence', 'Knowledge search', 'Lead routing', 'Recurring reports'],
    examples: ['RAG knowledge assistant', 'Document extraction', 'Support copilot', 'CRM automation'],
    cta: 'Find an automation opportunity',
  },
  {
    slug: 'marketing-launch-teams',
    eyebrow: 'FOR MARKETING & LAUNCH TEAMS',
    title: 'Launch with one connected web, content and creative system instead of scattered one-offs.',
    audience: 'Marketing leads, founders and launch teams',
    pain: 'The site, deck, social assets and launch copy often come from different people and feel disconnected.',
    outcome: 'A coherent launch system with one visual and messaging direction across the assets buyers actually see.',
    fit: ['New product launch', 'Campaign launch', 'Sales collateral', 'Founder/brand presence'],
    examples: ['Website + copy', 'Pitch deck', 'Launch creative kit', 'Content system'],
    cta: 'Plan a launch system',
  },
]

export type SalesOffer = {
  key: string
  label: string
  title: string
  copy: string
  goodFor: string
  timeline: string
  planningRange: string
  request: string
}

export const salesOffers: SalesOffer[] = [
  {
    key: 'website',
    label: 'LAUNCH',
    title: 'Business Website Launch',
    copy: 'A credible, responsive company or campaign site with a clear enquiry path, analytics-ready structure and deployment.',
    goodFor: 'New businesses, campaigns, product launches',
    timeline: '2–5 weeks',
    planningRange: '₹75k–₹3L+ / equivalent',
    request: 'Business Website Launch',
  },
  {
    key: 'mvp',
    label: 'MVP',
    title: 'App / MVP Build',
    copy: 'Validate one important customer journey with a usable product before expanding the feature set.',
    goodFor: 'Founders, internal tools, SaaS validation',
    timeline: '6–14 weeks',
    planningRange: '₹2L–₹8L+ / equivalent',
    request: 'App or MVP Build',
  },
  {
    key: 'automation',
    label: 'AUTOMATE',
    title: 'AI / Workflow Sprint',
    copy: 'Map one painful recurring workflow, prototype the risky part and turn it into a repeatable system.',
    goodFor: 'Operations, support, document-heavy teams',
    timeline: '2–6 weeks',
    planningRange: '₹1L–₹5L+ / equivalent',
    request: 'AI or Workflow Sprint',
  },
  {
    key: 'creative',
    label: 'CREATE',
    title: 'Launch Creative System',
    copy: 'A coordinated set of visual and written assets for a launch, campaign or sales motion.',
    goodFor: 'Startups, creators, campaigns, events',
    timeline: '1–4 weeks',
    planningRange: '₹40k–₹2L+ / equivalent',
    request: 'Launch Creative System',
  },
]

export type CaseStudy = {
  slug: string
  kind: 'Founder experience' | 'Illustrative scenario'
  title: string
  challenge: string
  approach: string
  outcome: string
  proofNote: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'knowledge-assistant',
    kind: 'Founder experience',
    title: 'Turning fragmented payment knowledge into one searchable assistant',
    challenge: 'Operational and partner knowledge was spread across API documentation, reconciliation rules and other references, making lookup slow and inconsistent.',
    approach: 'Built a retrieval-augmented workflow using LangChain, sentence-transformers and FAISS so users could query the knowledge base conversationally.',
    outcome: 'Created one natural-language access layer over previously fragmented technical and operational material, reducing the need to manually search across sources.',
    proofNote: 'Based on the founder’s prior employment experience; not a ga.tech client engagement.',
    tags: ['RAG', 'Knowledge search', 'AI workflow'],
  },
  {
    slug: 'platform-migration',
    kind: 'Founder experience',
    title: 'Cross-platform migration across a large simulator codebase',
    challenge: 'A production simulator codebase of more than 11M lines needed cross-platform support from Linux/GCC to macOS/Clang.',
    approach: 'Worked through platform differences, compiler/toolchain issues and release integration across a large systems codebase.',
    outcome: 'Expanded platform compatibility while preserving a production release path across a complex engineering system.',
    proofNote: 'Based on the founder’s prior employment experience; not a ga.tech client engagement.',
    tags: ['Platform engineering', 'C++', 'Migration'],
  },
  {
    slug: 'performance-engineering',
    kind: 'Founder experience',
    title: 'Reducing contention in multicore simulation paths',
    challenge: 'Parallel workloads exposed contention and scalability limits in performance-sensitive simulation code.',
    approach: 'Worked on synchronization redesign and lower-overhead concurrency paths in a production systems environment.',
    outcome: 'Improved the engineering path toward better multicore scalability and reduced synchronization overhead.',
    proofNote: 'Based on the founder’s prior employment experience; not a ga.tech client engagement.',
    tags: ['Performance', 'Concurrency', 'Systems'],
  },
  {
    slug: 'sample-saas-launch',
    kind: 'Illustrative scenario',
    title: 'Sample: a founder needs a sellable SaaS MVP in one quarter',
    challenge: 'The founder has validated demand manually but does not yet have a product team or a production-ready customer flow.',
    approach: 'Define one primary user journey, prototype the risky flow, build the smallest usable product, instrument conversion and launch with a narrow admin surface.',
    outcome: 'A realistic first release that can support customer learning without pretending to be a full mature platform.',
    proofNote: 'Illustrative sample only. This is not a client claim or testimonial.',
    tags: ['MVP', 'SaaS', 'Launch'],
  },
  {
    slug: 'sample-ops-automation',
    kind: 'Illustrative scenario',
    title: 'Sample: an operations team loses hours to recurring document work',
    challenge: 'Staff repeatedly search documents, copy information into spreadsheets and prepare similar weekly reports.',
    approach: 'Map the workflow, identify the highest-friction steps, add structured extraction/retrieval and keep human approval around risky actions.',
    outcome: 'A more repeatable operating workflow with less manual lookup and fewer handoff steps.',
    proofNote: 'Illustrative sample only. This is not a client claim or testimonial.',
    tags: ['Automation', 'Operations', 'AI'],
  },
]

export const carePlans = [
  {
    title: 'Product Care',
    fit: 'Websites, apps and MVPs after launch',
    includes: ['Bug fixes and small improvements', 'Release support', 'Analytics/conversion review', 'Monthly priority planning'],
  },
  {
    title: 'AI Automation Care',
    fit: 'RAG, integrations and recurring workflows',
    includes: ['Workflow monitoring', 'Prompt/retrieval tuning', 'Model/API change support', 'Evaluation and issue review'],
  },
  {
    title: 'Cloud & Reliability Care',
    fit: 'Backend services and production infrastructure',
    includes: ['Deployment support', 'Basic reliability review', 'Cost/performance checks', 'Incident follow-up and improvements'],
  },
  {
    title: 'Creative & Content Retainer',
    fit: 'Brands with recurring launch/content needs',
    includes: ['Monthly design/content queue', 'Campaign assets', 'Landing-page updates', 'Priority revision window'],
  },
]

export const commercialFaqs = [
  ['Can we sign an NDA before sharing details?', 'Yes. Confidential work can be discussed under an appropriate NDA before sensitive material is exchanged.'],
  ['How are scope changes handled?', 'Anything that materially changes deliverables, integrations or acceptance criteria is surfaced before the work changes. The goal is no surprise scope expansion.'],
  ['Who owns the code and source files?', 'Ownership and licensing are written into the proposal or statement of work. Standard project scopes can include handover of agreed source code/files.'],
  ['How do payments work?', 'Payment structure depends on engagement shape. Focused work may use a deposit/balance model; larger projects are typically milestone-based.'],
  ['Can you work with our procurement/security process?', 'Yes. Larger engagements can include written scope, SOW, NDA, security/data-handling discussion and invoice requirements.'],
  ['What if the project is not a fit?', 'The first response can simply say so. No obligation is created by submitting a brief or booking discovery.'],
]
