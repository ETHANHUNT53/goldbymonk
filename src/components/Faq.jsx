import { useState } from 'react'

const items = [
  {
    q: 'Why should I choose Gold By Monk to sell my gold?',
    a: 'We focus on transparent testing, clear communication of rates, and documented payouts. You see key steps as they happen and can ask questions at any point.',
  },
  {
    q: 'How is valuation done and how long does it take?',
    a: 'After cleaning, we measure weight and check purity using calibrated equipment. Timing depends on queue and item complexity; many visits finish within a single session.',
  },
  {
    q: 'Will my ornaments be damaged during testing?',
    a: 'Non-destructive checks are used where appropriate. If melting is required for a particular item, staff explain implications before you approve.',
  },
  {
    q: 'What documents do I need?',
    a: 'Valid government photo ID (such as Aadhaar, passport, driving licence, or voter ID) is typically required. Carry a purchase invoice if you have one — helpful though not always mandatory.',
  },
  {
    q: 'Can I sell without a bill?',
    a: 'Yes in many cases, with verified ID and address proof as per applicable rules. Branch staff will confirm what is needed for your situation.',
  },
  {
    q: 'Do you offer doorstep or mobile service?',
    a: 'Select cities offer scheduled mobile visits. Availability, slots, and eligibility vary — use the branch locator or call us to check your pin code.',
  },
  {
    q: 'I am between 18 and 21. Can I sell jewellery?',
    a: 'Minors may need documented consent from a parent or guardian plus valid ID as per local compliance. Please call ahead so we can guide you.',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState(0)

  return (
    <section className="border-t border-amber-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Quick answers about documents, process, and service options.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = openId === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-amber-100 bg-amber-50/30 transition"
              >
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="btn-hover-row flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-slate-900 hover:bg-amber-50/80 sm:px-5"
                  onClick={() => setOpenId(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span
                    className={`shrink-0 text-amber-600 transition ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="border-t border-amber-100 px-4 pb-4 text-slate-600 sm:px-5"
                  >
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
