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
}

export const companyServices: CompanyService[] = [
  {
    slug: 'build-digital-products',
    shortTitle: 'Build',
    title: 'Apps, websites & digital products',
    eyebrow: 'BUILD',
    summary: 'Turn an idea or business workflow into a usable website, app, marketplace, portal, dashboard or MVP.',
    idealFor: ['New business websites', 'Customer or internal apps', 'Marketplace concepts', 'SaaS/MVP validation', 'Booking, commerce and service flows'],
    deliverables: ['UX and page/flow plan', 'Responsive frontend', 'Backend/API where needed', 'Authentication and database setup', 'Deployment and handover', 'Basic technical documentation'],
    examples: ['Food-delivery style ordering', 'E-commerce storefronts', 'Booking and tracking flows', 'Admin dashboards', 'Customer portals', 'Landing pages and microsites'],
    outcomes: ['A working version people can use', 'A clear deployment path', 'Source code/files handed over as agreed'],
  },
  {
    slug: 'ai-automation',
    shortTitle: 'Automate',
    title: 'AI assistants & workflow automation',
    eyebrow: 'AUTOMATE',
    summary: 'Reduce repetitive work with AI, document intelligence, connected workflows and lightweight internal tools.',
    idealFor: ['Support and operations teams', 'Document-heavy workflows', 'Internal knowledge search', 'Lead qualification', 'Recurring reporting and content operations'],
    deliverables: ['Workflow mapping', 'AI/LLM or rules-based solution design', 'API/tool integrations', 'RAG or knowledge search when useful', 'Evaluation and guardrails', 'Deployment and handover'],
    examples: ['PDF/company knowledge chatbot', 'Support assistant', 'CRM lead routing', 'Document extraction', 'Automated reports', 'Research and content workflows'],
    outcomes: ['Less manual work', 'Faster information access', 'A repeatable workflow instead of ad-hoc prompting'],
  },
  {
    slug: 'creative-content',
    shortTitle: 'Create',
    title: 'Design, content & creative production',
    eyebrow: 'CREATE',
    summary: 'Produce polished visual and written assets for launches, campaigns, sales and ongoing digital presence.',
    idealFor: ['Startup launches', 'Social media campaigns', 'Sales enablement', 'Creator/business branding', 'Content-led acquisition'],
    deliverables: ['Visual direction', 'Final editable/source files where applicable', 'Platform-ready exports', 'Copy/content variants', 'Revision rounds defined in scope'],
    examples: ['Posters and event creatives', 'Social media packs', 'Pitch decks and company profiles', 'YouTube thumbnails', 'SEO articles', 'Landing-page copy'],
    outcomes: ['Consistent launch-ready assets', 'Faster content production', 'Reusable visual/content systems'],
  },
  {
    slug: 'backend-cloud-scale',
    shortTitle: 'Launch & scale',
    title: 'Backend, cloud & technical delivery',
    eyebrow: 'LAUNCH & SCALE',
    summary: 'Build and improve the technical foundation behind digital products: APIs, integrations, cloud deployment, reliability and performance.',
    idealFor: ['Products preparing to launch', 'Teams adding integrations', 'Legacy or unstable backends', 'Performance-sensitive systems', 'Cloud and deployment cleanup'],
    deliverables: ['API/backend implementation', 'Database and integration setup', 'Containerization and deployment', 'CI/CD where appropriate', 'Monitoring basics', 'Performance/debugging work'],
    examples: ['Payments and authentication', 'REST APIs', 'Cloud deployment', 'Database-backed services', 'Third-party integrations', 'Performance optimization'],
    outcomes: ['A deployable backend', 'Cleaner operational ownership', 'A path to support and scale the product'],
  },
]

export function getCompanyService(slug: string) {
  return companyServices.find((service) => service.slug === slug)
}
