export type CompanyService = {
  slug: string
  shortTitle: string
  title: string
  eyebrow: string
  summary: string
  idealFor: string[]
  deliverables: string[]
  examples: string[]
  outcomes: string[]
  scopeFactors: string[]
}

export const companyServices: CompanyService[] = [
  {
    slug: 'build-digital-products',
    shortTitle: 'Build',
    title: 'Apps, websites & digital products',
    eyebrow: 'BUILD',
    summary: 'Launch customer-facing or internal digital products without coordinating separate design, frontend, backend and deployment vendors.',
    idealFor: ['Business websites', 'MVPs and SaaS products', 'Customer or internal apps', 'Marketplaces and portals', 'Booking, commerce and service flows'],
    deliverables: ['Product and UX flow definition', 'Responsive frontend', 'Backend/API where needed', 'Authentication and data layer', 'Deployment and handover', 'Practical technical documentation'],
    examples: ['Food-delivery style ordering', 'E-commerce storefronts', 'Booking and tracking flows', 'Admin dashboards', 'Customer portals', 'Landing pages and microsites'],
    outcomes: ['A working product people can use', 'A clear deployment and ownership path', 'Source code/files handed over as agreed'],
    scopeFactors: ['Number of user journeys', 'Integrations and data complexity', 'Admin/operations requirements', 'Design depth', 'Launch and support requirements'],
  },
  {
    slug: 'ai-automation',
    shortTitle: 'Automate',
    title: 'AI assistants & workflow automation',
    eyebrow: 'AUTOMATE',
    summary: 'Turn repetitive, document-heavy or knowledge-heavy work into reliable workflows using software, AI and integrations.',
    idealFor: ['Support and operations teams', 'Document-heavy workflows', 'Internal knowledge search', 'Lead qualification', 'Recurring reporting and research'],
    deliverables: ['Workflow mapping', 'AI/LLM or rules-based solution design', 'API/tool integrations', 'RAG or knowledge search when useful', 'Evaluation and guardrails', 'Deployment and handover'],
    examples: ['PDF/company knowledge assistant', 'Support copilot', 'CRM lead routing', 'Document extraction', 'Automated reports', 'Research workflows'],
    outcomes: ['Less manual work', 'Faster information access', 'A repeatable workflow instead of ad-hoc prompting'],
    scopeFactors: ['Data quality and access', 'Number of connected systems', 'Accuracy requirements', 'Human review needs', 'Security and deployment constraints'],
  },
  {
    slug: 'creative-content',
    shortTitle: 'Create',
    title: 'Design, content & launch creative',
    eyebrow: 'CREATE',
    summary: 'Build the visual and written system around a launch, campaign or product so every asset feels connected instead of one-off.',
    idealFor: ['Startup launches', 'Campaigns and events', 'Sales enablement', 'Creator/business branding', 'Content-led acquisition'],
    deliverables: ['Visual direction', 'Platform-ready design assets', 'Copy/content variants', 'Decks or launch collateral', 'Editable/source files where applicable', 'Revision rounds defined in scope'],
    examples: ['Launch creative systems', 'Social media packs', 'Pitch decks and company profiles', 'YouTube thumbnails', 'SEO content', 'Landing-page copy'],
    outcomes: ['Consistent launch-ready assets', 'Faster content production', 'Reusable visual/content systems'],
    scopeFactors: ['Number of formats', 'Copy/content volume', 'Brand maturity', 'Revision cycles', 'Ongoing publishing needs'],
  },
  {
    slug: 'backend-cloud-scale',
    shortTitle: 'Launch & scale',
    title: 'Backend, cloud & technical delivery',
    eyebrow: 'LAUNCH & SCALE',
    summary: 'Strengthen the infrastructure behind a product with APIs, integrations, cloud deployment, reliability and performance engineering.',
    idealFor: ['Products preparing to launch', 'Teams adding integrations', 'Unstable or aging backends', 'Performance-sensitive systems', 'Cloud and deployment cleanup'],
    deliverables: ['API/backend implementation', 'Database and integration setup', 'Containerization and deployment', 'CI/CD where appropriate', 'Monitoring basics', 'Performance and debugging work'],
    examples: ['Payments and authentication', 'REST APIs', 'Cloud deployment', 'Database-backed services', 'Third-party integrations', 'Performance optimization'],
    outcomes: ['A deployable technical foundation', 'Cleaner operational ownership', 'A path to support and scale the product'],
    scopeFactors: ['Existing architecture', 'Traffic and reliability needs', 'Compliance/security constraints', 'Third-party dependencies', 'Migration requirements'],
  },
]

export function getCompanyService(slug: string) {
  return companyServices.find((service) => service.slug === slug)
}
