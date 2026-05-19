import { WaIcon, IgIcon, TtIcon, PinIcon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bara-deep text-cream-light grain relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-8">
        {/* Stripe */}
        <div
          className="mb-12 rounded-xl"
          style={{
            background: 'repeating-linear-gradient(90deg, #B89972 0 14px, #F4ECDA 14px 28px)',
            height: 10,
          }}
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/bara-logo.jpeg"
                alt=""
                className="w-12 h-12 rounded-full ring-2 ring-cream-light/30 object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="leading-none">
                <p className="wordmark text-cream-light text-2xl">BARA</p>
                <p className="font-body font-semibold text-cream-light/65 text-[10px] tracking-[0.3em] uppercase">coffee</p>
              </div>
            </div>
            <p className="font-hand text-cream-light text-3xl md:text-4xl leading-tight mb-4">
              Take it, drink it.<br />Kopi keliling Sukabumi.
            </p>
            <p className="text-cream-light/70 text-sm leading-relaxed max-w-xs">
              Jl. Sarasa, sebelah kampus IPB Sukabumi. Buka setiap hari, 08.00 – 22.00 WIB.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <p className="text-tan-light uppercase text-[10px] tracking-[0.25em] font-bold mb-4">Jelajahi</p>
            <ul className="space-y-3">
              {[
                ['#menu',    'Menu'],
                ['#about',   'Tentang'],
                ['#testi',   'Testimoni'],
                ['#gallery', 'Galeri'],
                ['#contact', 'Kontak'],
              ].map(([h, t]) => (
                <li key={h}>
                  <a href={h} className="text-cream-light hover:text-cream-light/70 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-3 h-px bg-cream-light/40 group-hover:bg-cream-light transition-colors" />
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / contact */}
          <div className="md:col-span-4">
            <p className="text-tan-light uppercase text-[10px] tracking-[0.25em] font-bold mb-4">Hubungi & Ikuti</p>
            <ul className="space-y-3">
              {[
                { href: 'https://wa.me/6281298918270',           Icon: WaIcon,  label: 'WhatsApp',    sub: '0812 9891 8270' },
                { href: 'https://instagram.com/__baracoffee',    Icon: IgIcon,  label: 'Instagram',   sub: '@__baracoffee' },
                { href: 'https://tiktok.com/@bara.coffee',       Icon: TtIcon,  label: 'TikTok',      sub: '@bara.coffee' },
                { href: 'https://maps.app.goo.gl/QRK9ardKptL9gHrZA', Icon: PinIcon, label: 'Google Maps', sub: 'Jl. Sarasa, Sukabumi' },
              ].map(({ href, Icon, label, sub }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-cream-light hover:text-cream-light/70 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full bg-cream-light/[0.12] flex items-center justify-center shrink-0">
                      <Icon width={14} height={14} />
                    </span>
                    <span>
                      <span className="font-bold">{label}</span>
                      <br />
                      <span className="text-cream-light/70 text-sm">{sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-2 select-none pointer-events-none">
        <p
          className="footer-wordmark text-center"
          style={{ fontSize: 'clamp(5rem, 22vw, 22rem)' }}
        >
          BARA
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-cream-light/15">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-light/60">
          <p>© {year} Bara Coffee · Kedai Kopi Sukabumi · All rights reserved</p>
          <p className="font-hand text-base text-cream-light/80">Take it, drink it.</p>
        </div>
      </div>
    </footer>
  )
}
