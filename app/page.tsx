import Image from 'next/image'
import {
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  ShoppingCart,
} from 'lucide-react'
import Nav from '@/components/Nav'
import Book3D from '@/components/Book3D'
import Reveal from '@/components/Reveal'
import HeroVideo from '@/components/HeroVideo'
import ProcessSection from '@/components/ProcessSection'

const ML_URL       = 'https://www.mercadolibre.com.ar/libro-el-metodo-briones--beltran-briones/up/MLAU3759673539'
const PHONE        = '+54 911 2468 2070'
const EMAIL_COM    = 'contacto@grupobriones.com.ar'



/* ══════════════════════════════════════════════════════════
   REFERENTE — logros y credenciales
══════════════════════════════════════════════════════════ */
const achievements = [
  'Cofundador de la desarrolladora inmobiliaria Grupo Briones.',
  'Supervisó la construcción y entrega de 12 edificios residenciales, tanto en la Ciudad de Buenos Aires como en Estados Unidos.',
  'Cofundador de El Club del Ladrillo, el podcast de Real Estate más escuchado del país.',
  'Orador en universidades como: UBA, UADE, UB, UCA, UTDT, San Andrés, UCEMA, entre muchas otras.',
  'Speaker en eventos como: Expo Real Estate, Bootcamps empresariales, Expo Construcción de Neuquén, entre otros.',
  'Autor del best seller "El método Briones: cómo promocionar y vender cualquier cosa", el mayor lanzamiento de un libro en la historia de Mercado Libre.',
  'Más de 1.000.000 de seguidores en redes sociales.',
]

function Referente() {
  return (
    <section id="sobre-beltran" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — photo */}
          <Reveal>
            <div className="relative max-w-[480px] mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-100">
                <Image
                  src="/assets/brionesbeltran.jpg"
                  alt="Beltrán Briones — Cofundador Grupo Briones"
                  width={960}
                  height={1200}
                  className="object-cover w-full h-full" style={{ objectPosition: '65% top' }}
                />
              </div>
              {/* Navy accent block */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-700 rounded-2xl -z-10" />
              {/* Book badge */}
              <a
                href={ML_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 left-2 sm:-left-5 bg-white rounded-xl border border-slate-100 shadow-lg px-4 py-3 max-w-[168px] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-brand-700 rounded-full flex items-center justify-center shrink-0">
                    <ShoppingCart size={10} className="text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-brand-700 uppercase tracking-wide leading-tight">Best Seller</p>
                </div>
                <p className="text-xs font-black text-slate-900 leading-tight mb-0.5">El Método Briones</p>
                <p className="text-[10px] text-slate-400 leading-snug">#1 en ventas · Penguin Random House</p>
                <p className="mt-2 text-[10px] font-bold text-brand-700 uppercase tracking-wide group-hover:underline">
                  Comprar →
                </p>
              </a>
            </div>
          </Reveal>

          {/* Right — achievements */}
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-700 mb-4">Trayectoria</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight leading-[1.1] text-slate-900 mb-8">
                Referente del{' '}
                <strong className="font-black">Real Estate</strong>{' '}
                en la región
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={100 + i * 60}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 border-brand-200 flex items-center justify-center">
                      <ChevronRight size={11} className="text-brand-600" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={560}>
              <div className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-slate-200">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/beltranbriones' },
                  { label: 'YouTube',   href: 'https://www.youtube.com/@beltranbriones' },
                  { label: 'TikTok',    href: 'https://www.tiktok.com/@beltranbriones' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-brand-700 transition-all duration-200 group translate-x-0 hover:translate-x-1.5"
                  >
                    <span className="text-brand-700 font-black text-xs leading-none transition-transform duration-200 group-hover:scale-125">B</span>
                    {label}
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ══════════════════════════════════════════════════════════
   EL LIBRO
══════════════════════════════════════════════════════════ */
function BookSection() {
  return (
    <section id="libro" className="py-24 lg:py-32 bg-brand-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* 3D Book */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-center gap-8">
              <Book3D />
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={ML_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-700 text-white font-bold text-base rounded-xl hover:bg-brand-800 active:scale-[0.97] transition-all duration-200 shadow-[0_8px_24px_rgba(30,58,122,0.25)]"
                >
                  <ShoppingCart size={18} />
                  Compralo en Mercado Libre
                </a>
              </div>
              <p className="text-xs text-white/35 text-center font-medium">
                El mayor lanzamiento de un libro en la historia de Mercado Libre · Penguin
              </p>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-300 mb-4">Mi libro</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight leading-[1.05] text-white mb-3">
                El Método{' '}
                <strong className="font-black">Briones</strong>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base italic text-white/50 font-light mb-6 border-l-4 border-brand-400 pl-4">
                "Cómo promocionar y vender cualquier cosa"
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base text-white/60 leading-relaxed mb-6 max-w-[54ch]">
                El mismo método que aplico en Grupo Briones para vender proyectos,
                construir presencia en redes y posicionarme como referente en la
                industria. Un sistema concreto para cualquier persona que quiera
                vender o promocionarse, en cualquier rubro.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-white/60 leading-relaxed mb-8 max-w-[54ch]">
                Best seller de Penguin Random House. El mayor lanzamiento en la
                historia de Mercado Libre Argentina. Más de 1 millón de personas
                alcanzadas en el lanzamiento.
              </p>
            </Reveal>

            {[
              'Sistema de promoción personal y empresarial',
              'Cómo construir autoridad en cualquier industria',
              'Ventas sin fricción: el método Briones',
              'Casos reales del mercado inmobiliario argentino',
            ].map((f, i) => (
              <Reveal key={f} delay={240 + i * 50}>
                <div className="flex items-start gap-3 mb-2.5">
                  <ChevronRight size={14} className="text-brand-300 mt-0.5 shrink-0" />
                  <p className="text-sm text-white/70 font-medium">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   CONTACTO — personal, cálido, accionable
══════════════════════════════════════════════════════════ */
const WA_MSG = encodeURIComponent('Hola Beltrán, me interesa invertir en uno de sus proyectos. ¿Podemos hablar?')

function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* — eyebrow */}
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-700 mb-6">Escribime directamente</p>
        </Reveal>

        {/* — headline personal */}
        <Reveal delay={80}>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-light tracking-tight leading-[1.05] text-slate-900 mb-5">
            ¿Querés invertir?{' '}
            <strong className="font-black">Hablemos.</strong>
          </h2>
        </Reveal>

        {/* — copy first-person */}
        <Reveal delay={140}>
          <p className="text-base text-slate-500 leading-relaxed max-w-[46ch] mx-auto font-light mb-8 sm:mb-14">
            Escribime y te cuento en detalle los proyectos activos, las condiciones
            y cómo podemos trabajar juntos. Sin intermediarios, sin vueltas.
          </p>
        </Reveal>

        {/* — 3 acción cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-12">

          {/* WhatsApp — primario */}
          <Reveal delay={100}>
            <a
              href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-5 sm:p-7 bg-white border border-slate-100 rounded-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="white" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="text-base font-black text-slate-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-slate-400 leading-snug">La forma más directa. Respondo personalmente.</p>
            </a>
          </Reveal>

          {/* Email */}
          <Reveal delay={170}>
            <a
              href={`mailto:${EMAIL_COM}?subject=Consulta%20de%20inversión%20inmobiliaria`}
              className="group flex flex-col items-center text-center p-5 sm:p-7 bg-white border border-slate-100 rounded-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={26} className="text-brand-700" />
              </div>
              <h3 className="text-base font-black text-slate-900 mb-1">Email</h3>
              <p className="text-sm text-slate-400 leading-snug break-all">{EMAIL_COM}</p>
            </a>
          </Reveal>

          {/* Teléfono */}
          <Reveal delay={240}>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="group flex flex-col items-center text-center p-5 sm:p-7 bg-white border border-slate-100 rounded-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={26} className="text-brand-700" />
              </div>
              <h3 className="text-base font-black text-slate-900 mb-1">Llamar</h3>
              <p className="text-sm text-slate-400 leading-snug">{PHONE}</p>
            </a>
          </Reveal>
        </div>

        {/* — trust strip */}
        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-8 border-t border-slate-100">
            {[
              '24 edificios entregados',
              '1.791 departamentos',
              '+1M seguidores',
              'Cerrito 1186, CABA',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-700 rounded-full" />
                <span className="text-xs text-slate-400 font-medium">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════
   FOOTER — navy, tres columnas como el original
══════════════════════════════════════════════════════════ */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-900 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Col 1 — Quien Soy */}
          <div>
            <h4 className="text-sm font-light text-white mb-1">
              Quien <strong className="font-black">Soy</strong>
            </h4>
            <div className="w-8 h-0.5 bg-white/20 mb-4" />
            <p className="text-sm text-white/50 leading-relaxed">
              Soy <strong className="text-white/80">Beltrán Briones</strong>, cofundador de{' '}
              <strong className="text-white/80">Grupo Briones</strong>, una de las
              desarrolladoras inmobiliarias más importantes de la Ciudad de Buenos Aires.
            </p>
            <p className="text-sm text-white/50 leading-relaxed mt-3">
              <strong className="text-white/70">Nuestro trabajo abarca todo el proceso:</strong>{' '}
              comprar los lotes, diseñar los proyectos arquitectónicos, construir los
              edificios, vender los departamentos y entregar cada unidad lista para habitar.
            </p>
          </div>

          {/* Col 2 — Contacto Comercial */}
          <div>
            <h4 className="text-sm font-light text-white mb-1">
              Contacto <strong className="font-black">Comercial</strong>
            </h4>
            <div className="w-8 h-0.5 bg-white/20 mb-4" />
            <div className="flex flex-col gap-2.5">
              {[PHONE, EMAIL_COM, 'terrenos@grupobriones.com.ar', 'proveedores@grupobriones.com.ar', 'calidad@grupobriones.com.ar'].map((c) => (
                <a
                  key={c}
                  href={c.includes('@') ? `mailto:${c}` : `tel:${c.replace(/\s/g, '')}`}
                  className="text-sm text-white/50 hover:text-white/90 transition-colors font-medium flex items-center gap-2 break-all"
                >
                  {c.includes('@')
                    ? <Mail size={12} className="text-white/30 shrink-0" />
                    : <Phone size={12} className="text-white/30 shrink-0" />}
                  {c}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Redes */}
          <div>
            <h4 className="text-sm font-light text-white mb-1">
              Seguime en <strong className="font-black">Mis Redes</strong>
            </h4>
            <div className="w-8 h-0.5 bg-white/20 mb-4" />
            <div className="flex flex-wrap gap-2">
              {['Instagram', 'TikTok', 'YouTube', 'Spotify', 'Facebook', 'LinkedIn'].map((r) => (
                <a
                  key={r}
                  href="https://www.instagram.com/beltranbriones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/8 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-semibold text-white/60 hover:text-white transition-all"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  {r}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30 font-medium">
            Beltrán Briones {year}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ══════════════════════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroVideo />
        <ProcessSection />
        <Referente />
        <BookSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
