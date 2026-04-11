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
      const response = await fetch(`${API_BASE}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: 'gaurav-portfolio-demo.mdl',
        }),
      })

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
  border: '1px solid #181818',
  background: '#0b0b0b',
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
  border: '1px solid #181818',
  background: '#0b0b0b',
  borderRadius: '14px',
  padding: '20px',
}

const statusCardStyle: CSSProperties = {
  border: '1px solid #242424',
  background: '#101010',
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
  border: '1px solid #1b2b27',
  background: '#0f1514',
  minWidth: '104px',
}

const listCardStyle: CSSProperties = {
  border: '1px solid #181818',
  background: '#101010',
  borderRadius: '12px',
  padding: '14px 16px',
}

const treeCardStyle: CSSProperties = {
  border: '1px solid #181818',
  background: '#101010',
  borderRadius: '12px',
  padding: '16px',
}

const treePropStyle: CSSProperties = {
  borderLeft: '3px solid #16352f',
  paddingLeft: '12px',
  display: 'grid',
  gap: '6px',
}

const primaryButtonStyle: CSSProperties = {
  background: '#6ee7b7',
  color: '#05110d',
  border: '0',
  borderRadius: '8px',
  padding: '11px 16px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
}

const secondaryButtonStyle: CSSProperties = {
  background: '#101010',
  color: '#a3a3a3',
  border: '1px solid #1d1d1d',
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
  border: '1px solid #1b1b1b',
  background: '#060606',
  color: '#e7e7e7',
  padding: '16px',
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '13px',
  lineHeight: 1.7,
}

const eyebrowStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '10px',
  color: '#6ee7b7',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  marginBottom: '10px',
}

const headingStyle: CSSProperties = {
  fontSize: '22px',
  color: '#efefef',
  margin: 0,
}

const subtleTextStyle: CSSProperties = {
  color: '#7a7a7a',
  fontSize: '13px',
  lineHeight: 1.75,
  marginTop: '8px',
}

const subtleSmallTextStyle: CSSProperties = {
  color: '#6f6f6f',
  fontSize: '12px',
  lineHeight: 1.65,
}

const metricValueStyle: CSSProperties = {
  display: 'block',
  color: '#f2f2f2',
  fontSize: '28px',
  fontWeight: 600,
}

const metricLabelStyle: CSSProperties = {
  color: '#6f6f6f',
  fontSize: '12px',
}

const badgeSuccessStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '11px',
  color: '#6ee7b7',
  border: '1px solid rgba(110,231,183,0.22)',
  background: 'rgba(110,231,183,0.08)',
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
  color: '#9a9a9a',
  fontSize: '12px',
}

const statusStrongStyle: CSSProperties = {
  color: '#ededed',
  fontSize: '16px',
  fontWeight: 600,
}

const tokenTypeStyle: CSSProperties = {
  color: '#6ee7b7',
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '11px',
}

const tokenLexemeStyle: CSSProperties = {
  color: '#efefef',
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: '12px',
  wordBreak: 'break-word',
}

const lineTextStyle: CSSProperties = {
  color: '#5f5f5f',
  fontSize: '11px',
}

const monoLabelStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  color: '#d8d8d8',
  fontSize: '12px',
}

const metaRowStyle: CSSProperties = {
  color: '#7d7d7d',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}
