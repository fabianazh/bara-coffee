import { IgIcon, TtIcon } from './Icons'

const TILES = [
  { cap: 'Toko (luar)',      ratio: 'aspect-[4/5]' },
  { cap: 'Barista in action', ratio: 'aspect-square' },
  { cap: 'Interior kedai',   ratio: 'aspect-[4/5]' },
  { cap: 'Signature drink',  ratio: 'aspect-square' },
  { cap: 'Nasi goreng bara', ratio: 'aspect-[4/5]' },
  { cap: 'Team & customer',  ratio: 'aspect-square' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream grain py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <div>
            <span className="tan-pill text-xs mb-3 inline-block">— GALERI</span>
            <h2 className="wordmark text-bara text-5xl md:text-7xl mt-4">LIHAT KAMI<br />DI SINI.</h2>
          </div>
          <p className="font-hand text-bara/70 text-3xl md:text-4xl leading-none md:text-right">snap, sip, repeat.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {TILES.map((t, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className={`photo-slot ${t.ratio}`}>
                <span className="photo-slot-label">{t.cap}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://instagram.com/__baracoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            <IgIcon width={16} height={16} />
            Follow Instagram
          </a>
          <a
            href="https://tiktok.com/@bara.coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            <TtIcon width={16} height={16} />
            Cek TikTok
          </a>
        </div>
      </div>
    </section>
  )
}
