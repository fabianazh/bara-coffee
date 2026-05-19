import { useState } from 'react'
import { WaIcon, CupIcon } from './Icons'
import { CATEGORIES, MENUS } from '../data/menu'

export default function Menu() {
  const [cat, setCat] = useState('coffee')

  return (
    <section id="menu" className="bg-cream grain py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <div>
            <span className="tan-pill text-xs mb-4 inline-block">— DAFTAR MENU</span>
            <h2 className="wordmark text-bara text-5xl md:text-7xl mt-3">MENU<br />KAMI.</h2>
          </div>
          <p className="text-ink/70 max-w-sm md:text-right md:text-base text-sm leading-relaxed">
            Semua harga dalam ribu rupiah. Klik kategori untuk lihat menunya. Order langsung via WA, kami balas cepat.
          </p>
        </div>

        {/* Category chips */}
        <div className="reveal mb-10 -mx-5 md:mx-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 px-5 md:px-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`nav-chip ${cat === c.id ? 'active' : ''}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu grid */}
        <div key={cat} className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {MENUS[cat].map((m, i) => (
            <div key={i} className="flex items-start gap-5 py-5 dashed-row group">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-bara text-lg leading-snug">{m.name}</h3>
                  {m.tag && (
                    <span className="text-[10px] uppercase tracking-wider bg-tan text-bara-deep px-2 py-0.5 rounded-full font-bold">
                      {m.tag}
                    </span>
                  )}
                </div>
                <p className="text-ink/60 text-sm leading-relaxed">{m.desc}</p>
              </div>
              <div className="font-display text-bara text-2xl md:text-3xl shrink-0 tabular-nums leading-none mt-1">
                {m.price}
                <span className="text-base font-body font-bold text-ink/40">k</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="reveal mt-12 bg-bara rounded-3xl p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5 relative overflow-hidden">
          <CupIcon width={120} height={120} className="absolute -bottom-6 -right-6 text-cream-light/10" />
          <div className="flex-1 text-cream-light relative">
            <p className="font-hand text-3xl md:text-4xl leading-none mb-2">tidak menemukan favorit kalian?</p>
            <p className="text-cream-light/80 text-sm md:text-base">
              Tanya langsung lewat WA, kami punya banyak menu yang nggak muat di sini.
            </p>
          </div>
          <a
            href="https://wa.me/6281298918270?text=Halo%2C%20saya%20mau%20tanya%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary relative shrink-0"
          >
            <WaIcon width={17} height={17} />
            Tanya menu lain
          </a>
        </div>
      </div>
    </section>
  )
}
