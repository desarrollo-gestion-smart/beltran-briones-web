"use client";

import { useEffect, useRef } from "react";

const mediaLogos = [
  { name: "Infobae", letter: "I" },
  { name: "La Nación", letter: "LN" },
  { name: "Clarín", letter: "C" },
  { name: "Mercado Libre", letter: "ML" },
  { name: "El Cronista", letter: "EC" },
  { name: "iProfesional", letter: "iP" },
];

const awards = [
  {
    title: "Podcast más escuchado",
    subtitle: "El Club del Ladrillo",
    desc: "Real Estate Argentina",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Best Seller",
    subtitle: "El Método Briones",
    desc: "Mayor lanzamiento en Mercado Libre",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Speaker reconocido",
    subtitle: "Expo Real Estate",
    desc: "Bootcamps y universidades",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="prensa"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#20316d]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block text-[#7bb3ff] text-sm font-semibold uppercase tracking-widest mb-3">
            Reconocimientos
          </span>
          <h2 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-white mb-4">
            Premios y{" "}
            <span className="text-[#7bb3ff]">prensa</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Una trayectoria reconocida por los medios más importantes del país
            y avalada por resultados concretos.
          </p>
        </div>

        {/* Awards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {awards.map((award, i) => (
            <div
              key={i}
              className="fade-in bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#1959ff]/20 text-[#7bb3ff] flex items-center justify-center group-hover:bg-[#1959ff] group-hover:text-white transition-colors duration-300">
                {award.icon}
              </div>
              <h3 className="font-['Montserrat'] font-bold text-white text-lg mb-1">
                {award.title}
              </h3>
              <p className="text-[#7bb3ff] font-semibold text-sm mb-1">
                {award.subtitle}
              </p>
              <p className="text-white/50 text-sm">{award.desc}</p>
            </div>
          ))}
        </div>

        {/* Media logos */}
        <div className="fade-in">
          <p className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-8">
            Mencionado en los principales medios
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {mediaLogos.map((media, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 font-semibold text-sm"
              >
                {media.name}
              </div>
            ))}
          </div>
        </div>

        {/* Book CTA */}
        <div className="fade-in mt-16 bg-gradient-to-r from-[#1959ff] to-[#2874fc] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">Mi libro</p>
            <h3 className="font-['Montserrat'] font-black text-white text-2xl sm:text-3xl leading-tight mb-2">
              El Método Briones
            </h3>
            <p className="text-white/80 leading-relaxed">
              Cómo promocionar y vender cualquier cosa. Best seller y el mayor
              lanzamiento en la historia de Mercado Libre.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://beltranbriones.com/mi-libro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1959ff] font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl"
            >
              Conseguí el libro
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
