'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio',             href: '#' },
  { label: 'Cómo desarrollamos', href: '#proceso' },
  { label: 'Sobre Beltrán',      href: '#sobre-beltran' },
  { label: 'Mi libro',           href: '#libro' },
  { label: 'Contacto',           href: '#contacto' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="nav-pill flex items-center justify-between px-6 py-3.5 bg-brand-700/95 border border-white/10 rounded-2xl shadow-[0_4px_24px_rgba(30,58,122,0.3)]">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-lg leading-none text-white tracking-tight"
            >
              Beltrán <span className="font-black">Briones</span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleLink(e, l.href)}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-xl transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contacto"
              onClick={(e) => handleLink(e, '#contacto')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-brand-700 text-sm font-bold rounded-xl hover:bg-brand-50 active:scale-[0.97] transition-all duration-200"
            >
              Invertir
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl border border-slate-200 shadow-xl p-4 transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLink(e, l.href)}
              className="flex items-center px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          <a
            href="#libro"
            onClick={(e) => handleLink(e, '#libro')}
            className="flex items-center justify-center w-full px-4 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
          >
            Comprar el libro
          </a>
        </div>
      </div>
    </>
  )
}
