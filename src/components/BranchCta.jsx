import { branchCities } from '../data/branches'

export default function BranchCta() {
  return (
    <section id="branches" className="bg-slate-900 py-16 text-white sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Visit any of our branches</h2>
            <p className="mt-4 text-slate-300">
              Walk in for on-the-spot testing at any listed city. For the latest addresses and hours, use
              locate us or speak to our helpline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-hover-amber inline-flex justify-center rounded-full bg-amber-500 px-8 py-3.5 text-center text-base font-semibold text-slate-900 hover:bg-amber-400"
              >
                Locate us
              </a>
              <a
                href="tel:+916307217894"
                className="btn-hover-outline-on-dark inline-flex justify-center rounded-full border-2 border-amber-400/60 px-8 py-3.5 text-center text-base font-semibold text-amber-100 hover:bg-white/5"
              >
                Call +91 6307217894
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-amber-400/90">
              Cities we serve
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {branchCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-amber-500/30 bg-slate-800/80 px-3 py-1.5 text-sm text-amber-50"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
