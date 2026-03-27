"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    name: "Proyecto Palermo",
    location: "Palermo, Buenos Aires",
    type: "Residencial Premium",
    units: "48 departamentos",
    status: "Entregado",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Edificio residencial de alta gama en el corazón de Palermo con amenities de primer nivel y terminaciones premium.",
    image: "https://beltranbriones.com/wp-content/uploads/2025/10/image-home.webp",
  },
  {
    name: "Brigos | Núñez",
    location: "Av. Cabildo 4986, Núñez, CABA",
    type: "Residencial Premium",
    units: "14 pisos · 1 y 2 ambientes",
    status: "En construcción",
    statusColor: "bg-yellow-100 text-yellow-700",
    description:
      "14 pisos de arquitectura moderna frente a Av. Cabildo. Pool, gym, SUM, parrillas y acceso inteligente. A metros del Tren Mitre, Belgrano Norte y Metrobús.",
    image: "https://images.ctfassets.net/384t5rgvotiw/3VlVEryOJ7kBqMtPNhCtRs/b264eb920d48e7ec7fdef98e8ef7b479/C02_-_Grupo_Briones_-_Cabildo_4987_-_Exterior__1___2_.jpg?fm=webp&q=70&w=1200",
    link: "/proyectos/brigos-nunez",
  },
  {
    name: "Nuevo desarrollo",
    location: "Buenos Aires",
    type: "En desarrollo",
    units: "En proceso",
    status: "Próximamente",
    statusColor: "bg-blue-100 text-blue-700",
    description:
      "Próximo lanzamiento. Unite a nuestra lista exclusiva de inversores para acceder a precios de preventa.",
    image: "https://beltranbriones.com/wp-content/uploads/2025/10/image-home.webp",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      id="proyectos"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 fade-in">
          <div>
            <span className="inline-block text-[#1959ff] text-sm font-semibold uppercase tracking-widest mb-3">
              Nuestro portfolio
            </span>
            <h2 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-[#20316d] leading-tight">
              Proyectos <span className="text-[#1959ff]">destacados</span>
            </h2>
          </div>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#1959ff] font-semibold hover:text-[#20316d] transition-colors group cursor-pointer"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={i}
              className="fade-in bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20316d]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-[#20316d] text-lg leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-[#1959ff] text-sm font-medium mt-0.5">
                      {project.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                  <svg className="w-4 h-4 text-[#1959ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">
                    <strong className="text-[#20316d]">{project.units}</strong>
                  </span>
                  {project.link ? (
                    <Link
                      href={project.link}
                      className="text-[#1959ff] text-sm font-semibold hover:text-[#20316d] transition-colors flex items-center gap-1 group"
                    >
                      Ver proyecto
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-[#1959ff] text-sm font-semibold hover:text-[#20316d] transition-colors flex items-center gap-1 group cursor-pointer"
                    >
                      Más info
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
