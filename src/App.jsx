import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShowreelPlayer from './components/ShowreelPlayer'
import AboutServices from './components/AboutServices'
import ContactBar from './components/ContactBar'

const embedded = new URLSearchParams(window.location.search).has('embed')

export default function App() {
  const [scan, setScan] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [tab, setTab] = useState('WEDDINGS')

  // Mobile view: render the site in a 375px iframe so the real responsive breakpoints apply.
  if (mobile && !embedded) {
    return (
      <div className="min-h-screen p-4">
        <button onClick={() => setMobile(false)} className="mb-4 border border-ink bg-paper px-3 py-2 text-xs hover:bg-ink hover:text-paper">
          Exit mobile view
        </button>
        <div className="mx-auto w-[375px] max-w-full border-[10px] border-ink bg-paper">
          <iframe title="Mobile preview" src="/?embed=1" className="block h-[760px] w-full border-0" />
        </div>
      </div>
    )
  }

  return (
    <div>
      {scan && <div className="page-scan" aria-hidden="true" />}
      <Navbar scan={scan} setScan={setScan} mobile={mobile} setMobile={setMobile} embedded={embedded} onPick={setTab} />
      <main>
        <Hero />
        <ShowreelPlayer tab={tab} setTab={setTab} scan={scan} />
        <AboutServices />
      </main>
      <ContactBar />
    </div>
  )
}
