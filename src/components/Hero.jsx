import { useIndicativeGoldRate } from '../hooks/useIndicativeGoldRate'
import { formatInrPerGram } from '../utils/goldRate'

export default function Hero() {
  const { status, inrPerGram24k, inrPerGram22k, errorMessage, updatedAt, retry } =
    useIndicativeGoldRate()

  const timeLabel =
    updatedAt != null
      ? updatedAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      : null

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:gap-16">
        <div className="text-left">
          <p className="animate-bounce-slow mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            Trusted gold buyers
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sell your old gold.
            <span className="block text-amber-600">Get cash instantly.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 sm:text-xl">
            100% fair and precise buying — free purity checks, a fully transparent process, and
            ultrasonic cleaning so you see exactly what you are paid for.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            {[
              'Free purity testing on modern equipment',
              'Transparent valuation in front of you',
              'Competitive rates aligned with the market',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-hover-amber inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600"
            >
              Get in touch
            </a>
            <a
              href="#how-it-works"
              className="btn-hover-outline inline-flex items-center justify-center rounded-full border-2 border-amber-600 px-8 py-3.5 text-center text-base font-semibold text-amber-800 hover:bg-amber-50"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
          <div className="min-h-[26rem] w-full rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-100 via-white to-amber-50 p-6 shadow-xl shadow-amber-900/5 sm:min-h-[30rem] sm:p-8 md:min-h-[32rem] md:p-10">
            <div className="flex flex-col gap-6 rounded-2xl bg-slate-900 p-6 text-white sm:gap-8 sm:p-8 md:p-10">
              <div className="min-w-0">
                <p className="text-sm font-medium text-amber-300/90">Today&apos;s indicative rate</p>

                {status === 'loading' && (
                  <div className="mt-3 space-y-2" aria-busy="true" aria-live="polite">
                    <div className="h-9 w-48 animate-pulse rounded-lg bg-white/10 sm:h-10 sm:w-56" />
                    <div className="h-5 w-40 animate-pulse rounded bg-white/10" />
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-3">
                    <p className="text-lg font-semibold text-amber-200">Couldn&apos;t load live rate</p>
                    <p className="mt-1 text-sm text-slate-400">{errorMessage}</p>
                    <button
                      type="button"
                      onClick={() => retry()}
                      className="btn-hover-amber mt-3 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {status === 'ready' && inrPerGram24k != null && inrPerGram22k != null && (
                  <div className="mt-2">
                    <p className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                      24K — {formatInrPerGram(inrPerGram24k)}
                      <span className="text-lg font-semibold text-amber-100/90 sm:text-xl"> / g</span>
                    </p>
                    <p className="mt-2 text-lg font-semibold text-amber-100/95 sm:text-xl">
                      22K — {formatInrPerGram(inrPerGram22k)}
                      <span className="text-base font-medium text-amber-200/80"> / g</span>
                    </p>
                    {timeLabel && (
                      <p className="mt-2 text-xs text-slate-500">Updated {timeLabel} · live market reference</p>
                    )}
                  </div>
                )}

                <p className="mt-3 text-sm text-slate-400">
                  Indicative spot from public market data (PAX Gold ≈ 1 oz fine gold). Your branch
                  quote may differ by purity, charges, and day&apos;s policy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm sm:gap-4">
                <div className="min-w-0 rounded-xl bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-amber-200/80">XRF check</p>
                  <p className="mt-1 font-semibold leading-snug">On the spot</p>
                </div>
                <div className="min-w-0 rounded-xl bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-amber-200/80">Payment</p>
                  <p className="mt-1 break-words font-semibold leading-snug">Cash / bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
