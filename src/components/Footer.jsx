import logoImg from '../assets/gold-logo.png'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '#branches', label: 'Branch Locator' },
  { href: '#how-it-works', label: 'How it works' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-amber-200 bg-amber-50/50 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src={logoImg}
              alt="Gold By Monk"
              className="h-16 w-auto max-w-[min(100%,320px)] object-contain object-left sm:h-20 md:h-24"
              decoding="async"
            />
            <p className="mt-4 max-w-sm text-slate-600">
              Fair, transparent gold buying with scientific testing and instant settlement options. Your
              questions welcome — reach us on phone or email.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-700 hover:text-amber-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800">Reach us</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Phone:</span>{' '}
                <a href="tel:+916307217894" className="hover:text-amber-700">
                  +91 6307217894
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900">Email:</span>{' '}
                <a href="mailto:hello@goldmonk.example" className="hover:text-amber-700">
                  hello@goldmonk.example
                </a>
              </li>
              <li className="text-sm leading-relaxed text-slate-600">
                <span className="font-medium text-slate-900">Registered office:</span>
                <br />
                Gold By Monk Pvt. Ltd. (demo address)
                <br />
                12 Sample Road, Business District — 560001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-amber-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Gold By Monk. All rights reserved. Demo marketing site — rates and terms
          at branch prevail.
        </div>
      </div>
    </footer>
  )
}
