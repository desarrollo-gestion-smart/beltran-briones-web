'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

/* ── Stats ──────────────────────────────────────────────── */
const STATS = [
  { target: 24,   suffix: '',    label: 'Edificios entregados' },
  { target: 1791, suffix: '',    label: 'Departamentos entregados', format: true },
  { target: 1,    suffix: 'M+',  label: 'Seguidores en redes' },
  { target: null, text: 'UY·US', label: 'Expansión regional' },
]

export default function HeroVideo() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)
  const beltranRef  = useRef<HTMLSpanElement>(null)
  const brionesRef  = useRef<HTMLSpanElement>(null)
  const taglineRef  = useRef<HTMLParagraphElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)
  const hintRef     = useRef<HTMLParagraphElement>(null)

  /* ── Cinematic entrance timeline ─────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Initial states */
      gsap.set(overlayRef.current,  { opacity: 1 })
      gsap.set(lineRef.current,     { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(beltranRef.current,  { clipPath: 'inset(0 100% 0 0)' })
      gsap.set(brionesRef.current,  { clipPath: 'inset(0 0 0 100%)' })
      gsap.set(taglineRef.current,  { opacity: 0, y: 18 })
      gsap.set('.stat-cell',        { opacity: 0, y: 24 })
      gsap.set(ctasRef.current,     { opacity: 0, y: 16 })
      gsap.set(hintRef.current,     { opacity: 0 })

      const tl = gsap.timeline({ delay: 0.3 })

      tl
        /* 1 — overlay fades revealing the video */
        .to(overlayRef.current, {
          opacity: 0.78,
          duration: 1.1,
          ease: 'power2.inOut',
        })

        /* 2 — thin architectural line draws left to right */
        .to(lineRef.current, {
          scaleX: 1,
          duration: 0.55,
          ease: 'power3.inOut',
        }, '-=0.5')

        /* 3 — "Beltrán" clips in from the left */
        .to(beltranRef.current, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.65,
          ease: 'power3.out',
        }, '-=0.1')

        /* 4 — "Briones" clips in from the right (meets Beltrán) */
        .to(brionesRef.current, {
          clipPath: 'inset(0 0 0 0%)',
          duration: 0.65,
          ease: 'power3.out',
        }, '<0.08')

        /* 5 — tagline fades up */
        .to(taglineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
        }, '-=0.2')

        /* 6 — stat cells stagger up */
        .to('.stat-cell', {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.15')

        /* 7 — CTAs */
        .to(ctasRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
        }, '-=0.25')

        /* 8 — scroll hint */
        .to(hintRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power1.out',
        }, '-=0.1')

      /* Count-up for numeric stats, triggered alongside step 6 */
      STATS.forEach((s, i) => {
        if (s.target === null) return
        const el = document.querySelector<HTMLElement>(`[data-stat="${i}"]`)
        if (!el) return
        const obj = { val: 0 }
        tl.to(obj, {
          val: s.target,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate() {
            const v = Math.round(obj.val)
            el.textContent = s.format
              ? v.toLocaleString('es-AR')
              : `${v}${s.suffix}`
          },
        }, '<') // runs in parallel with stat cells
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ── Scroll parallax on video ─────────────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onScroll = () => {
      video.style.transform = `translateY(${window.scrollY * 0.25}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-brand-900">

      {/* ── Video — autoplay loop, parallax via inline style ── */}
      <video
        ref={videoRef}
        src="/desarrollo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{ willChange: 'transform' }}
      />

      {/* ── Dark overlay — GSAP fades this from 100% → 78% ── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-brand-900"
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 pt-20">

        {/* Eyebrow line */}
        <div
          ref={lineRef}
          className="w-16 h-px bg-brand-300 mb-8"
        />

        {/* Name — two halves animate independently */}
        <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-white mb-6 flex flex-wrap justify-center gap-x-[0.22em]">
          <span ref={beltranRef} className="inline-block font-light">
            Beltrán
          </span>
          <span ref={brionesRef} className="inline-block font-black">
            Briones
          </span>
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-base sm:text-lg text-white/65 max-w-[560px] mb-12 font-light leading-relaxed"
        >
          Cofundador del{' '}
          <strong className="text-white font-semibold">Grupo Briones</strong>,
          una de las desarrolladoras inmobiliarias más importantes de
          la Ciudad de Buenos Aires.
        </p>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-2xl w-full mb-10"
        >
          {STATS.map((s, i) => (
            <div key={i} className="stat-cell bg-white/5 backdrop-blur-sm px-6 py-6">
              <p
                data-stat={i}
                className="text-2xl sm:text-3xl font-black text-white leading-none mb-1"
              >
                {s.text ?? `0${s.suffix}`}
              </p>
              <p className="text-[10px] text-white/45 uppercase tracking-wider font-medium leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-brand-700 font-bold text-sm rounded-xl hover:bg-brand-50 active:scale-[0.97] transition-all duration-200 shadow-lg"
          >
            Ver proyectos
            <ArrowRight size={16} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
          >
            Quiero invertir
          </a>
        </div>

        {/* Scroll hint */}
        <p
          ref={hintRef}
          className="absolute bottom-8 text-[10px] text-white/30 uppercase tracking-[0.25em] font-medium"
        >
          Scrolleá para descubrir ↓
        </p>

      </div>
    </section>
  )
}
