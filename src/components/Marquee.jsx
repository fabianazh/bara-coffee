import { SparkleIcon } from './Icons'

const ITEMS = [
  'KOPI SUSU BARA',
  'TAKE IT, DRINK IT',
  'SPANISH LATTE',
  'BUTTERSCOTCH',
  'NASI GORENG BARA',
  'JL. SARASA SUKABUMI',
  'OPEN DAILY 08–22',
]

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="bg-bara text-cream-light py-5 md:py-6 overflow-hidden border-y-4 border-bara-deep">
      <div className="marquee-track">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="wordmark text-3xl md:text-5xl px-7 md:px-10 whitespace-nowrap inline-flex items-center gap-7 md:gap-10"
          >
            {t}
            <SparkleIcon width={18} height={18} className="opacity-80" />
          </span>
        ))}
      </div>
    </div>
  )
}
