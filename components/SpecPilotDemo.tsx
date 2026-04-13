'use client'

import { useState } from 'react'

type RetrievalChunk = {
  title: string
  score: string
  snippet: string
}

type Scenario = {
  label: string
  query: string
  answer: string
  retrieval: RetrievalChunk[]
  reranked: RetrievalChunk[]
}

const scenarios: Scenario[] = [
  {
    label: 'Power Mode Bring-up',
    query: 'Which sequence enables low-power mode without breaking the wake-up interrupt path?',
    answer:
      'The safe sequence is: program the retention bits first, enable the wake-up interrupt source, flush outstanding register writes, and only then assert the low-power control bit. The retrieved notes also warn that gating the peripheral clock before the interrupt mux is latched can suppress the wake signal.',
    retrieval: [
      {
        title: 'PMU Integration Guide',
        score: '0.86',
        snippet:
          'Retention configuration must be written before LP_MODE_EN is asserted. Wake interrupt routing should be validated before clock gating.',
      },
      {
        title: 'SoC Bring-up Notes',
        score: '0.81',
        snippet:
          'A previous failure mode occurred when the peripheral clock was gated early, preventing the wake interrupt from propagating.',
      },
      {
        title: 'Register Map Appendix',
        score: '0.73',
        snippet:
          'LP_MODE_EN is located in PMU_CTRL[4]. WAKE_SRC_SEL selects the interrupt source and must be non-zero.',
      },
    ],
    reranked: [
      {
        title: 'PMU Integration Guide',
        score: '0.94',
        snippet:
          'Most relevant because it describes the exact ordering constraints around retention, interrupt routing, and low-power entry.',
      },
      {
        title: 'SoC Bring-up Notes',
        score: '0.91',
        snippet:
          'Promoted after reranking because it captures the concrete failure mode that caused missed wake-ups in hardware validation.',
      },
    ],
  },
  {
    label: 'PCIe Debug',
    query: 'Why would LTSSM stay in Recovery.RcvrLock after equalization completes?',
    answer:
      'The most likely causes in the retrieved material are stale preset values, lane margin mismatch, or a timeout in the receiver lock confirmation window. The reranked debug guide recommends checking preset propagation, confirming equalization coefficients per lane, and correlating LTSSM logs with PHY lock counters before retraining.',
    retrieval: [
      {
        title: 'PCIe PHY Debug Guide',
        score: '0.88',
        snippet:
          'RcvrLock stalls can occur when equalization coefficients are accepted but lane lock confirmation does not converge within the timeout window.',
      },
      {
        title: 'Validation Lab Notebook',
        score: '0.79',
        snippet:
          'Preset mismatch across lanes produced intermittent Recovery loops despite nominal equalization completion.',
      },
      {
        title: 'PHY Register Reference',
        score: '0.70',
        snippet:
          'Lock counters and equalization status bits are available per lane for post-failure correlation.',
      },
    ],
    reranked: [
      {
        title: 'PCIe PHY Debug Guide',
        score: '0.96',
        snippet:
          'Reranked highest because it directly maps the failure state to timing, coefficient, and lock-window diagnostics.',
      },
      {
        title: 'Validation Lab Notebook',
        score: '0.89',
        snippet:
          'Included as the second citation because it captures the same field failure in a real validation run.',
      },
    ],
  },
  {
    label: 'Spec Summarization',
    query: 'Summarize the reset requirements for the DMA path in plain English with citations.',
    answer:
      'The DMA path needs three things during reset: clear pending descriptors, reset the ownership bits before traffic resumes, and wait until the channel idle flag is observed before re-enabling fetch. The citations emphasize that skipping the idle check can leave one stale descriptor visible to hardware even though software believes the queue is empty.',
    retrieval: [
      {
        title: 'DMA Programmer Guide',
        score: '0.84',
        snippet:
          'Descriptor ownership must be reset before queue fetch is re-enabled. Software should wait for CH_IDLE before issuing START.',
      },
      {
        title: 'Reset Sequencing Spec',
        score: '0.78',
        snippet:
          'Pending DMA descriptors should be invalidated or drained before bringing the path back online after reset.',
      },
      {
        title: 'Errata Note 18',
        score: '0.71',
        snippet:
          'A stale descriptor may persist if START is issued before the idle indication has propagated.',
      },
    ],
    reranked: [
      {
        title: 'DMA Programmer Guide',
        score: '0.93',
        snippet:
          'Best grounding source because it contains the normative reset and restart sequence for the DMA engine.',
      },
      {
        title: 'Errata Note 18',
        score: '0.87',
        snippet:
          'Reranked into the answer because it explains the concrete hazard behind the idle-wait requirement.',
      },
    ],
  },
]

export default function SpecPilotDemo() {
  const [index, setIndex] = useState(0)
  const current = scenarios[index]

  return (
    <section id="specpilot-demo" style={{ marginTop: '34px' }}>
      <div style={{
        border: '1px solid var(--border)',
        background: 'linear-gradient(180deg, rgba(29, 39, 36, 0.95), rgba(23, 31, 28, 0.98))',
        borderRadius: '18px',
        overflow: 'hidden',
      }}>
        <div style={{
          borderBottom: '1px solid var(--border)',
          padding: '18px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '18px',
          flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '10px',
              color: 'var(--accent)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              Interactive Mock
            </p>
            <h3 style={{ margin: 0, color: 'var(--text-hi)', fontSize: '20px' }}>
              Retrieval candidates, reranking, grounded answer
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {scenarios.map((scenario, scenarioIndex) => (
              <button
                key={scenario.label}
                onClick={() => setIndex(scenarioIndex)}
                style={{
                  border: scenarioIndex === index ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: scenarioIndex === index ? 'rgba(182, 215, 198, 0.12)' : 'rgba(35, 46, 42, 0.74)',
                  color: scenarioIndex === index ? 'var(--text-hi)' : 'var(--text-mid)',
                  padding: '8px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {scenario.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: '0',
        }}>
          <div style={{ padding: '22px 20px', borderRight: '1px solid var(--border)' }}>
            <div style={{
              padding: '14px 16px',
              borderRadius: '14px',
              background: 'rgba(18, 24, 22, 0.78)',
              border: '1px solid rgba(182, 215, 198, 0.1)',
              marginBottom: '18px',
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: '10px',
                color: 'var(--text-mid)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                User Query
              </p>
              <p style={{ margin: 0, color: 'var(--text-hi)', lineHeight: 1.7, fontSize: '15px' }}>
                {current.query}
              </p>
            </div>

            <div style={{
              padding: '16px',
              borderRadius: '14px',
              background: 'linear-gradient(180deg, rgba(33, 47, 41, 0.96), rgba(24, 35, 31, 0.98))',
              border: '1px solid rgba(182, 215, 198, 0.14)',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                gap: '12px',
              }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '10px',
                  color: 'var(--accent)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>
                  Grounded Answer
                </p>
                <span style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '10px',
                  color: 'var(--text-mid)',
                  padding: '4px 8px',
                  borderRadius: '999px',
                  border: '1px solid var(--border)',
                  background: 'rgba(18, 24, 22, 0.72)',
                }}>
                  LLM + citations
                </span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-lo)', lineHeight: 1.85, fontSize: '14px' }}>
                {current.answer}
              </p>
            </div>
          </div>

          <div style={{ padding: '22px 20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <p style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: '10px',
                color: 'var(--text-mid)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                Candidate Retrieval
              </p>
              <div style={{ display: 'grid', gap: '10px' }}>
                {current.retrieval.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid var(--border)',
                      background: 'rgba(18, 24, 22, 0.72)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--text-hi)', fontSize: '13px' }}>{item.title}</strong>
                      <span style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '11px',
                        color: 'var(--accent-strong)',
                      }}>
                        {item.score}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-mid)', lineHeight: 1.6, fontSize: '12px' }}>
                      {item.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: '10px',
                color: 'var(--text-mid)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                PyTorch Reranker Output
              </p>
              <div style={{ display: 'grid', gap: '10px' }}>
                {current.reranked.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid rgba(182, 215, 198, 0.16)',
                      background: 'rgba(182, 215, 198, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--text-hi)', fontSize: '13px' }}>{item.title}</strong>
                      <span style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '11px',
                        color: 'var(--accent)',
                      }}>
                        {item.score}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-mid)', lineHeight: 1.6, fontSize: '12px' }}>
                      {item.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '16px 20px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          background: 'rgba(18, 24, 22, 0.6)',
        }}>
          {['lexical retrieval', 'PyTorch cross-encoder', 'Hugging Face generation', 'citation grounding'].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: '11px',
                color: 'var(--text-mid)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                padding: '5px 10px',
                background: 'rgba(35, 46, 42, 0.8)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
