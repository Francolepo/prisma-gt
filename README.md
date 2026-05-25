# Prisma

Sitio web para Prisma, un negocio de creacion de sitios web profesionales para otras empresas.

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Paginas

- `index.html` - pagina principal
- `paquetes.html` - pagina de producto, planes y contacto

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

El build final se genera en `dist/`.

## Publicacion en Cloudflare Pages

Configuracion recomendada:

- Build command: `npm run build`
- Output directory: `dist`
- Branch: `main`

## Formulario de contacto por correo

La pagina de producto ahora envia las solicitudes a traves de una Cloudflare Pages Function en `functions/api/contact.ts`.

### Variables necesarias en Cloudflare Pages

En `Settings -> Variables and Secrets`, agrega:

- `RESEND_API_KEY` - tu API key de Resend
- `PRISMA_CONTACT_EMAIL` - correo que recibira las solicitudes, por ejemplo `prisma.gt@outlook.com`
- `PRISMA_FROM_EMAIL` - remitente para Resend. Para pruebas puedes usar `Prisma <onboarding@resend.dev>`. Para uso publico conviene cambiarlo a un correo de un dominio verificado en Resend.

### Flujo actual

- El formulario envia nombre, correo, negocio, tipo, presupuesto, mensaje y plan seleccionado
- La funcion llama a la API de Resend
- Las respuestas llegan al correo configurado en `PRISMA_CONTACT_EMAIL`
- El correo del cliente se usa como `reply_to` para que puedas responder directo
