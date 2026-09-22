export type InsightSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type Insight = {
  slug: string
  title: string
  description: string
  category: string
  published: string
  readTime: string
  sections: InsightSection[]
}

export const insights: Insight[] = [
  {
    slug: 'rag-vs-ai-agents-for-business-knowledge',
    title: 'RAG vs AI agents: choosing the right architecture for business knowledge',
    description: 'A practical guide to choosing between retrieval-augmented generation, agentic workflows and simpler search for internal business knowledge.',
    category: 'AI Engineering',
    published: '2026-09-22',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Start with the job, not the buzzword',
        paragraphs: [
          'Teams often begin an AI project by asking whether they need an agent. A better first question is what the system must reliably do. If the job is to answer questions from a controlled body of documents, retrieval-augmented generation is usually a cleaner starting point than a fully agentic workflow.',
          'Agents become useful when the system must choose between tools, perform multiple dependent steps, inspect the result of one action before deciding the next action, or operate across several systems. That flexibility also adds more ways for the workflow to fail, so it should be earned by the problem.',
        ],
      },
      {
        heading: 'When RAG is the right baseline',
        paragraphs: ['RAG works well when the value comes from finding the right evidence and keeping the answer grounded in that evidence.'],
        bullets: [
          'Internal policy, product, support or engineering documentation',
          'Technical manuals and standard operating procedures',
          'Knowledge search where citations and traceability matter',
          'Use cases where the answer can be produced from retrieved context without taking external actions',
        ],
      },
      {
        heading: 'When agentic behavior becomes useful',
        paragraphs: ['An agent is more appropriate when the model must coordinate actions rather than simply generate an answer.'],
        bullets: [
          'Research that requires searching, comparing and refining across multiple sources',
          'Operational workflows that create tickets, update records or call business APIs',
          'Tasks that need a planner-executor loop or explicit human approval between steps',
          'Automation where tool results determine what the system should do next',
        ],
      },
      {
        heading: 'The architecture I would usually recommend',
        paragraphs: [
          'For most business knowledge products, begin with strong ingestion, retrieval, permissions, reranking and evaluation. Add tool use only around workflows that clearly benefit from action-taking. This creates an architecture that is easier to test, cheaper to operate and simpler to explain to users.',
          'The highest-leverage work is often not the final prompt. It is document quality, access control, retrieval quality, observability and a repeatable evaluation set that tells you whether the system is actually improving.',
        ],
      },
    ],
  },
  {
    slug: 'cloud-cost-checklist-before-you-scale',
    title: 'A practical cloud cost checklist before your startup scales',
    description: 'Simple cloud architecture and observability practices that help early products avoid expensive infrastructure surprises later.',
    category: 'Cloud',
    published: '2026-09-22',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Cost problems usually begin as visibility problems',
        paragraphs: [
          'Early products should optimize for learning and shipping speed, not for an imaginary hyperscale future. But a few lightweight controls make it much easier to understand what growth is costing and where inefficient architecture is hiding.',
          'The objective is not to minimize every cloud bill. It is to make cost attributable, observable and proportional to the value the product is creating.',
        ],
      },
      {
        heading: 'Add the boring controls early',
        paragraphs: ['A small amount of operational structure goes a long way before traffic becomes meaningful.'],
        bullets: [
          'Tag resources by environment, product and owner',
          'Set budgets and anomaly alerts before the first surprising invoice',
          'Separate development and production workloads',
          'Track database, storage, egress and model/API usage independently',
          'Remove idle environments and forgotten experiments automatically where possible',
        ],
      },
      {
        heading: 'Pay attention to cost per useful action',
        paragraphs: [
          'For AI products especially, monthly infrastructure cost is less informative than cost per successful workflow, customer conversation, document processed or task completed. That unit-level view makes trade-offs between model quality, latency, caching and retrieval architecture much clearer.',
        ],
      },
      {
        heading: 'Delay complexity, not observability',
        paragraphs: [
          'A startup rarely needs the most elaborate platform architecture on day one. It does need logs, basic metrics, deployment discipline and enough cost telemetry to know when the current architecture is reaching its limits. The best migration is the one triggered by evidence rather than fear.',
        ],
      },
    ],
  },
  {
    slug: 'performance-engineering-in-an-ai-first-stack',
    title: 'Why performance engineering still matters in an AI-first software stack',
    description: 'AI applications add model latency, network hops and variable cost. Systems thinking helps teams keep the full experience fast and economical.',
    category: 'Systems',
    published: '2026-09-22',
    readTime: '6 min read',
    sections: [
      {
        heading: 'AI did not remove the critical path',
        paragraphs: [
          'Modern AI applications can involve retrieval, model calls, tool execution, databases and several network boundaries in a single user request. That makes end-to-end performance engineering more important, not less.',
          'A fast model call can still produce a slow product if every surrounding service adds queueing, serialization, retries or unnecessary data movement.',
        ],
      },
      {
        heading: 'Measure the whole request',
        paragraphs: ['The most useful optimization work starts by decomposing latency and cost rather than guessing.'],
        bullets: [
          'Time to first useful token or result',
          'Retrieval and reranking latency',
          'Model inference/API latency and retries',
          'Database and external tool calls',
          'p95 and p99 latency, not only the average',
          'Cost per request and cost per successful outcome',
        ],
      },
      {
        heading: 'Classic systems techniques still apply',
        paragraphs: [
          'Caching, batching, concurrency control, avoiding duplicated work, reducing serialization overhead and separating hot paths from background work are still fundamental. The difference is that model calls can be comparatively expensive and variable, so inefficient orchestration is easier to feel in both latency and cloud cost.',
        ],
      },
      {
        heading: 'Optimize after the product works — but instrument before',
        paragraphs: [
          'Premature optimization is still a trap. The practical approach is to ship a clear architecture with instrumentation, watch how real workloads behave, and then optimize the bottlenecks that matter. That is the same discipline used in performance-critical C++ systems, applied to a newer stack.',
        ],
      },
    ],
  },
  {
    slug: 'how-much-does-an-mvp-cost-what-changes-the-scope',
    title: 'How much does an MVP cost? The scope decisions that actually move the number',
    description: 'A buyer-focused framework for understanding what makes an MVP small, medium or expensive before asking for a quote.',
    category: 'Buyer Guide',
    published: '2026-09-23',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Start with one user journey',
        paragraphs: [
          'MVP pricing becomes vague when the request is a list of features instead of one business outcome. The fastest way to make scope more predictable is to identify the primary user, the action they must complete, and the smallest end-to-end flow that proves the idea works.',
          'A marketplace with buyer accounts, seller onboarding, payments, messaging, reviews, delivery tracking and a full admin console is not one MVP flow. It is several products hiding inside one sentence.',
        ],
      },
      {
        heading: 'The biggest cost drivers',
        paragraphs: ['The visual design matters, but complexity usually grows faster around product logic and integrations.'],
        bullets: [
          'Number of user roles and journeys',
          'Payments, maps, messaging or third-party integrations',
          'Admin and operations tooling',
          'Permissions, security and audit requirements',
          'Data migration or existing-system integration',
          'Native mobile requirements versus responsive web',
        ],
      },
      {
        heading: 'A better way to ask for an estimate',
        paragraphs: [
          'Give the delivery team the user, problem, must-have flow, launch target, hard integrations, rough budget range and what can wait. That produces a much more useful scope discussion than asking for a clone of a large consumer app.',
        ],
      },
      {
        heading: 'Treat the first release as a learning system',
        paragraphs: [
          'The strongest MVP is not the version with the most features. It is the version that lets real users complete the important workflow and gives the business enough evidence to decide what deserves investment next.',
        ],
      },
    ],
  },
  {
    slug: 'ai-chatbot-for-company-documents-rag-checklist',
    title: 'AI chatbot for company documents: a practical RAG checklist before you build',
    description: 'What a business should prepare before building a chatbot over PDFs, policies, manuals or internal knowledge.',
    category: 'Buyer Guide',
    published: '2026-09-23',
    readTime: '6 min read',
    sections: [
      {
        heading: 'The chatbot is the visible part, not the whole product',
        paragraphs: [
          'A useful internal knowledge assistant depends on document quality, permissions, retrieval, citations, evaluation and update workflows. A polished chat box cannot compensate for stale or poorly structured source material.',
        ],
      },
      {
        heading: 'Prepare the knowledge source',
        paragraphs: ['Before choosing a model, understand the information the system is expected to trust.'],
        bullets: [
          'Which documents are authoritative?',
          'How often do they change?',
          'Who is allowed to access which content?',
          'Are there duplicates or conflicting versions?',
          'Does the answer need citations or source links?',
        ],
      },
      {
        heading: 'Define what “good” means',
        paragraphs: [
          'Collect real questions employees or customers ask and define what a correct answer should contain. That evaluation set becomes more valuable than subjective prompt tweaking because it tells you whether retrieval and answer quality are actually improving.',
        ],
      },
      {
        heading: 'Know when RAG is enough',
        paragraphs: [
          'If the job is primarily to retrieve and explain controlled knowledge, RAG is usually a cleaner starting point. Add agentic tool use only when the system genuinely needs to take actions across other systems.',
        ],
      },
    ],
  },
  {
    slug: 'startup-website-brief-what-to-include',
    title: 'What to include in a startup website brief before you hire someone',
    description: 'A simple website brief that helps a founder get better estimates, better copy and fewer revision loops.',
    category: 'Buyer Guide',
    published: '2026-09-23',
    readTime: '5 min read',
    sections: [
      {
        heading: 'A website brief does not need to be a specification',
        paragraphs: [
          'The useful information is commercial, not technical: who the site is for, what the visitor should understand, what action they should take, and what proof you can show.',
        ],
      },
      {
        heading: 'The minimum useful brief',
        paragraphs: ['A short document or email can be enough if it answers the right questions.'],
        bullets: [
          'Who is the primary audience?',
          'What problem does the business solve?',
          'What should a visitor do next?',
          'What pages are definitely required?',
          'What proof, testimonials or credentials exist?',
          'Who will provide copy, images and brand assets?',
          'What is the target launch date?',
        ],
      },
      {
        heading: 'Separate launch requirements from the wish list',
        paragraphs: [
          'A clear launch version reduces cost and revision cycles. Features such as advanced calculators, customer portals, multilingual content or large CMS workflows can be planned without blocking the first credible version of the site.',
        ],
      },
      {
        heading: 'Ask about ownership and handover',
        paragraphs: [
          'Before work begins, clarify hosting, domain access, analytics, source files, code ownership, third-party subscriptions and who is responsible for updates after launch. Those operational details matter as much as the visual design.',
        ],
      },
    ],
  }
]

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}
