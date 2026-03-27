"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://beltranbriones.com/wp-content/uploads/2025/10/image-home.webp')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1959ff]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#2874fc]/15 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Vertical accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#1959ff]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#1959ff] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Buenos Aires · Argentina
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Montserrat'] text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Beltrán{" "}
            <span
              className="block"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              Briones
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#1959ff]" />
            <span className="text-[#1959ff] text-sm font-semibold uppercase tracking-widest">
              Real Estate · Buenos Aires
            </span>
          </div>

          <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-4 max-w-2xl">
            Cofundador de{" "}
            <strong className="text-white font-semibold">Grupo Briones</strong>,
            una de las desarrolladoras inmobiliarias más importantes de la
            Ciudad de Buenos Aires.
          </p>

          <p className="text-white/55 text-base sm:text-lg mb-12 max-w-xl">
            Más de 12 años construyendo el futuro del Real Estate argentino con
            proyectos de alta calidad y rentabilidad comprobada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-9 py-5 bg-[#1959ff] hover:bg-[#2874fc] text-white font-bold text-lg rounded-2xl transition-all duration-200 shadow-2xl shadow-[#1959ff]/40 hover:shadow-[#1959ff]/60 hover:-translate-y-1 group"
            >
              Quiero invertir ahora
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-3 px-9 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-semibold text-lg rounded-2xl transition-all duration-200 group"
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablá conmigo
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/40 rounded-full animate-bounce" />
      </div>
    </section>
  );
}
