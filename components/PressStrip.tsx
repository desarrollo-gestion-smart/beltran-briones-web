'use client'

import Reveal from './Reveal'

const outlets = [
  {
    name: 'Infobae',
    href: 'https://www.infobae.com/reportajes/2026/03/15/beltran-briones-lo-mas-importante-que-te-da-el-colegio-son-los-contactos-quien-fue-tu-companerito/',
    svg: (
      <svg viewBox="0 0 120 28" fill="currentColor" className="h-5 w-auto">
        <text x="0" y="22" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" letterSpacing="-0.5">infobae</text>
      </svg>
    ),
  },
  {
    name: 'El Economista',
    href: 'https://eleconomista.com.ar/negocios/el-fenomeno-beltran-briones-lado-oculto-su-exito-formula-esta-rompiendo-todos-esquemas-2026-n93083',
    svg: (
      <svg viewBox="0 0 160 28" fill="currentColor" className="h-4 w-auto">
        <text x="0" y="21" fontFamily="Georgia, serif" fontSize="18" fontWeight="400" letterSpacing="0.3">El Economista</text>
      </svg>
    ),
  },
  {
    name: 'A24',
    href: 'https://www.a24.com/trends/quien-es-el-influencer-beltran-briones-y-como-es-su-grupo-inmobiliario-grupo-briones-n1504048',
    svg: (
      <svg viewBox="0 0 56 28" fill="currentColor" className="h-5 w-auto">
        <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" letterSpacing="1">A24</text>
      </svg>
    ),
  },
  {
    name: 'El Destape',
    href: 'https://www.eldestapeweb.com/atr/redes-sociales/de-las-redes-a-la-obra-quien-es-el-influencer-que-lanzo-su-desarrolladora-2025126121154',
    svg: (
      <svg viewBox="0 0 120 28" fill="currentColor" className="h-4 w-auto">
        <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.2">El Destape</text>
      </svg>
    ),
  },
  {
    name: 'InfoVeloz',
    href: 'https://www.infoveloz.com/post/beltran-briones-del-exito-en-las-redes-a-su-propia-desarrolladora_275123',
    svg: (
      <svg viewBox="0 0 110 28" fill="currentColor" className="h-4 w-auto">
        <text x="0" y="21" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.2">InfoVeloz</text>
      </svg>
    ),
  },
]

const doubled = [...outlets, ...outlets]

export default function PressStrip() {
  return (
    <section className="bg-white border-b border-slate-100 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <Reveal>
          <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-8">
            Presente en los medios
          </p>
        </Reveal>

        {/* Desktop: fila estática centrada */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-x-12 gap-y-6">
          {outlets.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Ver nota en ${name}`}
              className="text-slate-300 hover:text-slate-600 transition-colors duration-200"
            >
              {svg}
            </a>
          ))}
        </div>

        {/* Mobile: marquee infinito */}
        <div className="md:hidden relative">
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {doubled.map(({ name, href, svg }, i) => (
              <a
                key={`${name}-${i}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center shrink-0 text-slate-300 hover:text-slate-500 transition-colors duration-200"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
