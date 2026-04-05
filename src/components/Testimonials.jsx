const stories = [
  {
    quote:
      'I compared three buyers before choosing Gold By Monk. The team walked me through every reading on the machine — I left with a bank transfer and a clear invoice.',
    name: 'Priya N.',
    place: 'Bengaluru',
  },
  {
    quote:
      'I needed funds for a family medical bill. The branch staff were patient, answered all my questions, and never rushed me to sign anything I did not understand.',
    name: 'Rahul M.',
    place: 'Mumbai',
  },
  {
    quote:
      'Ultrasonic cleaning before weigh-in was new to me. Seeing the weight after cleaning made sense — I finally felt the number matched what I had at home.',
    name: 'Anita K.',
    place: 'Delhi',
  },
  {
    quote:
      'Professional from start to finish. Rates were explained against that day’s benchmark, and I got SMS confirmation for the transfer within minutes.',
    name: 'Vikram S.',
    place: 'Hyderabad',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-amber-50/80 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What customers say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from people who wanted clarity as much as cash.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {stories.map((s) => (
            <blockquote
              key={s.name}
              className="flex flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-md shadow-amber-900/5"
            >
              <p className="flex-1 text-slate-700">&ldquo;{s.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-amber-100 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-slate-900">{s.name}</span>
                  <span className="text-slate-500"> · {s.place}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
