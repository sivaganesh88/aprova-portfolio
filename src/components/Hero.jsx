export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:py-24">
      <img src="/aprova-logo.svg" alt="APROVA perspective tunnel logo" className="h-28 w-28 sm:h-36 sm:w-36" />
      <h1 className="mt-8 font-display text-5xl tracking-[0.18em] sm:text-7xl md:text-8xl">APROVA</h1>
      <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan to-mint" />
      <p className="mt-6 max-w-md text-sm sm:text-base">Weddings &amp; Ads — Cut on Analog Tape.</p>
      <a href="#showreel" className="mt-8 border border-ink bg-ink px-6 py-3 text-xs text-paper transition-colors hover:bg-cyan hover:text-ink">
        Play showreel
      </a>
    </section>
  )
}
