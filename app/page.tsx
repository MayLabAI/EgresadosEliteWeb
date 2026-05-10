import Link from "next/link";
import Image from "next/image";

const WA_URL = "https://wa.me/5493412107082";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="bg-brand-dark min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Red accent blob */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-inner w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

            {/* Left: Text */}
            <div>
              <p className="animate-fade-up font-dm-sans text-brand-red text-sm font-semibold uppercase tracking-[0.25em] mb-6">
                Indumentaria para egresados · Rosario · Sta. Fe · Bs. As.
              </p>

              <h1 className="heading-display text-white leading-[0.9] mb-2">
                <span className="animate-fade-up delay-100 block text-[clamp(3.5rem,9vw,7rem)]">
                  DISEÑO
                </span>
                <span className="animate-fade-up delay-200 block text-[clamp(3.5rem,9vw,7rem)] text-stroke-white">
                  RÁPIDO,
                </span>
                <span className="animate-fade-up delay-300 block text-[clamp(3.5rem,9vw,7rem)] text-brand-red">
                  ATENCIÓN
                </span>
                <span className="animate-fade-up delay-400 block text-[clamp(3.5rem,9vw,7rem)]">
                  ELITE.
                </span>
              </h1>

              <div className="animate-fade-up delay-500 h-1 w-24 bg-brand-red rounded-full my-8" />

              <p className="animate-fade-up delay-500 font-dm-sans text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Tu prenda de egreso, con el diseño que siempre imaginaste y la calidad que te merecés.
              </p>

              <div className="animate-fade-up delay-600 flex flex-wrap gap-4">
                <Link href="/servicios" className="btn-primary text-base">
                  Ver productos
                </Link>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
                  <WhatsAppIcon className="w-4 h-4" />
                  Pedí presupuesto
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="hidden lg:flex justify-center items-center animate-fade-right delay-300">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 border-2 border-brand-red/40 rounded-3xl" />
                <div className="absolute -inset-6 border border-white/10 rounded-3xl" />
                <div className="w-80 h-96 rounded-2xl overflow-hidden relative animate-float">
                  <Image
                    src="/images/foto-2.jpg"
                    alt="Egresados con sus buzos"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                </div>
                {/* Badge flotante */}
                <div className="absolute -bottom-5 -left-8 bg-brand-red text-white rounded-2xl px-5 py-3 shadow-2xl animate-float delay-200">
                  <p className="font-alfa-slab text-xl leading-none">ELITE</p>
                  <p className="font-dm-sans text-xs text-white/70 mt-0.5">Calidad garantizada</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MARQUEE RIBBON ── */}
      <div className="bg-brand-red py-4 overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-inner">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-0">
                {marqueeItems.map((item, j) => (
                  <span key={j} className="font-alfa-slab text-white text-base tracking-widest px-8 shrink-0">
                    {item}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUE TU BUZO HABLE ── */}
      <section className="bg-brand-cream section-padding">
        <div className="container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Foto grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-left">
              {["foto-1.jpg", "foto-4.jpg", "foto-5.jpg", "foto-6.jpg"].map((src, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300 ${i === 0 ? "aspect-[3/4]" : i === 1 ? "aspect-square" : i === 2 ? "aspect-square" : "aspect-[3/4]"}`}
                >
                  <Image
                    src={`/images/${src}`}
                    alt={`Diseño ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="animate-fade-right">
              <p className="font-dm-sans text-brand-red text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Nuestro diferencial
              </p>
              <h2 className="heading-display text-brand-dark text-[clamp(2.5rem,5vw,4.5rem)] mb-6">
                QUE TU BUZO<br />
                <span className="text-stroke-dark">HABLE POR VOS.</span>
              </h2>
              <div className="h-1 w-16 bg-brand-red rounded-full mb-6" />
              <p className="font-dm-sans text-brand-dark/70 text-lg leading-relaxed mb-8">
                Cada promoción tiene una historia. Nosotros la convertimos en una prenda única, con calidad real y atención personalizada para tu grupo.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {diferenciales.map((d) => (
                  <div key={d.title} className="bg-white rounded-xl p-4 border border-black/5 shadow-sm">
                    <p className="font-alfa-slab text-brand-red text-2xl leading-none mb-1">{d.num}</p>
                    <p className="font-dm-sans text-sm font-semibold text-brand-dark">{d.title}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="bg-brand-dark section-padding overflow-hidden">
        <div className="container-inner">
          <div className="text-center mb-16">
            <p className="font-dm-sans text-brand-red text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Así funciona
            </p>
            <h2 className="heading-display text-white text-[clamp(2.5rem,6vw,5rem)]">
              LO TENÉS EN<br />
              <span className="text-brand-red">4 PASOS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((paso, i) => (
              <div
                key={paso.num}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-brand-red/10 hover:border-brand-red/40 transition-all duration-300"
              >
                <span className="font-alfa-slab text-white/10 text-8xl leading-none absolute top-4 right-4 group-hover:text-brand-red/20 transition-colors">
                  {paso.num}
                </span>
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center mb-4">
                  <span className="font-alfa-slab text-white text-lg">{paso.num}</span>
                </div>
                <h3 className="font-alfa-slab text-white text-xl uppercase leading-tight">
                  {paso.title}
                </h3>
                <p className="font-dm-sans text-white/50 text-sm mt-2">{paso.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="#8B1414" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS ── */}
      <section className="bg-brand-cream section-padding">
        <div className="container-inner">
          <div className="text-center mb-14">
            <p className="font-dm-sans text-brand-red text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Catálogo
            </p>
            <h2 className="heading-display text-brand-dark text-[clamp(2.5rem,5vw,4.5rem)]">
              NUESTROS PRODUCTOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productos.map((p) => (
              <div
                key={p.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-black/5"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-alfa-slab text-white text-3xl uppercase">{p.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-dm-sans text-brand-dark/60 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-sm w-full justify-center"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-red py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="font-alfa-slab text-white text-[20vw] leading-none select-none">
              ELITE
            </span>
          </div>
        </div>
        <div className="container-inner text-center relative z-10">
          <h2 className="heading-display text-white text-[clamp(2.8rem,7vw,6rem)] mb-4 max-w-3xl mx-auto">
            DISEÑÁ EL BUZO QUE VAS A SEGUIR USANDO.
          </h2>
          <p className="font-dm-sans text-white/70 text-xl mb-10">
            Más que un buzo. Es <strong className="text-white">TU</strong> buzo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
              <WhatsAppIcon className="w-4 h-4" />
              Pedí presupuesto
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-brand-dark py-16">
        <div className="container-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {badges.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center">
                  <b.Icon className="w-6 h-6 text-brand-red" />
                </div>
                <p className="font-alfa-slab text-white text-lg uppercase">{b.label}</p>
                <p className="font-dm-sans text-white/40 text-xs">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Data ── */
const marqueeItems = [
  "BUZOS DE EGRESO",
  "★",
  "CAMPERAS",
  "★",
  "KITS COMPLETOS",
  "★",
  "ATENCIÓN ELITE",
  "★",
  "DISEÑO RÁPIDO",
  "★",
];

const diferenciales = [
  { num: "+500", title: "Promociones vestidas" },
  { num: "100%", title: "Personalizable" },
  { num: "15 días", title: "Entrega express" },
  { num: "3 prov.", title: "Rosario · SF · BA" },
];

const proceso = [
  { num: 1, title: "Diseñás tu buzo", desc: "Usá el creador online o consultanos por WhatsApp." },
  { num: 2, title: "Aprobás el diseño", desc: "Te mandamos una vista previa para que la apruebes con el grupo." },
  { num: 3, title: "Señás el 50%", desc: "Con la mitad del pago confirmás el pedido." },
  { num: 4, title: "Te lo mandamos", desc: "Producimos y enviamos a todo el país." },
];

const productos = [
  {
    name: "Buzos",
    desc: "Personalizados con el nombre de tu promoción, el año y el diseño que elijan. Disponibles en canguro y recorte.",
    img: "/images/foto-6.jpg",
  },
  {
    name: "Camperas",
    desc: "Con cierre y capucha, perfectas para el egreso y para el día a día. El hit de cada promoción.",
    img: "/images/foto-4.jpg",
  },
  {
    name: "Kits",
    desc: "Buzo, campera y remera. Todo coordinado y con el diseño que eligieron juntos.",
    img: "/images/foto-3.jpg",
  },
];

const badges = [
  {
    label: "Cuotas fijas",
    sub: "Sin intereses ocultos",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    label: "Alta calidad",
    sub: "Tela premium garantizada",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    label: "Envíos",
    sub: "A todo el país",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    label: "Atención elite",
    sub: "Asesoramiento real",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
