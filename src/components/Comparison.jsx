import logoImg from '../assets/logo.png'

const ours = [
  'Entire process happens in front of you',
  'Multi-step scientific checks for weight and purity',
  'Ultrasonic cleaning before weighing for accuracy',
  'Weight read to fine precision (e.g. three decimals per gram where applicable)',
  'Rates aligned with transparent market references',
  'Quality melting practice and documented payout',
  'Invoice / receipt provided for your records',
]

const traditional = [
  'Opaque back-room practices',
  'Rough estimates or touchstone-only checks',
  'No cleaning — melting charges or “wastage” may be unclear',
  'Rounding down aggressively on the scale',
  'Quotes that drift from published market levels',
  'Risk of residue loss in low-quality crucibles',
  'Cash-only handoffs without paperwork',
]

export default function Comparison() {
  return (
    <section id="about" className="border-y border-amber-100 bg-slate-50 py-16 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center sm:pb-16">
          <h2 className="flex justify-center">
            <img
              src={logoImg}
              alt="Gold By Monk"
              className="h-32 w-auto max-w-[min(100%,400px)] object-contain object-center sm:h-36 sm:max-w-[min(100%,480px)] md:h-44 md:max-w-[min(100%,540px)] lg:h-52 lg:max-w-[min(100%,600px)]"
              decoding="async"
            />
          </h2>
          <p className="mt-6 inline-block cursor-default text-lg text-black transition-colors duration-300 ease-out hover:text-amber-600 sm:text-xl md:text-2xl">
            Where your gold shines as cash.
          </p>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Gold By Monk vs traditional buyers
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            We built our process for people who want answers, not assumptions — see the difference side by side.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-amber-400/60 bg-white p-6 shadow-lg shadow-amber-900/5 sm:p-8">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-4">
              <span className="text-2xl font-bold text-amber-600">Gold By Monk</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                Organised
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-700">
              {ours.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 shrink-0 text-amber-500" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-2xl font-semibold text-slate-500">
                Typical unorganised buyers
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-600">
              {traditional.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 shrink-0 text-slate-400" aria-hidden>
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
