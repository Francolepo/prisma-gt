import { useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import prismaAvatar from './assets/brand/prisma-avatar.png'
import prismaWordmark from './assets/brand/prisma-wordmark.png'
import { packageCards, type BusinessKey } from './data'

export const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'

export const secondaryButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/85 px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'

export const heroHighlights = [
  'Diseño a medida para negocios',
  'Sitios listos para móvil',
  'SEO básico y formularios',
]

export type HeroViewKey = 'sitio' | 'movil' | 'impacto'
export type PackageName = (typeof packageCards)[number]['name']

export const heroViews: Record<
  HeroViewKey,
  {
    label: string
    eyebrow: string
    title: string
    description: string
    chips: string[]
    metricLabel: string
    metricValue: string
    metricChange: string
    bars: { label: string; value: number }[]
    notes: string[]
  }
> = {
  sitio: {
    label: 'Sitio',
    eyebrow: 'Inicio / Servicios',
    title: 'Diseño web pensado para atraer clientes y verse profesional.',
    description:
      'Una estructura clara ayuda a explicar servicios, reforzar confianza y convertir visitas en mensajes.',
    chips: ['Adaptado a móvil', 'SEO básico', 'Formulario', 'Mensaje directo'],
    metricLabel: 'Consultas mensuales',
    metricValue: '64',
    metricChange: '+255%',
    bars: [
      { label: 'M1', value: 18 },
      { label: 'M2', value: 24 },
      { label: 'M3', value: 38 },
      { label: 'M4', value: 64 },
    ],
    notes: ['Más confianza', 'Más visibilidad', 'Contacto directo'],
  },
  movil: {
    label: 'Móvil',
    eyebrow: 'Versión / Móvil',
    title: 'Todo claro desde el celular, donde llegan muchas de las primeras consultas.',
    description:
      'Botones grandes, textos legibles y acciones rápidas hacen que la visita móvil convierta mejor.',
    chips: ['Carga ligera', 'Botón de llamada', 'Mapa', 'Acción rápida'],
    metricLabel: 'Interacciones móviles',
    metricValue: '78%',
    metricChange: '+31%',
    bars: [
      { label: 'Tap', value: 42 },
      { label: 'Chat', value: 58 },
      { label: 'Mapa', value: 69 },
      { label: 'Reserva', value: 78 },
    ],
    notes: ['Acciones visibles', 'Reserva rápida', 'Lectura sin fricción'],
  },
  impacto: {
    label: 'Impacto',
    eyebrow: 'Panel / Resultados',
    title: 'La web se convierte en un canal activo para captar oportunidades todos los días.',
    description:
      'Cuando el sitio ordena el mensaje correcto, aparecen más consultas desde búsqueda, formularios y búsqueda local.',
    chips: ['Canal 24/7', 'Google', 'Medición clara', 'Seguimiento'],
    metricLabel: 'Canales activos',
    metricValue: '4',
    metricChange: '+2 nuevos',
    bars: [
      { label: 'SEO', value: 28 },
      { label: 'Redes', value: 36 },
      { label: 'Mensajes', value: 52 },
      { label: 'Form', value: 61 },
    ],
    notes: ['Más intención', 'Seguimiento simple', 'Mejor conversión'],
  },
}

export const consultData = [
  {
    label: 'Negocio sin sitio web',
    value: 18,
    color: 'from-slate-300 to-slate-400',
    detail:
      'En este ejemplo, el negocio depende mucho de referidos y redes sociales. También transmite menos claridad cuando alguien busca más información.',
  },
  {
    label: 'Negocio con sitio web',
    value: 64,
    color: 'from-sky-400 to-sky-600',
    detail:
      'En este ejemplo, el sitio web suma búsquedas, mensajes directos y formularios. También mejora la confianza antes del primer contacto.',
  },
] as const

export const salesData = [
  {
    label: 'Mes 1',
    value: 4500,
    context:
      'Ejemplo de un negocio con sitio web nuevo: empiezan a llegar consultas mejor dirigidas y más fáciles de convertir.',
  },
  {
    label: 'Mes 2',
    value: 6200,
    context:
      'El negocio del ejemplo recibe más visitas que entienden mejor sus servicios y encuentran canales directos para contactar.',
  },
  {
    label: 'Mes 3',
    value: 8900,
    context:
      'El sitio del ejemplo empieza a convertir mejor desde formularios, mensajes y búsquedas locales.',
  },
  {
    label: 'Mes 4',
    value: 11400,
    context:
      'En este escenario, el sitio ya funciona como una parte estable del proceso comercial del negocio.',
  },
] as const

export const sourceData = [
  {
    label: 'Sitio web',
    value: 45,
    color: '#0ea5e9',
    detail:
      'En el negocio del ejemplo, la web concentra la mayor intención porque explica servicios, resuelve dudas y da un siguiente paso inmediato.',
  },
  {
    label: 'Redes sociales',
    value: 30,
    color: '#38bdf8',
    detail:
      'Las redes ayudan a descubrir la marca, pero la web del negocio del ejemplo termina de ordenar la decisión y generar confianza.',
  },
  {
    label: 'Referidos',
    value: 15,
    color: '#7dd3fc',
    detail:
      'Un referido convierte mejor cuando encuentra una página clara del negocio que refuerza lo que le recomendaron.',
  },
  {
    label: 'Otros',
    value: 10,
    color: '#cbd5e1',
    detail:
      'Directorios, búsquedas indirectas o campañas locales también pueden rendir más cuando el negocio tiene una web bien preparada.',
  },
] as const

const contactChannelData = [
  { label: 'WhatsApp', value: 42, color: 'from-sky-500 to-sky-600' },
  { label: 'Formulario', value: 34, color: 'from-sky-300 to-sky-500' },
  { label: 'Llamadas', value: 24, color: 'from-slate-300 to-slate-400' },
] as const

const leadQualityData = [
  { label: 'Búsqueda local', value: 82 },
  { label: 'WhatsApp directo', value: 76 },
  { label: 'Formulario', value: 68 },
] as const

const weeklyPulseData = [
  { label: 'S1', value: 11 },
  { label: 'S2', value: 14 },
  { label: 'S3', value: 17 },
  { label: 'S4', value: 21 },
] as const

const siteActionData = [
  { label: 'Botón de WhatsApp', value: 84, color: 'from-sky-600 to-sky-400' },
  { label: 'Ver servicios', value: 71, color: 'from-sky-500 to-sky-300' },
  { label: 'Ubicación / mapa', value: 58, color: 'from-sky-300 to-sky-200' },
  { label: 'Formulario', value: 46, color: 'from-slate-300 to-slate-400' },
] as const

export const businessPackageGuide: Record<
  BusinessKey,
  {
    packageName: PackageName
    summary: string
    note: string
  }
> = {
  restaurante: {
    packageName: 'Profesional',
    summary:
      'Suele encajar bien cuando el negocio necesita menú, galería, ubicación, horarios y pedidos por mensaje en una presentación sólida.',
    note:
      'Si el flujo requiere reservas avanzadas, varias sedes o una carta más amplia, normalmente conviene escalar a Premium.',
  },
  barberia: {
    packageName: 'Inicio',
    summary:
      'Es una base muy útil para barberías que quieren mostrar servicios, precios, ubicación y una vía rápida de contacto.',
    note:
      'Si buscas una presencia más completa, más secciones o mejor posicionamiento local, el siguiente paso natural es Profesional.',
  },
  gimnasio: {
    packageName: 'Premium',
    summary:
      'Funciona muy bien cuando necesitas explicar planes, clases, entrenadores, resultados y generar confianza con más profundidad.',
    note:
      'Cuando además habrá flujos especiales o automatizaciones, Personalizado puede ser el mejor camino.',
  },
  tienda: {
    packageName: 'Personalizado',
    summary:
      'Es la recomendación más segura cuando la tienda puede crecer hacia catálogo amplio, pedidos especiales o integraciones más avanzadas.',
    note:
      'Si solo necesitas una vitrina simple sin funciones extra, Prisma puede orientarte hacia un alcance más ligero dentro de la página de producto.',
  },
  clinica: {
    packageName: 'Premium',
    summary:
      'Normalmente es la mejor opción para clínicas que necesitan servicios, equipo, testimonios, confianza visual y solicitud de citas clara.',
    note:
      'Si el proyecto incluye reservas complejas o integraciones especiales, conviene revisar una propuesta personalizada.',
  },
}

export type NavLink = {
  label: string
  href: string
}

export function SiteHeader({
  navItems,
  ctaHref,
  ctaLabel,
  brandHref,
}: {
  navItems: NavLink[]
  ctaHref: string
  ctaLabel: string
  brandHref: string
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="section-shell pt-4">
        <div className="glass-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 shadow-[0_20px_60px_rgba(91,140,181,0.14)]">
          <a
            href={brandHref}
            className="flex shrink-0 items-center"
            aria-label="Prisma"
          >
            <img
              src={prismaWordmark}
              alt="Prisma"
              width={663}
              height={223}
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={ctaHref} className={primaryButtonClass}>
              {ctaLabel}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white/90 text-slate-700 md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="section-shell md:hidden"
          >
            <div className="glass-panel mt-3 rounded-[1.75rem] p-5 shadow-[0_22px_60px_rgba(91,140,181,0.16)]">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-sky-100 px-4 py-3 text-sm font-medium text-slate-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                ))}
                <a
                  href={ctaHref}
                  className={primaryButtonClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export function SiteFooter({ links }: { links: NavLink[] }) {
  return (
    <footer className="pb-10 pt-6">
      <div className="section-shell">
        <div className="rounded-[2.25rem] bg-slate-950 px-6 py-8 text-slate-200 shadow-[0_28px_80px_rgba(14,24,39,0.22)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_18px_45px_rgba(2,12,27,0.18)] backdrop-blur-sm">
                <div className="rounded-[1.35rem] bg-white/95 p-2 shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
                  <img
                    src={prismaAvatar}
                    alt="Isotipo Prisma"
                    width={454}
                    height={459}
                    className="h-14 w-14 rounded-[1rem] object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-sky-200 uppercase">
                    Identidad Prisma
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Marca visual lista para web, redes y una presencia más
                    profesional desde el primer vistazo.
                  </p>
                </div>
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                Sitios web modernos para negocios que quieren crecer.
              </p>
            </div>

            <div className="flex w-full flex-col gap-5 lg:max-w-sm lg:self-stretch lg:items-end lg:justify-between">
              <div className="w-full rounded-[1.6rem] border border-white/10 bg-white/[0.06] px-4 py-4 shadow-[0_18px_45px_rgba(2,12,27,0.16)] backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.18em] text-sky-200 uppercase">
                  Prisma activo
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.45)]" />
                  <p className="text-sm font-semibold text-white">
                    Disponible para nuevos proyectos
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[1rem] bg-white/[0.05] px-3 py-3">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Respuesta
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      24 horas
                    </p>
                  </div>
                  <div className="rounded-[1rem] bg-white/[0.05] px-3 py-3">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                      Modalidad
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      Guatemala y remoto
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-300 lg:justify-end">
                  {links.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-sky-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="text-sm text-slate-300 lg:text-right">
                  <p className="font-medium text-slate-200">Contáctanos por correo</p>
                  <a
                    href="mailto:prisma.gt@outlook.com"
                    className="mt-1 inline-flex font-semibold text-sky-200 transition hover:text-white"
                  >
                    prisma.gt@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Prisma. Todos los derechos reservados.</p>
            <p>Hecho para verse profesional, claro y listo para convertir.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  )
}

export function PortfolioPreview({
  business,
  accent,
  sections,
}: {
  business: string
  accent: string
  sections: string[]
}) {
  return (
    <div className="rounded-[1.8rem] p-5" style={{ background: accent }}>
      <div className="rounded-[1.4rem] bg-white/82 p-5">
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Inicio / {business}
        </p>
        <h4 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950">
          Una presencia clara, visual y lista para generar confianza.
        </h4>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section}
              className="rounded-[1.2rem] bg-white/90 px-4 py-3 text-sm font-medium text-slate-700"
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatCurrency(value: number) {
  return `Q${value.toLocaleString('es-GT')}`
}

type ConsultLabel = (typeof consultData)[number]['label']
type SourceLabel = (typeof sourceData)[number]['label']

export function CompactInsightCharts() {
  const mobileShare = 78
  const weeklyMax = Math.max(...weeklyPulseData.map((item) => item.value))
  const qualityMax = 100

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.45rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(240,249,255,0.92),rgba(255,255,255,0.98))] p-4"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Desde móvil
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              La mayoría llega desde celular
            </p>
          </div>

          <div className="relative flex h-16 w-16 items-center justify-center">
            <svg viewBox="0 0 72 72" className="h-16 w-16 -rotate-90">
              <circle cx="36" cy="36" r="27" fill="none" stroke="#dbeafe" strokeWidth="8" />
              <motion.circle
                cx="36"
                cy="36"
                r="27"
                fill="none"
                stroke="#0284c7"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 27}
                initial={{ strokeDashoffset: 2 * Math.PI * 27 }}
                whileInView={{
                  strokeDashoffset: 2 * Math.PI * 27 * (1 - mobileShare / 100),
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <span className="absolute font-display text-lg font-semibold tracking-[-0.05em] text-slate-950">
              {mobileShare}%
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 items-end gap-2">
          {weeklyPulseData.map((item, index) => (
            <div key={item.label} className="space-y-1 text-center">
              <div className="flex h-12 items-end justify-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(item.value / weeklyMax) * 100}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full rounded-t-[0.9rem] ${
                    index === weeklyPulseData.length - 1
                      ? 'bg-gradient-to-t from-sky-600 to-sky-300'
                      : 'bg-gradient-to-t from-sky-200 to-sky-100'
                  }`}
                />
              </div>
              <p className="text-[11px] font-semibold text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.38, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.45rem] border border-sky-100 bg-white/92 p-4"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Contacto y calidad
        </p>

        <div className="mt-3 space-y-3">
          {contactChannelData.map((item, index) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex items-center justify-between gap-2 text-[13px]">
                <span className="font-semibold text-slate-700">{item.label}</span>
                <span className="font-semibold text-slate-950">{item.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.06 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {leadQualityData.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-slate-500">
                {item.label}
              </span>
              <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900"
                  style={{ width: `${(item.value / qualityMax) * 100}%` }}
                />
              </div>
              <span className="text-[12px] font-semibold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  )
}

export function HorizontalActionChart() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(220px,0.84fr)_minmax(0,1.16fr)] lg:items-center">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Acciones con más intención
        </p>
        <h4 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Qué parte del sitio suele empujar más el contacto
        </h4>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Ejemplo ilustrativo de interacción dentro de una web de negocio ya publicada.
        </p>
      </div>

      <div className="space-y-4">
        {siteActionData.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              <span className="text-sm font-semibold text-slate-950">{item.value}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: 0.04 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ConsultComparisonChart() {
  const [activeLabel, setActiveLabel] = useState<ConsultLabel>(consultData[1].label)
  const baseline = Math.max(...consultData.map((item) => item.value))
  const uplift = consultData[1].value - consultData[0].value
  const activeItem = consultData.find((item) => item.label === activeLabel) ?? consultData[1]

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-slate-600">Consultas mensuales estimadas</p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            +{uplift}
          </p>
        </div>
        <p className="text-sm font-semibold text-emerald-600">
          más consultas con sitio web en este ejemplo
        </p>
      </div>

      <div className="space-y-4">
        {consultData.map((item) => {
          const isActive = item.label === activeItem.label

          return (
          <button
            key={item.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveLabel(item.label)}
            className={`block w-full rounded-[1.35rem] px-3 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
              isActive ? 'bg-sky-50/70' : 'hover:bg-slate-50/70'
            }`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm font-semibold text-slate-800">{item.label}</p>
              <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 tabular-nums">
                {item.value}
              </p>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                style={{ width: `${Math.max((item.value / baseline) * 100, 20)}%` }}
              />
            </div>
          </button>
        )})}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={activeItem.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="text-sm leading-7 text-slate-600"
        >
          {activeItem.detail}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export function RevenueTrendChart() {
  const [activeIndex, setActiveIndex] = useState(salesData.length - 1)
  const maxValue = 12000
  const minValue = 4000
  const width = 420
  const height = 250
  const chartHeight = 150
  const chartBottom = 184
  const offsetX = 54
  const stepX = 104
  const growth = salesData.at(-1)!.value - salesData[0].value

  const points = salesData.map((item, index) => {
    const normalized = (item.value - minValue) / (maxValue - minValue)
    const x = offsetX + stepX * index
    const y = chartBottom - normalized * chartHeight
    return { ...item, x, y }
  })

  const linePath = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')
  const areaPath = `${linePath} L ${points.at(-1)?.x ?? width} ${chartBottom} L ${points[0]?.x ?? 0} ${chartBottom} Z`
  const activePoint = points[activeIndex]
  const activeMonth = salesData[activeIndex]

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-slate-600">Crecimiento estimado en 4 meses</p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            {formatCurrency(growth)}
          </p>
        </div>
        <p className="text-sm font-semibold text-emerald-600">
          de aumento acumulado en este ejemplo
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMonth.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="rounded-[1.35rem] border border-sky-100/80 bg-sky-50/70 px-4 py-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                  Mes activo
                </p>
                <p className="mt-1 font-display text-[1.8rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-3xl">
                  {activeMonth.label}
                </p>
              </div>
              <p className="font-display text-2xl font-semibold tracking-[-0.05em] text-slate-950 tabular-nums">
                {formatCurrency(activeMonth.value)}
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              {activeMonth.context}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(239,249,255,0.8),rgba(255,255,255,0.96))] p-4 sm:p-5">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label="Tendencia ilustrativa de ventas mensuales"
        >
          <defs>
            <linearGradient id="salesAreaClean" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,233,0.26)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.03)" />
            </linearGradient>
            <linearGradient id="salesLineClean" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {[4000, 6000, 8000, 10000, 12000].map((value) => {
            const normalized = (value - minValue) / (maxValue - minValue)
            const y = chartBottom - normalized * chartHeight

            return (
              <g key={value}>
                <line
                  x1={offsetX}
                  x2={offsetX + stepX * 3}
                  y1={y}
                  y2={y}
                  stroke="rgba(148,163,184,0.22)"
                  strokeDasharray="5 6"
                />
                <text
                  x={10}
                  y={y + 4}
                  className="fill-slate-400 text-[11px] font-medium"
                >
                  {formatCurrency(value)}
                </text>
              </g>
            )
          })}

          <path d={areaPath} fill="url(#salesAreaClean)" />
          <path
            d={linePath}
            fill="none"
            stroke="url(#salesLineClean)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((point, index) => {
            const isActive = index === activeIndex

            return (
              <g
                key={point.label}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isActive ? 8 : 6}
                  fill="#ffffff"
                  stroke={isActive ? '#0369a1' : '#0284c7'}
                  strokeWidth={isActive ? '5' : '4'}
                />
                <text
                  x={point.x}
                  y={height - 18}
                  textAnchor="middle"
                  className={`text-[12px] font-medium ${isActive ? 'fill-slate-700' : 'fill-slate-500'}`}
                >
                  {point.label}
                </text>
              </g>
            )
          })}

          <g
            transform={`translate(${activePoint?.x ?? 0}, ${Math.max((activePoint?.y ?? 0) - 20, 24)})`}
          >
            <rect
              x={-44}
              y={-24}
              width={88}
              height={28}
              rx={14}
              fill="#ffffff"
              stroke="rgba(14,165,233,0.25)"
            />
            <text
              x={0}
              y={-6}
              textAnchor="middle"
              className="fill-slate-700 text-[11px] font-semibold"
            >
              {formatCurrency(activePoint?.value ?? 0)}
            </text>
          </g>
        </svg>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Selecciona un mes
        </p>

        <div className="mt-3 grid gap-3 grid-cols-2 sm:grid-cols-4">
          {salesData.map((item, index) => {
            const isActive = activeMonth.label === item.label

            return (
          <button
            key={item.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveIndex(index)}
            className={`rounded-[1.2rem] border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
              isActive
                ? 'border-sky-300 bg-sky-50/80'
                : 'border-sky-100/80 bg-white/85 hover:border-sky-200'
            }`}
          >
            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
            <p className="mt-1 text-xs text-slate-500">
              {isActive ? 'Viendo detalle' : 'Ver detalle'}
            </p>
          </button>
        )})}
        </div>
      </div>
    </div>
  )
}

export function SourceMixChart() {
  const [activeLabel, setActiveLabel] = useState<SourceLabel>(sourceData[0].label)
  const center = 92
  const radius = 58
  const circumference = 2 * Math.PI * radius
  const activeSource = sourceData.find((item) => item.label === activeLabel) ?? sourceData[0]
  let progress = 0

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-slate-600">Origen estimado de consultas</p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
            45%
          </p>
        </div>
        <p className="text-sm font-semibold text-emerald-600">
          del ejemplo llega desde el sitio web
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <svg
            viewBox="0 0 184 184"
            className="h-48 w-48"
            role="img"
            aria-label="Distribución ilustrativa de clientes por canal"
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="24"
            />

            {sourceData.map((item) => {
              const dash = (item.value / 100) * circumference
              const dashOffset = circumference - progress
              const isActive = item.label === activeSource.label
              progress += dash

              return (
                <circle
                  key={item.label}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={isActive ? 28 : 24}
                  strokeDasharray={`${dash} ${circumference}`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${center} ${center})`}
                  opacity={isActive ? 1 : 0.68}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveLabel(item.label)}
                />
              )
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
              {activeSource.label}
            </p>
            <p className="mt-1 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              {activeSource.value}%
            </p>
          </div>
        </div>

        <div className="w-full max-w-md rounded-[1.35rem] border border-sky-100/80 bg-sky-50/60 px-4 py-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
            Canal activo
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{activeSource.label}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{activeSource.detail}</p>
        </div>
      </div>

      <div className="space-y-3">
        {sourceData.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={activeSource.label === item.label}
            onClick={() => setActiveLabel(item.label)}
            className={`flex w-full items-center justify-between gap-4 rounded-[1.2rem] border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
              activeSource.label === item.label
                ? 'border-sky-300 bg-sky-50/80'
                : 'border-sky-100/80 bg-white/85 hover:border-sky-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-slate-950">{item.value}%</span>
          </button>
        ))}
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Toca cada segmento o cada fila para ver qué representa dentro del ejemplo.
      </p>
    </div>
  )
}
