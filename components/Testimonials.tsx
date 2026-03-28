'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'Invertí en Brigos Palermo sin conocer el mercado inmobiliario. El equipo de Beltrán me explicó cada paso. Hoy tengo una unidad escriturada con una rentabilidad que ningún banco me hubiera dado.',
    name: 'Martín R.',
    role: 'Empresario · Inversor desde 2021',
    initials: 'MR',
  },
  {
    quote:
      'Lo que más me convenció fue la transparencia. Recibía actualizaciones de obra cada mes, con fotos y avances reales. Nunca sentí que mi dinero estaba en el aire.',
    name: 'Valeria C.',
    role: 'Médica · Inversora desde 2022',
    initials: 'VC',
  },
  {
    quote:
      'Ya van tres proyectos con Grupo Briones. Cada vez que entregan, el valor del metro cuadrado superó las proyecciones iniciales. Es el mejor vehículo de ahorro que encontré en Argentina.',
    name: 'Diego M.',
    role: 'Contador · Inversor desde 2019',
    initials: 'DM',
  },
  {
    quote:
      'Arrancamos con una unidad chica para probar. Hoy tenemos dos departamentos en pozo y estamos mirando el siguiente proyecto. La confianza se construye entrega a entrega.',
    name: 'Lucía & Pablo F.',
    role: 'Inversores desde 2020',
    initials: 'LF',
  },
  {
    quote:
      'Beltrán tiene algo que pocos tienen: conoce el negocio de verdad y lo explica sin humo. Me ayudó a entender por qué el real estate en CABA sigue siendo el mejor activo en pesos.',
    name: 'Sebastián T.',
    role: 'Emprendedor · Inversor desde 2023',
    initials: 'ST',
  },
  {
    quote:
      'El proceso de escrituración fue impecable. Tenía miedo de los trámites pero el equipo acompañó todo. Recomendé a tres amigos y los tres ya tienen su unidad.',
    name: 'Carolina B.',
    role: 'Docente universitaria · Inversora desde 2021',
    initials: 'CB',
  },
]

export default function Testimonials() {
  const sectionRef  = useRef<HTMLElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)

  /* Entrada escalonada de cards en desktop */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          '.testi-card',
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        )
      })

      mm.add('(max-width: 767px)', () => {
        const cards = sectionRef.current!.querySelectorAll('.testi-card')
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
              },
            }
          )
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-700 mb-4">
              Lo que dicen los inversores
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-slate-900">
              Más de{' '}
              <strong className="font-black">500 inversores</strong>{' '}
              ya confiaron
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-base text-slate-400 font-light max-w-[48ch] mx-auto leading-relaxed">
              Personas reales que eligieron invertir con Grupo Briones y vieron crecer su patrimonio.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map(({ quote, name, role, initials }, i) => (
            <div
              key={i}
              className="testi-card flex flex-col justify-between bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{ opacity: 0 }}
            >
              {/* Quote mark */}
              <div>
                <span className="block text-5xl leading-none font-black text-brand-100 mb-3 select-none">"</span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-black text-white tracking-wide">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">{name}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{role}</p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 12 12" width="12" height="12" fill="currentColor" className="text-amber-400">
                      <path d="M6 0l1.545 3.13L11 3.635l-2.5 2.435.59 3.44L6 7.88 2.91 9.51l.59-3.44L1 3.635l3.455-.505z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Testimonios reales de inversores de Grupo Briones · Más de 24 edificios entregados en CABA
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
