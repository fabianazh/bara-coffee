import { useState, useEffect } from 'react'
import { WaIcon, MenuIcon, XIcon, ArrowIcon } from './Icons'

const links = [
  { href: '#menu',    label: 'Menu' },
  { href: '#about',   label: 'Tentang' },
  { href: '#testi',   label: 'Testimoni' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#contact', label: 'Kontak' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-cream/85 backdrop-blur-md shadow-[0_2px_0_rgba(27,58,139,0.06)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src="/assets/bara-wordmark.png"
              alt="BARA COFFEE"
              className="h-9 md:h-10 w-auto group-hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span className="wordmark text-bara text-2xl hidden">BARA</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-bara/85 hover:text-bara hover:bg-bara/[0.08] px-3.5 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281298918270?text=Hai%20Bara%20Coffee%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-bara text-cream-light px-4 md:px-5 py-2.5 rounded-full text-sm font-bold hover:bg-bara-deep transition-colors"
            >
              <WaIcon width={15} height={15} />
              <span>Pesan</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-10 h-10 rounded-full bg-bara text-cream-light flex items-center justify-center"
            >
              <MenuIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-bara/40 backdrop-blur-sm flex items-end"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full bg-cream-light rounded-t-[28px] overflow-hidden shadow-[0_-12px_50px_rgba(20,46,112,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 pt-5 pb-3 flex items-center justify-between">
              <img src="/assets/bara-wordmark.png" alt="BARA COFFEE" className="h-9 w-auto"
                onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }} />
              <span className="wordmark text-bara text-2xl hidden">BARA</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-10 h-10 rounded-full bg-cream border-2 border-bara/15 text-bara flex items-center justify-center"
              >
                <XIcon width={18} height={18} />
              </button>
            </div>

            <div className="mx-5">
              <div
                className="h-3.5 rounded-t-xl"
                style={{ background: 'repeating-linear-gradient(90deg, #1B3A8B 0 14px, #F4ECDA 14px 28px)' }}
              />
            </div>

            <div className="px-5 pt-2">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 ${i < links.length - 1 ? 'dashed-row' : ''}`}
                >
                  <span className="wordmark text-bara text-2xl">{l.label}</span>
                  <ArrowIcon width={22} height={22} className="text-bara" />
                </a>
              ))}
            </div>

            <div className="p-5 pt-4">
              <a
                href="https://wa.me/6281298918270?text=Hai%20Bara%20Coffee%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-bara text-cream-light font-bold text-base py-4 rounded-full shadow-[0_8px_0_-2px_rgba(20,46,112,0.4)]"
              >
                <WaIcon width={18} height={18} />
                Pesan via WhatsApp
              </a>
              <p className="text-center text-bara/55 text-xs mt-3 font-semibold">
                0812 9891 8270 · @__baracoffee
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
