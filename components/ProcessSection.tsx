'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01',
    title: 'Identificación\ndel terreno',
    desc: 'Buscamos ubicaciones estratégicas en barrios premium de CABA evaluando plusvalía, conectividad y demanda futura.',
  },
  {
    n: '02',
    title: 'Diseño\narquitectónico',
    desc: 'Trabajamos con estudios de primer nivel para diseñar proyectos que combinan estética, funcionalidad y rentabilidad.',
  },
  {
    n: '03',
    title: 'Construcción\ndel edificio',
    desc: 'Supervisamos cada etapa con estándares rigurosos. El inversor recibe actualizaciones de avance en tiempo real.',
  },
  {
    n: '04',
    title: 'Venta de\nunidades',
    desc: 'Comercializamos en pozo con estrategias probadas, generando liquidez desde las etapas tempranas del proyecto.',
  },
  {
    n: '05',
    title: 'Entrega\nllave en mano',
    desc: 'Entregamos cada unidad terminada, lista para habitar o rentar. Acompañamos escrituración y cierre.',
  },
]

export default function ProcessSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      /* ── Desktop ──────────────────────────────────────────── */
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              end:   'top 20%',
              scrub: 0.6,
            },
          }
        )

        gsap.fromTo(
          '.process-node',
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.12,
            duration: 0.5,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        )

        gsap.fromTo(
          '.process-text',
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 55%',
            },
          }
        )
      })

      /* ── Mobile: cada item se anima cuando entra al viewport ─ */
      mm.add('(max-width: 767px)', () => {
        const nodes = sectionRef.current!.querySelectorAll('.process-node')
        const texts = sectionRef.current!.querySelectorAll('.process-text')

        nodes.forEach((node) => {
          gsap.fromTo(
            node,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.45,
              ease: 'back.out(1.8)',
              scrollTrigger: {
                trigger: node,
                start: 'top 90%',
              },
            }
          )
        })

        texts.forEach((text) => {
          gsap.fromTo(
            text,
            { opacity: 0, x: 16 },
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: text,
                start: 'top 92%',
              },
            }
          )
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="proceso" className="py-24 lg:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-700 mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-slate-900">
            De terreno a{' '}
            <strong className="font-black">llave en mano</strong>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-light max-w-[48ch] mx-auto leading-relaxed">
            Controlamos todo el ciclo del desarrollo inmobiliario, desde la búsqueda
            del lote hasta la entrega final de cada unidad.
          </p>
        </div>

        {/* Timeline — desktop horizontal / mobile vertical */}
        <div className="relative">

          {/* Animated connector line — desktop only */}
          <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-px bg-slate-100">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-brand-700 origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          {/* Mobile: vertical left border */}
          <div className="md:hidden absolute top-0 bottom-0 left-5 w-px bg-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 pl-14 md:pl-0 md:text-center">

                {/* Node */}
                <div className="process-node shrink-0 relative z-10 md:mb-6">
                  <div className="w-11 h-11 rounded-full bg-brand-700 flex items-center justify-center shadow-md shadow-brand-200">
                    <span className="text-[11px] font-black text-white tracking-wider">{n}</span>
                  </div>
                  {/* Mobile connector dot */}
                  <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-slate-200 last:hidden" />
                </div>

                {/* Text */}
                <div className="process-text md:px-2">
                  <p className="text-[11px] font-black text-brand-700 uppercase tracking-wider leading-snug whitespace-pre-line mb-2">
                    {title}
                  </p>
                  <p className="text-[13px] text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
