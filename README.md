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
