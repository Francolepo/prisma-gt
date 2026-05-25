import type { LucideIcon } from 'lucide-react'
import {
  Clock3,
  Dumbbell,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Users,
} from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export type BenefitCard = {
  title: string
  description: string
  icon: LucideIcon
}

export const benefitCards: BenefitCard[] = [
  {
    title: 'Más confianza',
    description:
      'Un sitio web bien presentado transmite seriedad desde el primer vistazo y ayuda a que tu negocio se vea listo para vender.',
    icon: ShieldCheck,
  },
  {
    title: 'Más clientes',
    description:
      'Tu página puede captar consultas mientras tu negocio sigue operando, con formularios, llamadas a la acción y WhatsApp.',
    icon: Users,
  },
  {
    title: 'Presencia digital 24/7',
    description:
      'Tus servicios, horarios, ubicación y promociones quedan disponibles todo el día para cualquier persona interesada.',
    icon: Clock3,
  },
  {
    title: 'Mejor imagen profesional',
    description:
      'Fotos, textos claros y una estructura moderna hacen que tu marca se perciba más ordenada, actual y confiable.',
    icon: Sparkles,
  },
]

export type PackageCard = {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export const packageCards: PackageCard[] = [
  {
    name: 'Inicio',
    price: 'Q500',
    description:
      'Para negocios pequeños que necesitan una presencia online simple y profesional.',
    features: [
      'Sitio web de una página',
      'Diseño responsive',
      'Información del negocio',
      'Botón de WhatsApp',
      'Entrega rápida',
    ],
  },
  {
    name: 'Profesional',
    price: 'Q1,000',
    description:
      'Para negocios que quieren una web más sólida, completa y pensada para generar más consultas.',
    features: [
      'Hasta 4 secciones',
      'Diseño personalizado',
      'Galería o catálogo básico',
      'Botón de WhatsApp',
      'Optimización básica para Google',
      'Formulario de contacto',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'Q2,500',
    description:
      'Para negocios que quieren una experiencia visual de mayor nivel y más profundidad de contenido.',
    features: [
      'Sitio web completo',
      'Hasta 6 secciones',
      'Diseño premium personalizado',
      'Catálogo avanzado o servicios detallados',
      'Animaciones suaves',
      'Integración con WhatsApp',
      'Formulario de contacto',
      'Sección de testimonios',
      'Optimización SEO básica',
    ],
  },
  {
    name: 'Personalizado',
    price: 'Cotización',
    description:
      'Para negocios con necesidades específicas, flujos más avanzados o funciones fuera de lo estándar.',
    features: [
      'Funciones a medida',
      'Tienda online opcional',
      'Reservas o formularios avanzados',
      'Integraciones especiales',
      'Diseño completamente personalizado',
      'Asesoría directa',
    ],
  },
]

export type BusinessKey =
  | 'restaurante'
  | 'barberia'
  | 'gimnasio'
  | 'tienda'
  | 'clinica'

export type BusinessPreview = {
  label: string
  hero: string
  description: string
  sections: string[]
  cta: string
  accent: string
  softAccent: string
  icon: LucideIcon
}

export const businessOptions: Record<BusinessKey, BusinessPreview> = {
  restaurante: {
    label: 'Restaurante',
    hero: 'Menú, reservas y pedidos por WhatsApp',
    description:
      'Una página clara para mostrar platos, horarios, ubicación y captar pedidos con un flujo simple desde el celular.',
    sections: ['Menú', 'Ubicación', 'Horarios', 'Galería', 'Contacto'],
    cta: 'Quiero mi sitio para restaurante',
    accent: '#0ea5e9',
    softAccent: 'linear-gradient(135deg, rgba(125,211,252,0.32), rgba(239,249,255,0.88))',
    icon: UtensilsCrossed,
  },
  barberia: {
    label: 'Barbería',
    hero: 'Reservas, servicios y estilo profesional',
    description:
      'Ideal para destacar cortes, precios, ubicación y un canal directo de reservas por WhatsApp.',
    sections: ['Servicios', 'Precios', 'Galería', 'Ubicación', 'WhatsApp'],
    cta: 'Quiero mi sitio para barbería',
    accent: '#2563eb',
    softAccent: 'linear-gradient(135deg, rgba(147,197,253,0.35), rgba(239,246,255,0.9))',
    icon: Scissors,
  },
  gimnasio: {
    label: 'Gimnasio',
    hero: 'Clases, membresías y resultados visibles',
    description:
      'Un sitio pensado para presentar entrenadores, planes, horarios y formularios de información.',
    sections: ['Membresías', 'Horarios', 'Entrenadores', 'Testimonios', 'Contacto'],
    cta: 'Quiero mi sitio para gimnasio',
    accent: '#0284c7',
    softAccent: 'linear-gradient(135deg, rgba(186,230,253,0.45), rgba(240,249,255,0.92))',
    icon: Dumbbell,
  },
  tienda: {
    label: 'Tienda',
    hero: 'Productos destacados y consultas listas para vender',
    description:
      'Perfecto para exhibir catálogos, promociones y convertir visitas en mensajes o pedidos concretos.',
    sections: ['Productos', 'Promociones', 'Categorías', 'Ubicación', 'Consulta rápida'],
    cta: 'Quiero mi sitio para tienda',
    accent: '#14b8a6',
    softAccent: 'linear-gradient(135deg, rgba(153,246,228,0.35), rgba(240,253,250,0.92))',
    icon: ShoppingBag,
  },
  clinica: {
    label: 'Clínica',
    hero: 'Servicios, confianza y solicitud de citas online',
    description:
      'Una estructura pensada para presentar especialidades, médicos, horarios y solicitudes de citas de forma ordenada.',
    sections: ['Especialidades', 'Equipo', 'Opiniones', 'Ubicación', 'Solicitud de cita'],
    cta: 'Quiero mi sitio para clínica',
    accent: '#06b6d4',
    softAccent: 'linear-gradient(135deg, rgba(165,243,252,0.35), rgba(236,254,255,0.92))',
    icon: Stethoscope,
  },
}

export const portfolioItems = [
  {
    business: 'Café Aurora',
    type: 'Cafetería',
    description:
      'Sitio web con menú, galería, ubicación y pedidos por WhatsApp para mantener las consultas activas todos los días.',
    stat: '+38% más consultas en el primer mes',
    accent:
      'linear-gradient(135deg, rgba(250,232,210,0.95), rgba(255,255,255,0.92))',
    sections: ['Menú', 'Galería', 'Ubicación', 'WhatsApp'],
  },
  {
    business: 'NovaFit Studio',
    type: 'Gimnasio',
    description:
      'Web con planes, horarios de clases, entrenadores y formulario de contacto para interesados en membresías.',
    stat: '+52% más solicitudes de información',
    accent:
      'linear-gradient(135deg, rgba(191,219,254,0.92), rgba(255,255,255,0.92))',
    sections: ['Membresías', 'Clases', 'Entrenadores', 'Formulario'],
  },
  {
    business: 'Lumina Dental',
    type: 'Clínica dental',
    description:
      'Página con servicios, solicitud de cita, reseñas y ubicación para aumentar la confianza antes del primer contacto.',
    stat: '+41% más reservas online',
    accent:
      'linear-gradient(135deg, rgba(207,250,254,0.94), rgba(255,255,255,0.94))',
    sections: ['Servicios', 'Citas', 'Reseñas', 'Ubicación'],
  },
]

export const processSteps = [
  {
    title: 'Consulta inicial',
    description:
      'Entendemos tu negocio, tus objetivos y lo que necesitas mostrar para convertir visitas en consultas.',
  },
  {
    title: 'Diseño del sitio',
    description:
      'Creamos una propuesta visual clara, profesional y pensada para transmitir confianza en segundos.',
  },
  {
    title: 'Desarrollo y ajustes',
    description:
      'Construimos el sitio, afinamos detalles contigo y dejamos cada sección lista para lanzarse.',
  },
  {
    title: 'Entrega y publicación',
    description:
      'Publicamos tu página y la dejamos preparada para que la compartas, la promociones y empieces a recibir contactos.',
  },
]
