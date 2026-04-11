'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'

type StageStatus = {
  tokenization?: boolean
  parsing?: boolean
  semantic?: boolean
}

type Token = {
  type: string
  lexeme: string
  line: number
}

type ParseEvent = {
  rule: string
  summary: string
  line: number
}

type AstProperty = {
  kind: string
  line: number
  valueType: string
  value: string | number
}

type AstBlock = {
  type: string
  name: string
  line: number
  properties: AstProperty[]
}

type Diagnostic = {
  stage: string
  severity: string
  message: string
  block: string | null
  line: number
}

type CompilerReport = {
  sourceName?: string
  status?: StageStatus
  tokens?: Token[]
  parseEvents?: ParseEvent[]
  ast?: { blocks?: AstBlock[] }
  diagnostics?: Diagnostic[]
}

const VALID_SAMPLE = `memory RAM {
  base = 0x20000000;
  size = 131072;
  type = "rw";
}

memory ROM {
  base = 0x08000000;
  size = 524288;
  type = "r";
  alias = "FLASH";
}

memory PERIPH {
  base = 0x40000000;
  size = 4096;
  type = "rw";
}`

const INVALID_SAMPLE = `memory CACHE {
  base = 0x10000000;
  size = 0;
}

memory BAD_TYPE {
  base = 0x30000000;
  size = 4096;
  type = "rx";
}

memory RAM {
  base = 0x20000000;
  size = 4096;
  type = "rw";
}

memory RAM {
  base = 0x20010000;
  size = 4096;
  type = "rw";
}

memory OVERLAP {
  base = 0x20000800;
  size = 4096;
  type = "rw";
}`

const API_BASE = process.env.NEXT_PUBLIC_MDL_API_BASE ?? ''
const ANALYZE_URL = API_BASE ? `${API_BASE}/api/analyze` : ''

export default function CompilerDemo() {
  const [source, setSource] = useState(VALID_SAMPLE)
  const [report, setReport] = useState<CompilerReport | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const diagnostics = report?.diagnostics ?? []
  const tokens = report?.tokens ?? []
  const parseEvents = report?.parseEvents ?? []
  const blocks = report?.ast?.blocks ?? []
  const hasErrors = diagnostics.some((entry) => entry.severity === 'error')

  async function runAnalysis() {
    setLoading(true)
    setError('')

    try {
      if (!ANALYZE_URL) {
        throw new Error(
          'Compiler backend is not configured yet. Set NEXT_PUBLIC_MDL_API_BASE in the portfolio deployment to your Render API URL.'
        )
      }

      const response = await fetch(ANALYZE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: 'gaurav-portfolio-demo.mdl',
        }),
      })

      const contentType = response.headers.get('content-type') ?? ''
      if (!contentType.includes('application/json')) {
        throw new Error(
          'Compiler backend returned HTML instead of JSON. Check NEXT_PUBLIC_MDL_API_BASE and the Render service URL.'
        )
      }

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Analysis request failed')
      }

      setReport(payload)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis request failed')
      setReport(null)
    } finally {
      setLoading(false)
    }
  }

  const stages = [
    {
      label: 'Tokenization',
      ok: report?.status?.tokenization,
      body: 'Flex-style scanning of source text into terminal symbols.',
    },
    {
      label: 'Parsing',
      ok: report?.status?.parsing,
      body: 'Grammar reductions building a structured AST from the token stream.',
    },
    {
      label: 'Semantic',
      ok: report?.status?.semantic,
      body: 'Validation of block properties, duplicates, and address overlap.',
    },
  ]

  return (
    <div style={{ display: 'grid', gap: '18px' }}>
      <section style={panelStyle}>
        <div style={splitHeaderStyle}>
          <div>
            <p style={eyebrowStyle}>Interactive Demo</p>
            <h2 style={headingStyle}>Run the compiler pipeline in the browser</h2>
            <p style={subtleTextStyle}>
              Paste MDL input and inspect each stage: tokenization, grammar reductions,
              AST construction, and semantic diagnostics.
            </p>
            {!ANALYZE_URL && (
              <p style={{ ...subtleTextStyle, color: '#d8b27a' }}>
                Backend pending: add <code>NEXT_PUBLIC_MDL_API_BASE</code> to the portfolio deployment
                to enable live analysis.
              </p>
            )}
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button type="button" onClick={() => setSource(VALID_SAMPLE)} style={secondaryButtonStyle}>
              Load valid sample
            </button>
            <button type="button" onClick={() => setSource(INVALID_SAMPLE)} style={secondaryButtonStyle}>
              Load invalid sample
            </button>
            <button type="button" onClick={runAnalysis} style={primaryButtonStyle} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </div>

        <textarea
          value={source}
          onChange={(event) => setSource(event.target.value)}
          spellCheck={false}
          style={textareaStyle}
        />
      </section>

      <section style={statsGridStyle}>
        <div style={metricStyle}>
          <span style={metricValueStyle}>{tokens.length}</span>
          <span style={metricLabelStyle}>Tokens</span>
        </div>
        <div style={metricStyle}>
          <span style={metricValueStyle}>{blocks.length}</span>
          <span style={metricLabelStyle}>AST Blocks</span>
        </div>
        <div style={metricStyle}>
          <span style={metricValueStyle}>{diagnostics.length}</span>
          <span style={metricLabelStyle}>Diagnostics</span>
        </div>
      </section>

      <section style={panelStyle}>
        <div style={splitHeaderStyle}>
          <div>
            <p style={eyebrowStyle}>Compiler Verdict</p>
            <h2 style={headingStyle}>Stage status</h2>
          </div>
          <span style={hasErrors ? badgeErrorStyle : badgeSuccessStyle}>
            {report ? (hasErrors ? 'Validation failed' : 'Validation passed') : 'Waiting'}
          </span>
        </div>

        <div style={statusGridStyle}>
          {stages.map((stage) => (
            <div key={stage.label} style={{
              ...statusCardStyle,
              borderColor: stage.ok ? '#1f5f4b' : '#242424',
            }}>
              <span style={statusLabelStyle}>{stage.label}</span>
              <strong style={statusStrongStyle}>{stage.ok ? 'Clear' : 'Pending / blocked'}</strong>
              <span style={subtleSmallTextStyle}>{stage.body}</span>
            </div>
          ))}
        </div>
        {error && <p style={{ ...subtleTextStyle, color: '#f87171', marginTop: '16px' }}>{error}</p>}
      </section>

      <section style={twoColGridStyle}>
        <div style={panelStyle}>
          <p style={eyebrowStyle}>Stage 1</p>
          <h2 style={headingStyle}>Token stream</h2>
          <div style={chipWrapStyle}>
            {tokens.length > 0 ? tokens.map((token, index) => (
              <div key={`${token.type}-${token.line}-${index}`} style={tokenStyle}>
                <span style={tokenTypeStyle}>{token.type}</span>
                <span style={tokenLexemeStyle}>{token.lexeme}</span>
                <span style={lineTextStyle}>line {token.line}</span>
              </div>
            )) : <p style={subtleTextStyle}>Run the analyzer to populate tokens.</p>}
          </div>
        </div>

        <div style={panelStyle}>
          <p style={eyebrowStyle}>Stage 2</p>
          <h2 style={headingStyle}>Grammar reductions</h2>
          <div style={stackStyle}>
            {parseEvents.length > 0 ? parseEvents.map((event, index) => (
              <div key={`${event.rule}-${index}`} style={listCardStyle}>
                <span style={monoLabelStyle}>{event.rule}</span>
                <p style={subtleTextStyle}>{event.summary}</p>
                <span style={lineTextStyle}>line {event.line}</span>
              </div>
            )) : <p style={subtleTextStyle}>No reductions recorded yet.</p>}
          </div>
        </div>

        <div style={panelStyle}>
          <p style={eyebrowStyle}>Stage 3</p>
          <h2 style={headingStyle}>Abstract syntax tree</h2>
          <div style={stackStyle}>
            {blocks.length > 0 ? blocks.map((block) => (
              <div key={`${block.name}-${block.line}`} style={treeCardStyle}>
                <span style={monoLabelStyle}>memory {block.name} · line {block.line}</span>
                <div style={{ display: 'grid', gap: '10px', marginTop: '14px' }}>
                  {block.properties.map((prop, index) => (
                    <div key={`${prop.kind}-${index}`} style={treePropStyle}>
                      <span style={monoLabelStyle}>{prop.kind} = {String(prop.value)}</span>
                      <span style={lineTextStyle}>line {prop.line} · {prop.valueType}</span>
                    </div>
                  ))}
                </div>
              </div>
            )) : <p style={subtleTextStyle}>No AST available yet.</p>}
          </div>
        </div>

        <div style={panelStyle}>
          <p style={eyebrowStyle}>Stage 4</p>
          <h2 style={headingStyle}>Semantic diagnostics</h2>
          <div style={stackStyle}>
            {diagnostics.length > 0 ? diagnostics.map((entry, index) => (
              <div
                key={`${entry.message}-${index}`}
                style={{
                  ...listCardStyle,
                  borderLeft: `3px solid ${entry.severity === 'error' ? '#f87171' : '#facc15'}`,
                }}
              >
                <span style={metaRowStyle}>
                  {entry.stage} · {entry.severity} · line {entry.line}{entry.block ? ` · ${entry.block}` : ''}
                </span>
                <p style={subtleTextStyle}>{entry.message}</p>
              </div>
            )) : <p style={subtleTextStyle}>No violations detected.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}

const panelStyle: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.94), rgba(24, 32, 29, 0.98))',
  borderRadius: '14px',
  padding: '24px',
}

const splitHeaderStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
  flexWrap: 'wrap',
  marginBottom: '18px',
}

const twoColGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '18px',
}

const statsGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '14px',
}

const statusGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '14px',
}

const chipWrapStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'flex-start',
}

const stackStyle: CSSProperties = {
  display: 'grid',
  gap: '12px',
}

const metricStyle: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'linear-gradient(180deg, rgba(31, 41, 38, 0.9), rgba(25, 33, 30, 0.96))',
  borderRadius: '14px',
  padding: '20px',
}

const statusCardStyle: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'rgba(35, 46, 42, 0.72)',
  borderRadius: '12px',
  padding: '16px',
  display: 'grid',
  gap: '8px',
}

const tokenStyle: CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '6px',
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1px solid var(--accent-border)',
  background: 'rgba(36, 54, 48, 0.72)',
  minWidth: '104px',
}

const listCardStyle: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'rgba(34, 44, 41, 0.72)',
  borderRadius: '12px',
  padding: '14px 16px',
}

const treeCardStyle: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'rgba(34, 44, 41, 0.72)',
  borderRadius: '12px',
  padding: '16px',
}

const treePropStyle: CSSProperties = {
  borderLeft: '3px solid var(--accent-border)',
  paddingLeft: '12px',
  display: 'grid',
  gap: '6px',
}

const primaryButtonStyle: CSSProperties = {
  background: 'var(--accent)',
  color: '#16201d',
  border: '0',
  borderRadius: '8px',
  padding: '11px 16px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
}

const secondaryButtonStyle: CSSProperties = {
  background: 'rgba(35, 46, 42, 0.72)',
  color: 'var(--text-mid)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '11px 16px',
  fontSize: '13px',
  cursor: 'pointer',
}

const textareaStyle: CSSProperties = {
  width: '100%',
  minHeight: '320px',
  resize: 'vertical',
  borderRadius: '12px',
  border: '1px solid var(--border)',
  background: '#141b19',
  color: 'var(--text-hi)',
  padding: '16px',
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '13px',
  lineHeight: 1.7,
}

const eyebrowStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '10px',
  color: 'var(--accent)',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  marginBottom: '10px',
}

const headingStyle: CSSProperties = {
  fontSize: '22px',
  color: 'var(--text-hi)',
  margin: 0,
}

const subtleTextStyle: CSSProperties = {
  color: 'var(--text-lo)',
  fontSize: '13px',
  lineHeight: 1.75,
  marginTop: '8px',
}

const subtleSmallTextStyle: CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: '12px',
  lineHeight: 1.65,
}

const metricValueStyle: CSSProperties = {
  display: 'block',
  color: 'var(--text-hi)',
  fontSize: '28px',
  fontWeight: 600,
}

const metricLabelStyle: CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: '12px',
}

const badgeSuccessStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '11px',
  color: 'var(--accent-strong)',
  border: '1px solid rgba(155, 196, 177, 0.25)',
  background: 'rgba(155, 196, 177, 0.1)',
  borderRadius: '999px',
  padding: '7px 10px',
}

const badgeErrorStyle: CSSProperties = {
  ...badgeSuccessStyle,
  color: '#f87171',
  border: '1px solid rgba(248,113,113,0.2)',
  background: 'rgba(248,113,113,0.08)',
}

const statusLabelStyle: CSSProperties = {
  color: 'var(--text-mid)',
  fontSize: '12px',
}

const statusStrongStyle: CSSProperties = {
  color: 'var(--text-hi)',
  fontSize: '16px',
  fontWeight: 600,
}

const tokenTypeStyle: CSSProperties = {
  color: 'var(--accent-strong)',
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '11px',
}

const tokenLexemeStyle: CSSProperties = {
  color: 'var(--text-hi)',
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '12px',
  wordBreak: 'break-word',
}

const lineTextStyle: CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: '11px',
}

const monoLabelStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  color: 'var(--text-mid)',
  fontSize: '12px',
}

const metaRowStyle: CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}
