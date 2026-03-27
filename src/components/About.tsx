"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const achievements = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    text: "Cofundador de la desarrolladora inmobiliaria Grupo Briones.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    text: "Supervisó la construcción y entrega de 12 edificios residenciales en Buenos Aires y Estados Unidos.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    text: "Cofundador de El Club del Ladrillo, el podcast de Real Estate más escuchado del país.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    text: 'Autor del best seller "El método Briones", el mayor lanzamiento de un libro en la historia de Mercado Libre.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    text: "Orador en UBA, UADE, UB, UCA, UTDT, San Andrés, UCEMA y muchas otras universidades.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    text: "Speaker en Expo Real Estate, Bootcamps empresariales y Expo Construcción de Neuquén.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    text: "Más de 1.000.000 de seguidores en redes sociales.",
  },
];

export default function About() {
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
    <section id="nosotros" ref={sectionRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="fade-in relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[3/4]">
              <Image
                src="/beltran.jpg"
                alt="Beltrán Briones - Desarrollador Inmobiliario en Buenos Aires"
                fill
                className="object-cover object-[75%_top]"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#20316d]/95 backdrop-blur-sm rounded-xl p-4 text-white">
                <p className="font-['Montserrat'] font-bold text-lg">Referente del Real Estate</p>
                <p className="text-white/70 text-sm mt-0.5">en la región</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#1959ff]/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="fade-in">
              <span className="inline-block text-[#1959ff] text-sm font-semibold uppercase tracking-widest mb-3">
                Quién soy
              </span>
              <h2 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-[#20316d] leading-tight mb-4">
                Referente del{" "}
                <span className="text-[#1959ff]">Real Estate</span>{" "}
                en la región
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Soy Beltrán Briones, cofundador de{" "}
                <strong className="text-[#20316d]">Grupo Briones</strong>, una
                de las desarrolladoras inmobiliarias más importantes de la
                Ciudad de Buenos Aires. A lo largo de mi carrera construí un
                camino sólido en el Real Estate argentino con proyectos de
                alta calidad y resultados comprobados.
              </p>
            </div>

            <ul className="space-y-4">
              {achievements.map((item, i) => (
                <li
                  key={i}
                  className="fade-in flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#1959ff]/10 text-[#1959ff] flex items-center justify-center group-hover:bg-[#1959ff] group-hover:text-white transition-colors duration-200 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="fade-in mt-10">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#20316d] hover:bg-[#192655] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Conectá conmigo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
