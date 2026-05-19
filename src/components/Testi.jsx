import { StarIcon, ArrowIcon } from './Icons'

const REVIEWS = [
  { name: 'Amanda Regianti', when: '9 bulan lalu',  text: 'Makanannya enak, murah dan tempatnya nyaman banget. Ada area smoking & non-smoking room. Kids friendly. Free wifi dan ada musholanya, nongki lama pun tenang.' },
  { name: 'Zaenal Mutaqien', when: '10 bulan lalu', text: 'Tempat nyaman buat sekedar ngopi atau nugas & diskusi sambil makan-makan. Harga murah, kualitas rasa ngga murahan. Wajib coba.' },
  { name: 'Amanda Fasya',    when: '9 bulan lalu',  text: 'The best for besttt ini tempat buat nongkrong atau ngerjain tugasss. Jenis tempat duduk: area dalam ruangan, teras luar ruangan.' },
  { name: 'Caesar F.',       when: '11 bulan lalu', text: 'Tempat nyaman, minuman enak, harga mahasiswa. Recommended buat ngopi atau nongkrong sore.' },
  { name: 'Hana Soraya',     when: '9 bulan lalu',  text: 'Enak sekali. Makanan 5/5, layanan 5/5, suasana 5/5. Bakalan balik lagi.' },
  { name: 'Reza Pratama',    when: '8 bulan lalu',  text: 'Kopi susu Bara-nya juara. Sempurna setelah seharian kerja. Tempat juga adem, pelayanan ramah.' },
]

const Stars = () => (
  <div className="flex gap-0.5 text-amber-500">
    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} width={13} height={13} />)}
  </div>
)

export default function Testi() {
  return (
    <section id="testi" className="bg-cream-light grain py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <div>
            <span className="tan-pill text-xs mb-3 inline-block">— TESTIMONI</span>
            <h2 className="wordmark text-bara text-5xl md:text-7xl mt-4">DISUKAI<br />5/5 BINTANG.</h2>
          </div>
          <div className="flex items-end gap-4">
            <div className="bg-bara text-cream-light rounded-2xl p-5 text-center min-w-[110px]">
              <p className="wordmark text-3xl md:text-4xl leading-none">5.0</p>
              <div className="flex justify-center gap-0.5 mt-2 mb-1">
                {[1,2,3,4,5].map((i) => <StarIcon key={i} width={13} height={13} className="text-tan-light" />)}
              </div>
              <p className="text-cream-light/75 text-[10px] font-semibold tracking-widest">GOOGLE REVIEW</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="reveal bg-cream-soft rounded-3xl p-6 md:p-7 border border-bara/[0.08]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-bara text-cream-light flex items-center justify-center font-display text-lg">
                  {r.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-bara text-sm truncate">{r.name}</p>
                  <p className="text-ink/50 text-xs">{r.when}</p>
                </div>
                <Stars />
              </div>
              <p className="text-ink/85 text-[15px] leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="https://maps.app.goo.gl/QRK9ardKptL9gHrZA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-bara underline underline-offset-4 hover:text-bara-deep"
          >
            Lihat semua review di Google Maps
            <ArrowIcon width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
