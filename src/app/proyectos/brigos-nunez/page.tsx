import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Brigos Núñez | Proyecto Residencial Premium",
  description:
    "14 pisos de arquitectura moderna en Av. Cabildo 4986, Núñez, CABA. 1 y 2 ambientes con pool, gym, SUM y acceso inteligente. Grupo Briones.",
};

const images = [
  {
    src: "https://images.ctfassets.net/384t5rgvotiw/3VlVEryOJ7kBqMtPNhCtRs/b264eb920d48e7ec7fdef98e8ef7b479/C02_-_Grupo_Briones_-_Cabildo_4987_-_Exterior__1___2_.jpg?fm=webp&q=70&w=1200",
    alt: "Fachada exterior Brigos Núñez",
  },
  {
    src: "https://images.ctfassets.net/384t5rgvotiw/7IkGOWRz4sk4WarXsqP5Rs/b264eb920d48e7ec7fdef98e8ef7b479/C17_-_Grupo_Briones_-_Cabildo_4987_-_Terraza__1_.jpg?fm=webp&q=70&w=1200",
    alt: "Terraza con pool y solarium",
  },
  {
    src: "https://images.ctfassets.net/384t5rgvotiw/aQq2z2zRMOcQBizC3RYDL/b264eb920d48e7ec7fdef98e8ef7b479/C04_-_Grupo_Briones_-_Cabildo_4987_-_Living_Comedor.jpg?fm=webp&q=70&w=1200",
    alt: "Living comedor",
  },
  {
    src: "https://images.ctfassets.net/384t5rgvotiw/6fcIfItCMFp565gEyuIHIg/b264eb920d48e7ec7fdef98e8ef7b479/C07_-_Grupo_Briones_-_Cabildo_4987_-_Dpto_B_Balcon.jpg?fm=webp&q=70&w=1200",
    alt: "Balcón departamento B",
  },
  {
    src: "https://images.ctfassets.net/384t5rgvotiw/6C5xslqO95poBuMGpNYhkA/b264eb920d48e7ec7fdef98e8ef7b479/C12_-_Grupo_Briones_-_Cabildo_4987_-__Dpto_D_Dormitorio.jpg?fm=webp&q=70&w=1200",
    alt: "Dormitorio departamento D",
  },
];

const amenities = [
  { icon: "🏊", label: "Pool con solarium" },
  { icon: "🏋️", label: "Gimnasio" },
  { icon: "🎉", label: "SUM" },
  { icon: "🔥", label: "Parrillas" },
  { icon: "🚲", label: "Bicicletero" },
  { icon: "📷", label: "Cámaras de seguridad" },
  { icon: "🔐", label: "Acceso inteligente" },
  { icon: "🌅", label: "Vistas panorámicas" },
];

const specs = [
  { label: "Dirección", value: "Av. Cabildo 4986, Núñez, CABA" },
  { label: "Pisos", value: "14 pisos" },
  { label: "Tipologías", value: "1 y 2 ambientes" },
  { label: "Estado", value: "En construcción" },
  { label: "Desarrolladora", value: "Grupo Briones" },
];

export default function BrigosNunezPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20316d]/80 via-[#20316d]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 mb-4">
              En construcción
            </span>
            <h1 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-white leading-tight">
              Brigos | Núñez
            </h1>
            <p className="text-white/80 text-lg mt-2">
              Av. Cabildo 4986 · Núñez, CABA
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left: description + amenities */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <span className="inline-block text-[#1959ff] text-sm font-semibold uppercase tracking-widest mb-3">
                    El proyecto
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Brigos Núñez es un edificio residencial premium de 14 pisos
                    ubicado sobre Av. Cabildo 4986, en uno de los barrios más
                    dinámicos de Buenos Aires. Ofrece departamentos de 1 y 2
                    ambientes con arquitectura moderna, grandes ventanales,
                    doble vidriado y cocinas equipadas con electrodomésticos de
                    primera línea.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    A metros del Tren Mitre, Tren Belgrano Norte y Metrobús,
                    con acceso rápido a Av. General Paz y el Acceso Norte.
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#20316d] text-xl mb-5">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {amenities.map((a, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl text-center hover:bg-[#1959ff]/5 transition-colors"
                      >
                        <span className="text-2xl">{a.icon}</span>
                        <span className="text-gray-700 text-sm font-medium">
                          {a.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="font-['Montserrat'] font-bold text-[#20316d] text-xl mb-5">
                    Galería
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {images.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className={`relative rounded-xl overflow-hidden ${i === 0 ? "col-span-2 h-64" : "h-48"}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: specs + CTA */}
              <div className="space-y-6">
                <div className="bg-[#20316d] rounded-2xl p-6 text-white sticky top-24">
                  <h2 className="font-['Montserrat'] font-bold text-xl mb-5">
                    Ficha técnica
                  </h2>
                  <ul className="space-y-4">
                    {specs.map((s, i) => (
                      <li key={i} className="border-b border-white/10 pb-3 last:border-0">
                        <p className="text-white/60 text-xs uppercase tracking-wide">
                          {s.label}
                        </p>
                        <p className="text-white font-semibold mt-0.5">
                          {s.value}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contacto"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1959ff] hover:bg-[#1448dd] text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    Quiero más información
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href="https://grupobriones.com.ar/proyectos/brigos-nunez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-xl transition-colors duration-200 text-sm"
                  >
                    Ver en Grupo Briones
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
