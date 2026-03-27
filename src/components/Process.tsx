"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Compra de terrenos",
    description:
      "Identificamos y adquirimos los mejores lotes en ubicaciones estratégicas de Buenos Aires con alto potencial de valorización.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño arquitectónico",
    description:
      "Desarrollamos proyectos arquitectónicos innovadores que combinan funcionalidad, estética y eficiencia habitacional.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Supervisamos cada etapa con los más altos estándares de calidad, materiales premium y plazos de entrega cumplidos.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Venta y comercialización",
    description:
      "Gestionamos la comercialización de cada unidad con estrategias de marketing probadas y atención personalizada.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Entrega al propietario",
    description:
      "Entregamos cada unidad lista para habitar, con acabados de primera y la satisfacción total del cliente garantizada.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="proceso"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#f8f8f8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block text-[#1959ff] text-sm font-semibold uppercase tracking-widest mb-3">
            Cómo trabajamos
          </span>
          <h2 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-[#20316d] mb-4">
            Actividad de{" "}
            <span className="text-[#1959ff]">La Empresa</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Un proceso integral y transparente que garantiza la calidad en cada
            etapa, desde la búsqueda del terreno hasta la entrega de las llaves.
          </p>
        </div>

        {/* Steps - Desktop: horizontal flow, Mobile: vertical */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1959ff]/20 via-[#1959ff] to-[#1959ff]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="fade-in flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#e5e5e5] group-hover:border-[#1959ff] text-gray-400 group-hover:text-[#1959ff] group-hover:bg-[#1959ff]/5 flex items-center justify-center transition-all duration-300 shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#20316d] text-white text-xs font-bold flex items-center justify-center z-20">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-['Montserrat'] font-bold text-[#20316d] text-base mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#20316d] rounded-2xl px-8 py-6 sm:py-5 text-white shadow-xl shadow-navy-900/30">
            <p className="font-medium text-white/90">
              ¿Querés ser parte del próximo proyecto?
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 px-6 py-2.5 bg-[#1959ff] hover:bg-[#2874fc] text-white font-semibold rounded-xl transition-colors duration-200 shadow-md cursor-pointer"
            >
              Quiero invertir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
