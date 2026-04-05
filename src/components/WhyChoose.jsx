const features = [
  {
    title: 'Transparency first',
    body: 'Every test and weight reading is explained. You approve before we proceed to payout.',
  },
  {
    title: 'Science, not guesswork',
    body: 'Modern assaying methods help pin down purity so your quote matches what you actually have.',
  },
  {
    title: 'Fair market linkage',
    body: 'Our buy rates are communicated clearly and tied to widely understood market references.',
  },
  {
    title: 'Respect for your gold',
    body: 'Careful handling, cleaning, and melting practices reduce avoidable loss and doubt.',
  },
  {
    title: 'Flexible payout',
    body: 'Where rules allow, instant cash for smaller sums; bank transfer for larger amounts with proper KYC.',
  },
  {
    title: 'Growing footprint',
    body: 'Branches and scheduled mobile visits in select cities — check coverage before you visit.',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why choose Gold By Monk?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Selling gold should feel straightforward — here is what you can expect when you walk in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-amber-50/40 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
