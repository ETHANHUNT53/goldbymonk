const steps = [
  {
    title: 'Visit Gold By Monk',
    body: 'Bring your jewellery or coins to a Gold By Monk centre. Our team explains each step before anything is tested.',
  },
  {
    title: 'Ultrasonic cleaning',
    body: 'Dust and residue are removed with an ultrasonic bath — in your view — so weight reflects actual gold, not grime.',
  },
  {
    title: 'Scientific valuation',
    body: 'Purity and composition are checked on calibrated equipment. You see readings and understand how value is derived.',
  },
  {
    title: 'Market-linked rate',
    body: 'We price transparently using prevailing market benchmarks for the purity we have measured — no hidden deductions.',
  },
  {
    title: 'Instant payment',
    body: 'Smaller amounts can be paid in cash where regulations allow; larger sums are transferred instantly to your bank with documentation.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple, visible process from walk-in to payout — built around clarity and respect for your time.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              style={{ animationDelay: `${i * 0.45}s` }}
              className="animate-bounce-slow relative rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/80 to-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <span className="text-4xl font-bold text-amber-200/90">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
