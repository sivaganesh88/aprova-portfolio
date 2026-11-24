const services = [
  ['WEDDING FILMS', 'Full-day coverage cut into a film you will rewatch for decades.'],
  ['COMMERCIAL ADS', 'Product spots and campaign cuts, from concept to delivery.'],
  ['RETRO VISUAL DIRECTION', 'Camcorder, VHS and 8mm looks designed for your brand.'],
  ['EDITING', 'Color, sound and pacing with warm analog grading.'],
]

export default function AboutServices() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
      <div className="border border-ink bg-paper p-6 sm:p-8">
        <h2 className="font-display text-2xl tracking-widest sm:text-3xl">ABOUT</h2>
        <p className="mt-5 max-w-prose text-sm leading-7">
          Aprova is a videography studio for weddings, commercial ads and retro analog visuals. We shoot digital and
          finish on tape: warm color, soft grain and the quiet drift of a camcorder, so your day or your brand feels
          remembered instead of just recorded.
        </p>
      </div>
      <div className="border border-ink bg-paper p-6 sm:p-8">
        <h2 className="font-display text-2xl tracking-widest sm:text-3xl">SERVICES</h2>
        <ul className="mt-5 divide-y divide-ink/20">
          {services.map(([t, d]) => (
            <li key={t} className="py-3">
              <p className="text-sm font-bold">{t}</p>
              <p className="mt-1 text-xs leading-6 opacity-75">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
