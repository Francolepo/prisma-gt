import { useDeferredValue, useMemo, useState, startTransition } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Layers3, MessageCircle, MonitorSmartphone, MoveRight } from 'lucide-react'
import { BrowserFrame } from './components/BrowserFrame'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { businessOptions, packageCards, type BusinessKey } from './data'
import {
  businessPackageGuide,
  Field,
  type PackageName,
  primaryButtonClass,
  secondaryButtonClass,
  SiteFooter,
  SiteHeader,
} from './site-shared'

const businessKeys = Object.keys(businessOptions) as BusinessKey[]

export default function ProductPage() {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessKey>('restaurante')
  const [selectedPackageName, setSelectedPackageName] = useState<PackageName>(
    businessPackageGuide.restaurante.packageName,
  )
  const [formSubmitted, setFormSubmitted] = useState(false)

  const deferredBusiness = useDeferredValue(selectedBusiness)
  const activeBusiness = useMemo(
    () => businessOptions[deferredBusiness],
    [deferredBusiness],
  )
  const selectedPackage = useMemo(
    () => packageCards.find((item) => item.name === selectedPackageName)!,
    [selectedPackageName],
  )
  const suggestedPackage = useMemo(
    () =>
      packageCards.find(
        (item) => item.name === businessPackageGuide[deferredBusiness].packageName,
      )!,
    [deferredBusiness],
  )

  const handleBusinessChange = (key: BusinessKey) => {
    startTransition(() => {
      setSelectedBusiness(key)
      setSelectedPackageName(businessPackageGuide[key].packageName)
    })
  }

  const handlePackageSelect = (name: PackageName) => {
    startTransition(() => {
      setSelectedPackageName(name)
    })
  }

  const handlePackageCardKeyDown =
    (name: PackageName) => (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handlePackageSelect(name)
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    setFormSubmitted(true)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.5),transparent_38%),radial-gradient(circle_at_top_right,rgba(224,242,254,0.9),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.86))]" />

      <SiteHeader
        brandHref="./index.html#inicio"
        navItems={[
          { label: 'Inicio', href: './index.html#inicio' },
          { label: 'Recomendador', href: '#recomendador' },
          { label: 'Planes', href: '#paquetes' },
          { label: 'Contacto', href: '#contacto' },
        ]}
        ctaHref="#contacto"
        ctaLabel="Solicitar propuesta"
      />

      <main>
        <section id="inicio" className="relative pb-16 pt-10 sm:pb-20 lg:pb-24">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <p className="section-label">Página de producto</p>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[4.35rem] lg:leading-[0.98]">
                Planes, recomendación y contacto en una página completamente separada.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Aquí vive toda la parte comercial de Prisma: el recomendador por tipo
                de negocio, los planes, el contacto y WhatsApp. La portada ya no
                mezcla este flujo.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#recomendador" className={primaryButtonClass}>
                  Abrir recomendador
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#paquetes" className={secondaryButtonClass}>
                  Comparar planes
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="recomendador" className="section-space">
          <div className="section-shell">
            <Reveal>
              <div className="glass-panel overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,249,255,0.92))] p-6 shadow-[0_24px_70px_rgba(91,140,181,0.14)] sm:p-8 lg:p-10">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
                  <div>
                    <SectionHeading
                      eyebrow="Recomendación guiada"
                      title="Selecciona tu tipo de negocio y descubre qué plan suele encajar mejor."
                      description="Esta orientación ya no aparece en el home. Vive aquí, dentro de la página de producto, junto con el resto del flujo comercial."
                    />

                    <div className="mt-8 flex flex-wrap gap-3">
                      {businessKeys.map((key) => {
                        const option = businessOptions[key]
                        const Icon = option.icon
                        const isActive = key === selectedBusiness

                        return (
                          <button
                            key={key}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => handleBusinessChange(key)}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                              isActive
                                ? 'border-slate-950 bg-slate-950 text-white shadow-[0_16px_35px_rgba(14,24,39,0.2)]'
                                : 'border-sky-100 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700'
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            {option.label}
                          </button>
                        )
                      })}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={deferredBusiness}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                        className="mt-8 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)]"
                      >
                        <div
                          className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase"
                          style={{
                            borderColor: `${activeBusiness.accent}30`,
                            color: activeBusiness.accent,
                            backgroundColor: `${activeBusiness.accent}12`,
                          }}
                        >
                          {activeBusiness.label}
                        </div>
                        <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                          {activeBusiness.hero}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {businessPackageGuide[deferredBusiness].summary}
                        </p>

                        <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50/60 px-4 py-4 text-sm leading-7 text-slate-600">
                          {businessPackageGuide[deferredBusiness].note}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="lg:pl-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={deferredBusiness}
                        initial={{ opacity: 0, scale: 0.98, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -16 }}
                        transition={{ duration: 0.28 }}
                      >
                        <BrowserFrame
                          title={`${activeBusiness.label.toLowerCase()}.prisma`}
                          badge="Orientación rápida"
                        >
                          <div
                            className="rounded-[1.85rem] p-5"
                            style={{ background: activeBusiness.softAccent }}
                          >
                            <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                              <div className="rounded-[1.5rem] bg-white/78 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                                <p
                                  className="text-xs font-semibold tracking-[0.16em] uppercase"
                                  style={{ color: activeBusiness.accent }}
                                >
                                  Secciones más comunes
                                </p>
                                <div className="mt-4 space-y-3">
                                  {activeBusiness.sections.map((section, index) => (
                                    <div
                                      key={section}
                                      className="flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-slate-700"
                                    >
                                      <span>{section}</span>
                                      <span className="text-xs text-slate-400">
                                        0{index + 1}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="rounded-[1.5rem] border border-white/70 bg-white/76 p-5">
                                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                                  Plan sugerido
                                </p>
                                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                                  {suggestedPackage.name}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                  Prisma suele recomendar este nivel para un negocio
                                  como {activeBusiness.label.toLowerCase()}.
                                </p>
                                <div className="mt-5 rounded-[1.2rem] border border-sky-100 bg-white/90 px-4 py-3 text-xs font-semibold tracking-[0.16em] text-sky-700 uppercase">
                                  Sigue al bloque de planes para ver precio y contacto
                                </div>
                                <a href="#paquetes" className={`${primaryButtonClass} mt-6 w-full`}>
                                  Ver plan recomendado
                                </a>
                              </div>
                            </div>
                          </div>
                        </BrowserFrame>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="paquetes" className="section-space">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Planes Prisma"
                title="Elige el paquete que mejor se ajusta a tu negocio."
                description="Los planes, el selector y el contacto están concentrados aquí para que la decisión y la solicitud ocurran en una sola página."
                align="center"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-4">
              {packageCards.map((item, index) => {
                const isSelected = item.name === selectedPackage.name
                const isFeatured = item.featured

                return (
                  <Reveal key={item.name} delay={index * 0.06}>
                    <article
                      tabIndex={0}
                      role="button"
                      aria-pressed={isSelected}
                      onMouseEnter={() => handlePackageSelect(item.name)}
                      onFocus={() => handlePackageSelect(item.name)}
                      onClick={() => handlePackageSelect(item.name)}
                      onKeyDown={handlePackageCardKeyDown(item.name)}
                      className={`relative flex h-full cursor-pointer flex-col rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)] transition duration-300 hover:-translate-y-1 ${
                        isFeatured
                          ? 'border-slate-900 bg-slate-950 text-white'
                          : 'border-white/70 bg-white/85 backdrop-blur-xl'
                      } ${
                        isSelected
                          ? isFeatured
                            ? 'ring-4 ring-sky-200/55'
                            : 'border-sky-300 ring-4 ring-sky-100'
                          : ''
                      }`}
                    >
                      {isFeatured ? (
                        <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-sky-300 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-950 uppercase">
                          Más popular
                        </div>
                      ) : null}

                      {isSelected ? (
                        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
                          Seleccionado
                        </div>
                      ) : null}

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className={`text-xs font-semibold tracking-[0.16em] uppercase ${
                                isFeatured ? 'text-sky-200' : 'text-slate-500'
                              }`}
                            >
                              {item.name}
                            </p>
                            <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em]">
                              {item.price}
                            </p>
                          </div>
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                              isFeatured
                                ? 'bg-white/10 text-sky-200'
                                : 'bg-sky-100 text-sky-700'
                            }`}
                          >
                            <Layers3 className="h-5 w-5" />
                          </div>
                        </div>

                        <p
                          className={`mt-5 text-sm leading-7 ${
                            isFeatured ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {item.description}
                        </p>

                        <div className="mt-6 space-y-3">
                          {item.features.slice(0, 4).map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
                                  isFeatured
                                    ? 'bg-white/10 text-sky-200'
                                    : 'bg-sky-100 text-sky-700'
                                }`}
                              >
                                <Check className="h-4 w-4" />
                              </span>
                              <span
                                className={`text-sm leading-7 ${
                                  isFeatured ? 'text-slate-200' : 'text-slate-700'
                                }`}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="#contacto"
                        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300 ${
                          isFeatured
                            ? 'bg-white text-slate-950 hover:bg-sky-100'
                            : 'bg-slate-950 text-white hover:bg-sky-700'
                        }`}
                      >
                        Solicitar este plan
                        <MoveRight className="h-4 w-4" />
                      </a>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-space pt-10">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/88 shadow-[0_26px_80px_rgba(91,140,181,0.16)] backdrop-blur-xl">
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="bg-[linear-gradient(160deg,rgba(224,242,254,0.86),rgba(255,255,255,0.96))] p-6 sm:p-8 lg:p-10">
                    <SectionHeading
                      eyebrow="Contacto"
                      title="Cuéntanos tu negocio y preparamos una propuesta clara para tu nuevo sitio."
                      description="Si ya sabes lo que necesitas o quieres orientación para elegir el paquete correcto, Prisma puede ayudarte a definir la mejor opción."
                    />

                    <div className="mt-6 inline-flex rounded-full border border-sky-100 bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-sky-700 uppercase">
                      Plan seleccionado: {selectedPackage.name} · {selectedPackage.price}
                    </div>

                    <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(91,140,181,0.12)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <MonitorSmartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                            Respuesta ágil
                          </p>
                          <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                            Hablar por WhatsApp
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        Ideal para una primera conversación rápida sobre tiempos,
                        estilo visual, contenido y el paquete más conveniente.
                      </p>
                      <a
                        href="https://wa.me/50235656717?text=Hola%20Prisma%2C%20quiero%20informacion%20sobre%20mi%20sitio%20web."
                        target="_blank"
                        rel="noreferrer"
                        className={`${primaryButtonClass} mt-6 w-full sm:w-auto`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Hablar por WhatsApp
                      </a>
                      <p className="mt-4 text-xs leading-6 text-slate-500">
                        WhatsApp oficial de Prisma: +502 35656717.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <form className="grid gap-5" onSubmit={handleSubmit}>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Nombre">
                          <input
                            type="text"
                            name="nombre"
                            placeholder="Tu nombre"
                            required
                          />
                        </Field>
                        <Field label="Nombre del negocio">
                          <input
                            type="text"
                            name="negocio"
                            placeholder="Ej. Clínica Horizonte"
                            required
                          />
                        </Field>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Tipo de negocio">
                          <select name="tipo" defaultValue="" required>
                            <option value="" disabled>
                              Selecciona una opción
                            </option>
                            <option>Restaurante</option>
                            <option>Barbería</option>
                            <option>Gimnasio</option>
                            <option>Tienda</option>
                            <option>Clínica</option>
                            <option>Otro</option>
                          </select>
                        </Field>
                        <Field label="Presupuesto aproximado">
                          <select name="presupuesto" defaultValue="" required>
                            <option value="" disabled>
                              Selecciona un rango
                            </option>
                            <option>Q500 a Q1,000</option>
                            <option>Q1,000 a Q2,500</option>
                            <option>Q2,500 en adelante</option>
                            <option>Necesito una cotización personalizada</option>
                          </select>
                        </Field>
                      </div>

                      <Field label="Mensaje">
                        <textarea
                          name="mensaje"
                          rows={6}
                          placeholder="Cuéntanos qué necesitas mostrar, qué estilo buscas y si ya tienes contenido o referencias."
                          required
                        />
                      </Field>

                      <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/60 px-4 py-4 text-sm leading-7 text-slate-600">
                        Pista útil: esta página ya está preparada para solicitar{' '}
                        <span className="font-semibold text-slate-900">
                          {selectedPackage.name}
                        </span>{' '}
                        con una inversión base de{' '}
                        <span className="font-semibold text-slate-900">
                          {selectedPackage.price}
                        </span>
                        .
                      </div>

                      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <button type="submit" className={primaryButtonClass}>
                          Enviar solicitud
                          <ArrowRight className="h-4 w-4" />
                        </button>

                        <AnimatePresence>
                          {formSubmitted ? (
                            <motion.p
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="text-sm font-medium text-emerald-600"
                            >
                              Solicitud registrada. Prisma puede responder con una
                              propuesta inicial en menos de 24 horas.
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: 'Inicio', href: './index.html#inicio' },
          { label: 'Recomendador', href: '#recomendador' },
          { label: 'Planes', href: '#paquetes' },
          { label: 'Contacto', href: '#contacto' },
        ]}
      />
    </div>
  )
}
