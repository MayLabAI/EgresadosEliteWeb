import Link from "next/link";

const WA_URL = "https://wa.me/5493412107082";

const valores = [
  {
    titulo: "Calidad real",
    desc: "Usamos telas premium y procesos de sublimación y bordado que duran años. No es solo un buzo de egreso — es una prenda que van a seguir usando.",
  },
  {
    titulo: "Diseño tuyo",
    desc: "Cada promoción elige sus colores, su tipografía, sus números. Nosotros nunca imponemos un diseño genérico.",
  },
  {
    titulo: "Respuesta rápida",
    desc: "Atendemos por WhatsApp y respondemos el mismo día. Sin formularios interminables, sin esperas de semanas.",
  },
  {
    titulo: "Atención elite",
    desc: "Acompañamos cada pedido desde el primer diseño hasta la entrega. Si algo no está bien, lo solucionamos.",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-brand-red section-padding">
        <div className="container-inner">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white text-5xl md:text-6xl mb-4">
              Quiénes somos
            </h1>
            <p className="font-inter text-white/80 text-lg leading-relaxed">
              Egresados Elite nació con un objetivo claro: cambiar cómo los chicos recuerdan su último año de colegio.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white section-padding">
        <div className="container-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-display text-brand-dark text-4xl mb-6">
                Nuestra historia
              </h2>
              <div className="space-y-4 font-inter text-brand-dark/70 text-base leading-relaxed">
                <p>
                  Empezamos como un pequeño taller en Rosario, haciendo buzos para un par de colegios del barrio. La gente empezó a verlos en la calle, a preguntar de dónde eran, a pedir más.
                </p>
                <p>
                  Hoy llegamos a Santa Fe y Buenos Aires, y seguimos creciendo. Pero la forma de trabajar es la misma: escuchar a cada promoción, entender qué quieren y hacerlo realidad con calidad de verdad.
                </p>
                <p>
                  No hacemos ropa genérica. Hacemos <strong className="text-brand-dark">su ropa</strong>.
                </p>
              </div>
            </div>
            <div className="bg-brand-cream rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="font-bebas text-brand-red text-5xl">100+</p>
                  <p className="font-inter text-brand-dark/60 text-sm mt-1">Promociones producidas</p>
                </div>
                <div>
                  <p className="font-bebas text-brand-red text-5xl">3</p>
                  <p className="font-inter text-brand-dark/60 text-sm mt-1">Provincias cubiertas</p>
                </div>
                <div>
                  <p className="font-bebas text-brand-red text-5xl">24h</p>
                  <p className="font-inter text-brand-dark/60 text-sm mt-1">Tiempo de respuesta</p>
                </div>
                <div>
                  <p className="font-bebas text-brand-red text-5xl">0</p>
                  <p className="font-inter text-brand-dark/60 text-sm mt-1">Diseños iguales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-brand-cream section-padding">
        <div className="container-inner">
          <h2 className="heading-display text-brand-dark text-4xl md:text-5xl text-center mb-12">
            Cómo trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-white rounded-2xl p-6 border border-black/10">
                <h3 className="font-bebas text-brand-red text-2xl tracking-varsity uppercase mb-2">
                  {v.titulo}
                </h3>
                <p className="font-inter text-brand-dark/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="bg-brand-dark section-padding">
        <div className="container-inner text-center">
          <h2 className="heading-display text-white text-4xl md:text-5xl mb-4">
            Dónde llegamos
          </h2>
          <p className="font-inter text-white/60 text-base mb-8">
            Producimos en Rosario y enviamos a todo el país.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Rosario", "Santa Fe", "Buenos Aires", "Todo el país"].map((zona) => (
              <span
                key={zona}
                className="font-bebas text-white text-xl tracking-varsity uppercase border border-white/30 rounded-full px-6 py-2"
              >
                {zona}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="container-inner text-center">
          <h2 className="heading-display text-white text-4xl md:text-5xl mb-4">
            ¿Querés trabajar con nosotros?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Escribinos
            </a>
            <Link href="/creador?paso=1" className="btn-outline">
              Diseñá tu prenda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
