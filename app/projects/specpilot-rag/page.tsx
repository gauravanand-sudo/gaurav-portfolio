import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SpecPilotDemo from '@/components/SpecPilotDemo'

const architecture = [
  {
    title: 'Document ingestion',
    detail:
      'Chunk large PDFs, runbooks, and wiki pages into retrieval-sized passages while preserving section headers, product names, and source metadata for downstream citation.',
  },
  {
    title: 'Candidate retrieval',
    detail:
      'Use lexical retrieval over chunked technical notes to pull a focused candidate set before the more expensive ranking stage runs.',
  },
  {
    title: 'PyTorch reranking',
    detail:
      'Use a cross-encoder reranker in PyTorch to rescore the top retrieved passages and push the most grounded evidence into the prompt window.',
  },
  {
    title: 'Grounded generation',
    detail:
      'Send only the best evidence into the answer stage, require citations, and measure whether the response stays inside the retrieved material instead of inventing details.',
  },
]

const evaluationGoals = [
  'Citation hit-rate on long technical questions',
  'Lower hallucination rate on part numbers and register names',
  'Latency budget below 2.5s for top-k retrieval + reranking',
  'Answer helpfulness measured against manually written reference responses',
]

export default function SpecPilotRagPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 28px 96px' }}>
        <Link
          href="/#projects"
          style={{
            display: 'inline-block',
            marginBottom: '36px',
            color: 'var(--text-mid)',
            textDecoration: 'none',
            fontSize: '14px',
          }}
        >
          ← Projects
        </Link>

        <section style={{ marginBottom: '32px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '10px',
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}>
            AI Systems Project
          </p>
          <h1 style={{
            fontSize: 'clamp(38px, 7vw, 58px)',
            lineHeight: 1.02,
            color: 'var(--text-hi)',
            letterSpacing: '-0.04em',
            margin: 0,
            maxWidth: '11ch',
          }}>
            SpecPilot RAG
          </h1>
          <p style={{
            marginTop: '20px',
            maxWidth: '760px',
            color: 'var(--text-lo)',
            fontSize: '15px',
            lineHeight: 1.9,
          }}>
            SpecPilot RAG is the kind of assistant I would build for long engineering manuals,
            silicon bring-up notes, and platform runbooks where the real problem is not "chat",
            it is finding the right source quickly and answering without drifting away from the
            evidence. The working version behind this page uses lexical retrieval, a Hugging Face
            reranker in PyTorch, and a lightweight local language model to return citation-backed
            answers over a technical mini-corpus.
          </p>
        </section>

        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}>
          {['PyTorch', 'RAG', 'LLM', 'Hugging Face', 'Lexical Retrieval', 'Evaluation'].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: '11px',
                color: 'var(--text-mid)',
                background: 'rgba(35, 46, 42, 0.74)',
                border: '1px solid var(--border)',
                padding: '8px 12px',
                borderRadius: '999px',
                width: 'fit-content',
              }}
            >
              {tag}
            </span>
          ))}
        </section>

        <section style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}>
          <a
            href="#specpilot-demo"
            style={{
              border: '1px solid var(--accent)',
              background: 'var(--accent)',
              padding: '10px 16px',
              fontSize: '14px',
              color: '#16201d',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700,
            }}
          >
            Try Now ↓
          </a>
        </section>

        <section style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '18px',
          marginBottom: '26px',
        }}>
          <div style={{
            border: '1px solid var(--border)',
            background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '10px',
              color: 'var(--accent)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              Why this project
            </p>
            <p style={{ color: 'var(--text-lo)', fontSize: '14px', lineHeight: 1.9, margin: 0 }}>
              Generic chat interfaces usually break down on dense technical documentation because
              the answer quality depends more on retrieval quality than on clever wording. This
              project is shaped around that reality: stronger candidate retrieval, an explicit
              reranking stage, grounded generation, and clearer citations. It is especially
              relevant for product specs, API references, EDA flow notes, and bring-up documents
              that engineers revisit under time pressure.
            </p>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '10px',
              color: 'var(--accent)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              Model stack
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '10px', color: 'var(--text-lo)', lineHeight: 1.7 }}>
              <li>Lexical retrieval over chunked technical documents</li>
              <li>PyTorch cross-encoder reranker for relevance refinement</li>
              <li>Hugging Face generation constrained by retrieved evidence</li>
              <li>Evaluation loop for citation quality and factual drift</li>
            </ul>
          </div>
        </section>

        <SpecPilotDemo />

        <section style={{ marginTop: '56px', marginBottom: '44px' }}>
          <h2 style={{ color: 'var(--text-hi)', fontSize: '18px', marginBottom: '18px' }}>
            System architecture
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
          }}>
            {architecture.map((step) => (
              <div
                key={step.title}
                style={{
                  border: '1px solid var(--border)',
                  background: 'rgba(27, 37, 33, 0.9)',
                  borderRadius: '14px',
                  padding: '18px',
                }}
              >
                <strong style={{ display: 'block', color: 'var(--text-hi)', marginBottom: '10px', fontSize: '14px' }}>
                  {step.title}
                </strong>
                <p style={{ margin: 0, color: 'var(--text-mid)', lineHeight: 1.75, fontSize: '13px' }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          border: '1px solid var(--border)',
          background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
          borderRadius: '16px',
          padding: '24px',
        }}>
          <h2 style={{ color: 'var(--text-hi)', fontSize: '18px', marginBottom: '16px' }}>
            Evaluation goals
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '10px', color: 'var(--text-lo)', lineHeight: 1.8 }}>
            {evaluationGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
