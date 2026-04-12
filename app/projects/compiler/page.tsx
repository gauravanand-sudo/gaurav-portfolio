import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CompilerDemo from '@/components/CompilerDemo'

const highlights = [
  'Flex lexer for tokenization with line-aware diagnostics',
  'Bison grammar producing an LALR parser and structured AST',
  'Semantic validation for duplicates, missing fields, bad types, and memory overlap',
  'Interactive browser UI that exposes every front-end compiler stage clearly',
]

export default function CompilerProjectPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 28px 96px' }}>
        <section style={{ marginBottom: '42px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '10px',
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}>
            Compiler Project
          </p>
          <h1 style={{
            fontSize: 'clamp(36px, 7vw, 56px)',
            lineHeight: 1.04,
            color: 'var(--text-hi)',
            letterSpacing: '-0.03em',
            margin: 0,
            maxWidth: '10ch',
          }}>
            Memory description language compiler
          </h1>
          <p style={{
            marginTop: '20px',
            maxWidth: '700px',
            color: 'var(--text-lo)',
            fontSize: '15px',
            lineHeight: 1.85,
          }}>
            I built this project to make compiler front-end stages easier to see, not just easier to
            run. Instead of stopping at pass or fail, the demo exposes tokenization, grammar
            reductions, AST construction, and semantic errors in sequence.
          </p>
        </section>

        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px',
          marginBottom: '24px',
        }}>
          <div style={{
            border: '1px solid var(--border)',
            background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
            borderRadius: '14px',
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
              Why it exists
            </p>
            <p style={{ color: 'var(--text-lo)', fontSize: '14px', lineHeight: 1.85 }}>
              The original compiler started as a Flex/Bison front-end for validating a small memory
              description language. I extended it into a portfolio-grade demo so someone can paste
              source code and immediately see what each stage of a compiler is doing internally.
            </p>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
            borderRadius: '14px',
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
              Highlights
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-lo)', display: 'grid', gap: '10px', lineHeight: 1.7 }}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <CompilerDemo />
      </main>
      <Footer />
    </>
  )
}
