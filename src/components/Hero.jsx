import { SparkleIcon, WaIcon, ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-cream grain pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Eyebrow */}
        <div className="reveal text-center mb-4 md:mb-6">
          <span className="tan-pill text-xs md:text-sm">
            KEDAI KOPI & KOPI KELILING · SUKABUMI
          </span>
        </div>

        {/* Big wordmark — sparkle di dalam sini agar posisi relatif terhadap BARA */}
        <div className="reveal relative text-center mb-2">
          {/* Sparkle kiri */}
          <SparkleIcon
            className="text-bara/70 absolute hidden md:block"
            width={52}
            height={52}
            style={{ top: "10%", left: "-3%" }}
          />
          <SparkleIcon
            className="text-bara/70 absolute hidden md:block"
            width={20}
            height={20}
            style={{ top: "5%", left: "3%" }}
          />
          <SparkleIcon
            className="text-bara/70 absolute hidden md:block"
            width={14}
            height={14}
            style={{ top: "55%", left: "2%" }}
          />
          {/* Sparkle kanan */}
          <SparkleIcon
            className="text-bara/70 absolute hidden md:block"
            width={28}
            height={28}
            style={{ top: "15%", right: "-2%" }}
          />
          <SparkleIcon
            className="text-bara/70 absolute hidden md:block"
            width={14}
            height={14}
            style={{ top: "8%", right: "3%" }}
          />
          {/* Mobile */}
          <SparkleIcon
            className="text-bara/70 absolute md:hidden"
            width={24}
            height={24}
            style={{ top: "5%", right: "2%" }}
          />
          <SparkleIcon
            className="text-bara/70 absolute md:hidden"
            width={14}
            height={14}
            style={{ top: "0%", right: "9%" }}
          />
          <h1 className="wordmark text-bara text-[24vw] md:text-[19vw] lg:text-[17rem] leading-[0.82]">
            BARA
          </h1>
        </div>

        <div className="reveal flex items-center justify-center gap-3 md:gap-5 mb-10 md:mb-14">
          <span className="flex-1 max-w-[18%] h-[2px] bg-bara/30" />
          <span className="font-hand text-bara text-3xl md:text-5xl leading-none -translate-y-1">
            coffee
          </span>
          <span className="flex-1 max-w-[18%] h-[2px] bg-bara/30" />
        </div>

        {/* Tagline + CTA */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="reveal md:col-span-6">
            <p className="font-hand text-bara text-5xl md:text-6xl leading-[1] mb-3">
              Take it, drink it.
            </p>
            <p className="text-ink/75 text-base md:text-lg leading-relaxed max-w-md mb-7">
              Kopi keliling Sukabumi yang sekarang punya kedai sendiri di Jl.
              Sarasa. Spanish latte, kopi susu bara, sampai nasi goreng bara —
              semua dengan harga mahasiswa.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6281298918270?text=Hai%20Bara%20Coffee%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary pulse-cta"
              >
                <WaIcon width={18} height={18} />
                Pesan Sekarang Juga
              </a>
              <a
                href="#menu"
                className="font-semibold text-bara hover:text-bara-deep underline underline-offset-4 px-3 py-2 inline-flex items-center gap-1.5 text-sm"
              >
                Lihat menu <ArrowIcon width={14} height={14} />
              </a>
            </div>
          </div>

          <div className="reveal md:col-span-6">
            <div className="bg-cream-soft rounded-3xl p-6 md:p-8 border-2 border-bara/10 relative">
              <span className="absolute -top-4 left-6 tan-pill text-xs">
                YANG KAMI PUNYA
              </span>
              <ul className="space-y-3.5 mt-3">
                {[
                  {
                    t: "Signature Kopi Susu Bara",
                    s: "Racikan kopi + susu + gula aren khas Bara",
                  },
                  {
                    t: "Free Wifi & Mushola",
                    s: "Nyaman buat ngerjain tugas atau meeting",
                  },
                  {
                    t: "Smoking & non-smoking",
                    s: "Plus area outdoor yang sejuk",
                  },
                  {
                    t: "Setiap hari 08.00–22.00",
                    s: "Sebelah kampus IPB Sukabumi · Jl. Sarasa",
                  },
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="num-badge mt-0.5">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-bara text-base leading-snug">
                        {it.t}
                      </p>
                      <p className="text-ink/70 text-sm leading-snug">{it.s}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="reveal mt-14 md:mt-20">
          <div className="flex items-center justify-between mb-4">
            <span className="font-hand text-bara text-2xl md:text-3xl">
              a peek inside —
            </span>
            <a
              href="https://instagram.com/__baracoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bara/70 hover:text-bara font-semibold text-sm inline-flex items-center gap-1.5"
            >
              @__baracoffee <ArrowIcon width={13} height={13} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {["Toko (luar)", "Barista", "Interior", "Signature drink"].map(
              (cap) => (
                <div key={cap} className="photo-slot aspect-[4/5]">
                  <span className="photo-slot-label">{cap}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
