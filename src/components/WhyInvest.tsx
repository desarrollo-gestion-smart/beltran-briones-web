"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trayectoria comprobada",
    description:
      "12 edificios y 898 departamentos entregados en tiempo y forma. Resultados que hablan por sí solos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Alta rentabilidad",
    description:
      "Proyectos en zonas premium de Buenos Aires con valorización sostenida y alta demanda de alquiler.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Transparencia total",
    description:
      "Acceso a reportes de avance, estados contables y toda la información de tu inversión en tiempo real.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Equipo profesional",
    description:
      "Un equipo de expertos en arquitectura, construcción, finanzas y marketing que trabaja para maximizar tu inversión.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Ubicaciones premium",
    description:
      "Seleccionamos los mejores lotes en barrios con mayor demanda y proyección de valorización a largo plazo.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte continuo",
    description:
      "Acompañamiento personalizado durante todo el proceso de inversión, desde la consulta hasta la escritura.",
  },
];

export default function WhyInvest() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="por-que"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#f8f8f8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block text-[#1959ff] text-sm font-semibold uppercase tracking-widest mb-3">
            Por qué elegirnos
          </span>
          <h2 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-[#20316d] mb-4">
            Invertí con{" "}
            <span className="text-[#1959ff]">confianza</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Más de una década construyendo proyectos que generan valor real para
            inversores que buscan resultados concretos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-[#20316d]/5 text-[#20316d] group-hover:bg-[#20316d] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-4">
                {reason.icon}
              </div>
              <h3 className="font-['Montserrat'] font-bold text-[#20316d] text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social proof banner */}
        <div className="fade-in grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#20316d] rounded-2xl p-6 sm:p-8 text-center text-white">
          {[
            { value: "12", label: "Edificios entregados" },
            { value: "898+", label: "Familias con su depa" },
            { value: "100%", label: "Proyectos completados" },
            { value: "10+", label: "Años de experiencia" },
          ].map((item, i) => (
            <div key={i} className="py-2">
              <div className="font-['Montserrat'] text-3xl sm:text-4xl font-black text-white mb-1">
                {item.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
