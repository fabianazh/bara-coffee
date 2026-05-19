import { SparkleIcon, ArrowIcon } from './Icons'

const INFO_CARDS = [
  { label: 'ALAMAT',    title: 'Jl. Sarasa',     sub: 'Sebelah kampus IPB Sukabumi', href: 'https://maps.app.goo.gl/QRK9ardKptL9gHrZA' },
  { label: 'WHATSAPP',  title: '0812 9891 8270',  sub: 'Pesan langsung, balas cepat', href: 'https://wa.me/6281298918270' },
  { label: 'JAM BUKA',  title: 'Setiap hari',     sub: '08.00 – 22.00 WIB',          href: null },
  { label: 'FASILITAS', title: 'Wifi & Mushola',  sub: 'Smoking + outdoor area',      href: null },
]

export default function About() {
  return (
    <section id="about" className="bg-bara text-cream-light grain py-20 md:py-28 px-5 md:px-8 relative overflow-hidden">
      <SparkleIcon width={80} height={80} className="absolute top-12 right-8 text-cream-light/[0.08] hidden md:block" />
      <SparkleIcon width={40} height={40} className="absolute bottom-12 left-12 text-cream-light/[0.08] hidden md:block" />

      <div className="max-w-6xl mx-auto relative">
        <div className="reveal text-center mb-12 md:mb-16">
          <span className="tan-pill text-xs mb-3 inline-block">— TENTANG KAMI</span>
          <h2 className="wordmark text-cream-light text-5xl md:text-7xl mt-4 mb-3">KEDAI KOPI<br />UNTUK SEMUA.</h2>
          <p className="font-hand text-cream-light/70 text-3xl md:text-4xl">since the day kopi keliling.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-7">
          {/* Story card */}
          <div className="reveal md:col-span-7 bg-bara-deep rounded-3xl p-7 md:p-10 relative">
            <span className="absolute -top-3.5 left-7 tan-pill text-[11px]">CERITA SINGKAT</span>
            <p className="text-cream-light text-base md:text-lg leading-relaxed mb-5 mt-3">
              Bara bermula dari gerobak kopi keliling di Sukabumi. Kami percaya kopi enak gak harus mahal —
              semua orang berhak menikmati seduhan barista yang baik.
            </p>
            <p className="text-cream-light/85 text-base md:text-lg leading-relaxed">
              Sekarang kami punya kedai di Jl. Sarasa — sebelah kampus IPB Sukabumi — dengan smoking &amp; non-smoking room,
              area outdoor, free wifi, dan mushola. Tempat sempurna buat nongkrong, ngerjain tugas, atau sekedar minum kopi enak.
            </p>
            <div className="mt-7 pt-6 border-t border-cream-light/20 flex items-center gap-3">
              <img
                src="/bara-logo.jpeg"
                alt=""
                className="w-12 h-12 rounded-full ring-2 ring-cream-light/30 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="leading-tight">
                <p className="text-cream-light font-bold">@__baracoffee</p>
                <p className="text-cream-light/65 text-sm">Kedai Kopi Bara</p>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
            {INFO_CARDS.map((it, i) => {
              const Comp = it.href ? 'a' : 'div'
              return (
                <Comp
                  key={i}
                  {...(it.href ? { href: it.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="reveal block bg-bara-deep hover:bg-bara-soft transition-colors rounded-3xl p-5 md:p-6 relative"
                >
                  <p className="text-cream-light/65 text-[10px] tracking-[0.2em] font-bold mb-3">{it.label}</p>
                  <p className="text-cream-light font-bold text-lg md:text-xl leading-tight mb-1">{it.title}</p>
                  <p className="text-cream-light/75 text-xs md:text-sm leading-snug">{it.sub}</p>
                  {it.href && (
                    <ArrowIcon width={14} height={14} className="absolute top-5 right-5 text-cream-light/40" />
                  )}
                </Comp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
