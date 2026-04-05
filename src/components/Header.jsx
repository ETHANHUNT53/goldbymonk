import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import logoImg from '../assets/logo.png'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  const mobileMenu = open
    ? createPortal(
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[10000] md:hidden"
        role="presentation"
      >
        <button
          type="button"
          className="animate-backdrop-fade-in absolute inset-0 cursor-default border-0 bg-slate-950/50 p-0"
          aria-label="Close menu"
          onClick={close}
        />
        <div
          className="animate-drawer-enter absolute right-0 top-0 flex h-full w-[min(100vw,20rem)] flex-col border-l border-amber-100 bg-white shadow-2xl sm:w-80"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-amber-100 bg-white px-4 py-4">
            <span className="text-lg font-bold text-slate-900">Menu</span>
            <button
              type="button"
              className="btn-hover-icon rounded-lg p-2 text-slate-600 hover:bg-amber-50"
              onClick={close}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav
            className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto bg-white p-4"
            aria-label="Mobile primary"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="btn-hover-row rounded-lg px-3 py-3.5 text-base font-medium text-slate-800 hover:bg-amber-50"
                onClick={close}
              >
                {label}
              </a>
            ))}
            <div className="my-3 border-t border-amber-100" aria-hidden />
            <a
              href="tel:+916307217894"
              className="btn-hover-row rounded-lg px-3 py-3.5 text-base font-medium text-amber-800 hover:bg-amber-50"
              onClick={close}
            >
              Phone: +91 6307217894
            </a>
            <a
              href="#contact"
              className="btn-hover-amber mt-2 rounded-full bg-amber-500 px-4 py-3.5 text-center text-sm font-semibold text-white hover:bg-amber-600"
              onClick={close}
            >
              Enquire now
            </a>
          </nav>
        </div>
      </div>,
      document.body,
    )
    : null

  return (
    <>
    <header className="sticky top-0 z-[100] overflow-visible border-b border-amber-200/60 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="border-b border-amber-100/80 bg-gradient-to-r from-amber-50 to-amber-100/50">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-2 text-sm text-slate-700 sm:px-6">
          <a
            href="tel:+916307217894"
            className="font-medium text-amber-800 hover:text-amber-900"
          >
            Phone: +91 6307217894
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex h-16 max-h-16 max-w-6xl items-center justify-between gap-4 overflow-visible px-4 sm:px-6">
        <a
          href="#home"
          className="relative z-10 flex h-16 items-center overflow-visible"
          onClick={close}
        >
          <img
            src={logoImg}
            alt="Gold By Monk"
            className="h-11 w-auto max-w-[200px] origin-left scale-[1.2] object-contain object-left sm:h-12 sm:max-w-[240px] sm:scale-[1.28] md:max-w-[300px] md:scale-[1.35]"
            decoding="async"
          />
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="nav-link-hover border-b-2 border-transparent pb-0.5 hover:border-amber-500 hover:text-amber-900"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-hover-amber hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-amber-600 sm:inline-block"
          >
            Enquire now
          </a>
          <button
            type="button"
            className="btn-hover-icon inline-flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-slate-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
    {mobileMenu}
    </>
  )
}
