'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Book3D() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const float = gsap.to(cardRef.current, {
      y: -16,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
    return () => { float.kill() }
  }, [])

  const handleEnter = () => {
    gsap.to(cardRef.current, { rotateY: -8, rotateX: 4, duration: 0.5, ease: 'power2.out', overwrite: 'auto' })
  }

  const handleLeave = () => {
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1,0.4)', overwrite: 'auto' })
  }

  return (
    <div style={{ perspective: '1200px' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div ref={cardRef} style={{ width: 260, height: 360, position: 'relative' }}>
        <Image
          src="/assets/metodobriones.png"
          alt="El Método Briones — Beltrán Briones"
          fill
          className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          sizes="260px"
          priority
        />
      </div>
    </div>
  )
}
