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
]

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug)
}
