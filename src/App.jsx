import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Menu from './components/Menu'
import About from './components/About'
import Testi from './components/Testi'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { WaIcon } from './components/Icons'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  })
}

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <About />
        <Testi />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/6281298918270?text=Hai%20Bara%20Coffee%2C%20saya%20mau%20pesan"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa md:hidden"
      >
        <WaIcon width={16} height={16} />
        Pesan
      </a>
    </>
  )
}
