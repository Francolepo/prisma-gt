import { useDeferredValue, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BadgeDollarSign, ChartNoAxesCombined, Search } from 'lucide-react'
import { BrowserFrame } from './components/BrowserFrame'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { benefitCards, portfolioItems, processSteps } from './data'
import {
  CompactInsightCharts,
  ConsultComparisonChart,
  heroHighlights,
  heroViews,
  HorizontalActionChart,
  PortfolioPreview,
  primaryButtonClass,
  RevenueTrendChart,
  secondaryButtonClass,
  SiteFooter,
  SiteHeader,
  SourceMixChart,
  type HeroViewKey,
} from './site-shared'

export default function HomePage() {
  const [heroView, setHeroView] = useState<HeroViewKey>('sitio')

  const deferredHeroView = useDeferredValue(heroView)
  const activeHeroView = useMemo(
    () => heroViews[deferredHeroView],
    [deferredHeroView],
  )
  const heroBarsMax = Math.max(...activeHeroView.bars.map((item) => item.value))

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.5),transparent_38%),radial-gradient(circle_at_top_right,rgba(224,242,254,0.9),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.86))]" />

      <SiteHeader
        brandHref="#inicio"
        navItems={[
          { label: 'Inicio', href: '#inicio' },
          { label: 'Beneficios', href: '#beneficios' },
          { label: 'Analíticas', href: '#analiticas' },
          { label: 'Portafolio', href: '#portafolio' },
          { label: 'Producto', href: './paquetes.html' },
        ]}
        ctaHref="./paquetes.html"
        ctaLabel="Ver página de producto"
      />

      <main>
        <section id="inicio" className="relative pb-20 pt-10 sm:pb-24 lg:pb-28">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:gap-16">
            <Reveal className="max-w-2xl">
              <p className="section-label">Sitios web modernos para negocios</p>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,4.75rem)] font-semibold tracking-[-0.06em] text-slate-950 leading-[0.96]">
                Creamos sitios web profesionales para negocios que quieren crecer.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Prisma ayuda a que tu negocio se vea profesional, consiga más
                clientes, muestre sus servicios con claridad y crezca online con
                una presencia que inspira confianza.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#beneficios" className={primaryButtonClass}>
                  Explorar beneficios
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="./paquetes.html" className={secondaryButtonClass}>
                  Ver página de producto
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(91,140,181,0.08)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative" delay={0.12}>
              <BrowserFrame title="prisma-demo.site" badge="Vista premium" className="float-soft">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(heroViews) as [HeroViewKey, (typeof heroViews)[HeroViewKey]][]).map(
                      ([key, view]) => (
                        <button
                          key={key}
                          type="button"
                          aria-pressed={heroView === key}
                          onClick={() => setHeroView(key)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition ${
                            heroView === key
                              ? 'bg-slate-950 text-white'
                              : 'border border-sky-100 bg-white/90 text-slate-500 hover:border-sky-300 hover:text-sky-700'
                          }`}
                        >
                          {view.label}
                        </button>
                      ),
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={deferredHeroView}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                        <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(224,242,254,0.9),rgba(255,255,255,0.95))] p-6">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-xs font-semibold tracking-[0.16em] text-sky-700 uppercase">
                              {activeHeroView.eyebrow}
                            </p>
                            <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-500">
                              Prisma interactivo
                            </span>
                          </div>
                          <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                            {activeHeroView.title}
                          </h3>
                          <p className="mt-4 text-sm leading-6 text-slate-600">
                            {activeHeroView.description}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {activeHeroView.chips.map((item) => (
                              <span
                                key={item}
                                className="rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-slate-600"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-sky-100 bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                                {activeHeroView.metricLabel}
                              </p>
                              <p className="mt-2 text-4xl font-display font-semibold tracking-[-0.05em] text-slate-950">
                                {activeHeroView.metricValue}
                              </p>
                            </div>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                              {activeHeroView.metricChange}
                            </span>
                          </div>

                          <div className="mt-6 grid grid-cols-4 items-end gap-3">
                            {activeHeroView.bars.map((bar, index) => (
                              <div key={bar.label} className="space-y-2 text-center">
                                <div className="flex h-28 items-end justify-center">
                                  <div
                                    className={`w-full rounded-t-2xl ${
                                      index === activeHeroView.bars.length - 1
                                        ? 'bg-gradient-to-t from-sky-600 to-sky-300'
                                        : 'bg-gradient-to-t from-sky-200 to-sky-100'
                                    }`}
                                    style={{
                                      height: `${(bar.value / heroBarsMax) * 100}%`,
                                    }}
                                  />
                                </div>
                                <p className="text-xs text-slate-500">{bar.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        {activeHeroView.notes.map((note, index) => (
                          <div
                            key={note}
                            className={`rounded-[1.5rem] border p-4 ${
                              index === 0
                                ? 'border-sky-100 bg-sky-50/70'
                                : 'border-sky-100 bg-white'
                            }`}
                          >
                            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                              Señal {index + 1}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </BrowserFrame>
            </Reveal>
          </div>
        </section>

        <section id="beneficios" className="section-space">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Por qué un sitio web importa"
                title="Tu negocio gana confianza, claridad y oportunidades cuando tiene una web bien hecha."
                description="Un sitio web ayuda a que más personas te encuentren, entiendan tus servicios, confíen en tu marca y te contacten en cualquier momento. Para muchos negocios, la página es la primera impresión real."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefitCards.map((item, index) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.title} delay={index * 0.07}>
                    <article className="glass-panel group h-full rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(91,140,181,0.18)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="analiticas" className="section-space">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Analíticas ilustrativas"
                title="Ejemplos simulados de cómo un negocio con sitio web puede mejorar sus resultados."
                description="Estos gráficos no muestran métricas de Prisma. Representan escenarios simulados de negocios que ya cuentan con un sitio web profesional y cómo eso puede impactar consultas, ventas y fuentes de clientes."
              />
            </Reveal>

            <Reveal delay={0.04}>
              <div className="mt-6 rounded-[1.6rem] border border-sky-100 bg-white/90 px-5 py-4 text-sm leading-7 text-slate-600 shadow-[0_14px_35px_rgba(91,140,181,0.08)]">
                <span className="font-semibold text-slate-900">Importante:</span>{' '}
                estas cifras son ejemplos de resultados para negocios clientes con
                sitio web. No representan estadísticas internas de Prisma.
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.18fr)_minmax(0,0.94fr)] xl:items-stretch">
              <div className="grid gap-6 xl:h-full xl:grid-rows-[auto_1fr]">
                <Reveal>
                  <article className="analytics-card surface-hover">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                        <ChartNoAxesCombined className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                          Negocio del ejemplo
                        </p>
                        <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-2xl">
                          Aumento promedio de consultas mensuales
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Comparación simple y directa para entender qué cambia cuando un
                      negocio suma un sitio web profesional.
                    </p>

                    <div className="mt-6">
                      <ConsultComparisonChart />
                    </div>
                  </article>
                </Reveal>

                <Reveal delay={0.08} className="xl:h-full">
                  <article className="analytics-card surface-hover xl:h-full">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                          Señales rápidas
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-slate-900">
                          Soporte visual compacto
                        </h3>
                      </div>
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        Lectura rápida
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Micrográficos para completar el panorama sin alargar la sección.
                    </p>

                    <div className="mt-4">
                      <CompactInsightCharts />
                    </div>
                  </article>
                </Reveal>
              </div>

              <div className="grid gap-6 xl:h-full xl:grid-rows-[auto_1fr]">
                <Reveal delay={0.06}>
                  <article className="analytics-card surface-hover">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                        <BadgeDollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                          Negocio del ejemplo
                        </p>
                        <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-2xl">
                          Crecimiento estimado en ventas
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Toca cada mes para ver el detalle del escenario. La lectura se
                      mantiene clara y compacta tanto en desktop como en móvil.
                    </p>

                    <div className="mt-6">
                      <RevenueTrendChart />
                    </div>
                  </article>
                </Reveal>

                <Reveal delay={0.11} className="xl:h-full">
                  <article className="analytics-card surface-hover xl:h-full">
                    <HorizontalActionChart />
                  </article>
                </Reveal>
              </div>

              <Reveal delay={0.12} className="xl:h-full">
                <article className="analytics-card surface-hover xl:h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <Search className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                        Negocio del ejemplo
                      </p>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-2xl">
                        Fuentes de clientes
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Reparto visual simplificado para entender de dónde llegan más
                    consultas en este escenario.
                  </p>

                  <div className="mt-6">
                    <SourceMixChart />
                  </div>
                </article>
              </Reveal>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Datos ilustrativos basados en ejemplos simulados. Los resultados
              pueden variar según cada negocio.
            </p>
          </div>
        </section>

        <section id="portafolio" className="section-space">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Portafolio"
                title="Ejemplos de sitios que Prisma podría presentar a negocios reales."
                description="Estos ejemplos muestran el tipo de estructura, claridad y presentación que Prisma puede construir para distintos sectores."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <Reveal key={item.business} delay={index * 0.08}>
                  <article className="glass-panel rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(91,140,181,0.18)]">
                    <BrowserFrame
                      title={`${item.business.toLowerCase().replace(/\s+/g, '-')}.site`}
                      badge={item.type}
                    >
                      <PortfolioPreview
                        business={item.business}
                        accent={item.accent}
                        sections={item.sections}
                      />
                    </BrowserFrame>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                          {item.type}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {item.business}
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
                        {item.stat}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="section-space">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Proceso Prisma"
                title="Un flujo simple, claro y colaborativo para llegar a un sitio listo para publicar."
                description="Trabajamos por etapas para que el resultado final no solo se vea bien, sino que también comunique tu negocio con claridad y convierta mejor."
                align="center"
              />
            </Reveal>

            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent lg:block" />
              <div className="grid gap-6 lg:grid-cols-4">
                {processSteps.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article className="glass-panel relative h-full rounded-[2rem] p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-display font-semibold text-white">
                        0{index + 1}
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="section-shell">
            <Reveal>
              <div className="glass-panel rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(240,249,255,0.92),rgba(255,255,255,0.96))] px-6 py-10 text-center shadow-[0_20px_55px_rgba(91,140,181,0.14)] sm:px-10 sm:py-12">
                <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 uppercase">
                  Siguiente paso
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                  ¿Quieres hablar con Prisma y pedir tu sitio web?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Ve directo al contacto de la página de producto para enviarnos tu
                  solicitud y empezar con una propuesta para tu negocio.
                </p>

                <div className="mt-8 flex justify-center">
                  <a href="./paquetes.html#contacto" className={primaryButtonClass}>
                    Contactarnos
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: 'Inicio', href: '#inicio' },
          { label: 'Beneficios', href: '#beneficios' },
          { label: 'Portafolio', href: '#portafolio' },
          { label: 'Producto', href: './paquetes.html' },
        ]}
      />
    </div>
  )
}
