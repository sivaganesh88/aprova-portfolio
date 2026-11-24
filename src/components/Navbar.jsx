const links = ['SHOWREEL', 'WEDDINGS', 'ADS', 'ABOUT', 'CONTACT']
const target = { SHOWREEL: 'showreel', WEDDINGS: 'showreel', ADS: 'showreel', ABOUT: 'about', CONTACT: 'contact' }

function Toggle({ label, on, onClick }) {
  return (
    <button onClick={onClick} aria-pressed={on}
      className="flex items-center gap-2 border border-ink bg-paper px-2 py-1 text-[10px] sm:text-xs hover:bg-ink hover:text-paper transition-colors">
      <span className={`h-2 w-2 border border-ink ${on ? 'bg-mint' : 'bg-transparent'}`} />
      {label}
    </button>
  )
}

export default function Navbar({ scan, setScan, mobile, setMobile, embedded, onPick }) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex items-center gap-2">
          <img src="/aprova-logo.svg" alt="" className="h-7 w-7" />
          <span className="font-display text-lg tracking-widest">APROVA</span>
        </a>
        <nav className="order-3 col-span-2 flex gap-5 overflow-x-auto text-xs md:order-none md:col-span-1" aria-label="Primary">
          {links.map((l) => (
            <a key={l} href={`#${target[l]}`} onClick={() => ['WEDDINGS', 'ADS'].includes(l) && onPick(l)}
              className="whitespace-nowrap py-1 underline-offset-4 decoration-cyan decoration-2 hover:underline">{l}</a>
          ))}
        </nav>
        <div className="flex justify-end gap-2">
          <Toggle label={scan ? 'VHS SCANLINES ON' : 'VHS SCANLINES OFF'} on={scan} onClick={() => setScan(!scan)} />
          {!embedded && <span className="hidden sm:block"><Toggle label="MOBILE VIEW" on={mobile} onClick={() => setMobile(!mobile)} /></span>}
        </div>
      </div>
    </header>
  )
}
