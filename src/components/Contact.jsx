import { WaIcon, PinIcon, IgIcon, TtIcon, ArrowIcon, SparkleIcon, CupIcon } from './Icons'

const CHANNELS = [
  { label: 'WHATSAPP',    title: '0812 9891 8270',  sub: 'Pesan langsung, balas cepat',  cta: 'Chat sekarang', href: 'https://wa.me/6281298918270?text=Hai%20Bara%20Coffee', Icon: WaIcon },
  { label: 'GOOGLE MAPS', title: 'Jl. Sarasa',      sub: 'Sebelah kampus IPB Sukabumi',  cta: 'Buka maps',     href: 'https://maps.app.goo.gl/QRK9ardKptL9gHrZA',           Icon: PinIcon },
  { label: 'INSTAGRAM',   title: '@__baracoffee',   sub: 'Update menu & promo terbaru',  cta: 'Follow IG',     href: 'https://instagram.com/__baracoffee',                  Icon: IgIcon },
  { label: 'TIKTOK',      title: '@bara.coffee',    sub: 'Behind-the-scenes & resep',    cta: 'Follow TikTok', href: 'https://tiktok.com/@bara.coffee',                     Icon: TtIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-light grain py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12 md:mb-16">
          <span className="tan-pill text-xs mb-3 inline-block">— HUBUNGI KAMI</span>
          <h2 className="wordmark text-bara text-5xl md:text-7xl mt-4 mb-3">KETEMU<br />DI BARA.</h2>
          <p className="font-hand text-bara/70 text-3xl md:text-4xl">order, follow, mampir.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CHANNELS.map(({ label, title, sub, cta, href, Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal block bg-bara text-cream-light rounded-3xl p-6 md:p-7 hover:bg-bara-deep transition-colors group relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-full bg-cream-light/15 flex items-center justify-center">
                  <Icon width={18} height={18} className="text-cream-light" />
                </div>
                <ArrowIcon width={16} height={16} className="text-cream-light/50 group-hover:text-cream-light transition-colors" />
              </div>
              <p className="text-cream-light/65 text-[10px] tracking-[0.2em] font-bold mb-1.5">{label}</p>
              <p className="text-cream-light font-bold text-xl leading-tight mb-1">{title}</p>
              <p className="text-cream-light/70 text-sm mb-4">{sub}</p>
              <p className="text-cream-light text-sm font-bold inline-flex items-center gap-1.5 border-b border-cream-light/30 pb-1">
                {cta} →
              </p>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div className="reveal mt-12 md:mt-16 bg-bara rounded-3xl p-8 md:p-14 text-center text-cream-light relative overflow-hidden">
          <SparkleIcon width={60} height={60} className="absolute top-8 left-8 text-cream-light/10" />
          <SparkleIcon width={40} height={40} className="absolute bottom-10 right-12 text-cream-light/10" />
          <CupIcon width={100} height={100} className="absolute -bottom-4 right-1/4 text-cream-light/[0.08] hidden md:block" />

          <span className="tan-pill text-xs mb-4 inline-block">PESAN SEKARANG JUGA</span>
          <h3 className="wordmark text-cream-light text-5xl md:text-7xl mb-4 mt-2 leading-[0.9]">TAKE IT,<br />DRINK IT.</h3>
          <p className="font-hand text-cream-light/85 text-3xl md:text-4xl mb-6">— kami antar via WA.</p>
          <a
            href="https://wa.me/6281298918270?text=Hai%20Bara%20Coffee%2C%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary pulse-cta text-base md:text-lg px-8 py-4"
          >
            <WaIcon width={20} height={20} />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
