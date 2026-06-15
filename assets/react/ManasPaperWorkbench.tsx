import type { ReactNode } from 'react'

export interface ManasPaperStatusItem {
  label: string
  tone?: 'neutral' | 'live' | 'ok' | 'paused' | 'warn' | 'error'
}

export interface ManasPaperStreamItem {
  id: string
  time: string
  speaker: string
  content: ReactNode
  isImportant?: boolean
  isMuted?: boolean
}

export interface ManasPaperWorkbenchProps {
  kicker?: string
  title: string
  statusItems: ManasPaperStatusItem[]
  primaryTitle: string
  primaryDescription?: string
  sideTitle: string
  sideDescription?: string
  streamItems: ManasPaperStreamItem[]
  sideContent: ReactNode
  topActions?: ReactNode
  controls?: ReactNode
  emptyTitle?: string
  emptyDescription?: string
}

export function ManasPaperWorkbench({
  kicker,
  title,
  statusItems,
  primaryTitle,
  primaryDescription,
  sideTitle,
  sideDescription,
  streamItems,
  sideContent,
  topActions,
  controls,
  emptyTitle = '暂无内容',
  emptyDescription = '等待新的内容进入当前工作区。',
}: ManasPaperWorkbenchProps) {
  return (
    <section className="mp-paper-root">
      <header className="mp-topbar">
        <div className="mp-title-block">
          {kicker ? <span className="mp-kicker">{kicker}</span> : null}
          <h1 className="mp-title">{title}</h1>
        </div>
        <div className="mp-status-line" aria-label="当前状态">
          {statusItems.map((item) => (
            <span key={item.label}>
              <i className={readDotClassName(item.tone)} aria-hidden="true" />
              {item.label}
            </span>
          ))}
          {topActions}
        </div>
      </header>

      <div className="mp-body">
        <main className="mp-main-pane">
          <div className="mp-pane-header">
            <div>
              <h2>{primaryTitle}</h2>
              {primaryDescription ? <p>{primaryDescription}</p> : null}
            </div>
          </div>

          <div className="mp-stream">
            {streamItems.length > 0 ? (
              streamItems.map((item) => (
                <article key={item.id} className={readStreamRowClassName(item)}>
                  <time>{item.time}</time>
                  <strong>{item.speaker}</strong>
                  <p>{item.content}</p>
                </article>
              ))
            ) : (
              <div className="mp-empty">
                <strong>{emptyTitle}</strong>
                <p>{emptyDescription}</p>
              </div>
            )}
          </div>
        </main>

        <aside className="mp-side-pane">
          <div className="mp-pane-header">
            <div>
              <h3>{sideTitle}</h3>
              {sideDescription ? <p>{sideDescription}</p> : null}
            </div>
          </div>
          <div className="mp-side-content">{sideContent}</div>
        </aside>
      </div>

      {controls ? (
        <footer className="mp-controlbar">
          <div className="mp-action-row">{controls}</div>
        </footer>
      ) : null}
    </section>
  )
}

function readDotClassName(tone: ManasPaperStatusItem['tone']) {
  const toneClass = tone ? ` is-${tone}` : ''
  return `mp-dot${toneClass}`
}

function readStreamRowClassName(item: ManasPaperStreamItem) {
  return [
    'mp-stream-row',
    item.isImportant ? 'is-important' : '',
    item.isMuted ? 'is-muted' : '',
  ].filter(Boolean).join(' ')
}
