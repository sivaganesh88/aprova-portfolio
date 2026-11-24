import { useEffect, useState } from 'react'
import { reels } from '../data/media'

const pad = (n) => String(n).padStart(2, '0')

function Placeholder({ label }) {
  const bars = ['#e8e8e8', '#e6d84a', '#00D4FF', '#00E676', '#d94fd0', '#e0453a', '#3b4fd9']
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex flex-1">{bars.map((c) => <div key={c} className="flex-1" style={{ background: c }} />)}</div>
      <div className="truncate bg-ink px-2 py-2 text-center text-[10px] text-paper sm:text-xs">No signal: {label}</div>
    </div>
  )
}

export default function ShowreelPlayer({ tab, setTab, scan }) {
  const tabs = Object.keys(reels)
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)
  const [secs, setSecs] = useState(0)
  const items = reels[tab]
  const cur = items[idx] || items[0]

  useEffect(() => { setIdx(0) }, [tab])
  useEffect(() => { setFailed(false) }, [tab, idx])
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const tc = `${pad(Math.floor(secs / 3600))}:${pad(Math.floor(secs / 60) % 60)}:${pad(secs % 60)}:00`
  const badge = 'pointer-events-none absolute z-10 bg-black/60 px-2 py-1 text-[10px] text-white sm:text-xs'

  return (
    <section id="showreel" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-display text-2xl tracking-widest sm:text-3xl">SHOWREEL</h2>

      <div role="tablist" className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`border border-ink px-4 py-2 text-xs transition-colors ${tab === t ? 'bg-ink text-paper' : 'bg-paper hover:bg-cyan/30'}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 border border-ink bg-[#d9dbd6] p-3 sm:p-5">
        <div className={`relative aspect-video w-full overflow-hidden rounded-[18px] border-[6px] border-ink bg-black ${scan ? 'scanlines' : ''}`}>
          <div className="analog-grade absolute inset-0">
            {cur.src && !failed ? (
              cur.type === 'video' ? (
                <video key={cur.src} src={cur.src} poster={cur.poster || undefined} controls playsInline preload="metadata"
                  onError={() => setFailed(true)} className="h-full w-full object-cover" />
              ) : (
                <img key={cur.src} src={cur.src} alt={cur.title} onError={() => setFailed(true)} className="h-full w-full object-cover" />
              )
            ) : (
              <Placeholder label={cur.title} />
            )}
          </div>
          <div className={`${badge} left-3 top-3 flex items-center gap-2`}>
            <span className="rec-dot h-2 w-2 rounded-full bg-red-500" /> REC
          </div>
          <div className={`${badge} right-3 top-3`}>NTSC</div>
          <div className={`${badge} bottom-3 left-3`}>TC {tc}</div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-[10px] sm:text-xs">
          <span className="truncate">{cur.title}</span>
          <span className="shrink-0">{cur.tc}</span>
        </div>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((it, i) => (
          <li key={it.title}>
            <button onClick={() => setIdx(i)} aria-current={i === idx}
              className={`w-full border p-3 text-left text-xs transition-colors ${i === idx ? 'border-ink bg-ink text-paper' : 'border-ink/40 bg-paper hover:border-ink'}`}>
              <span className="block truncate">{it.title}</span>
              <span className={`mt-1 block text-[10px] ${i === idx ? 'text-mint' : 'opacity-60'}`}>{it.tc}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
