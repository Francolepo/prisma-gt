interface ContactRequestPayload {
  name?: string
  email?: string
  businessName?: string
  businessType?: string
  budget?: string
  message?: string
  packageName?: string
  packagePrice?: string
  recommendedFor?: string
}

interface Env {
  RESEND_API_KEY?: string
  PRISMA_CONTACT_EMAIL?: string
  PRISMA_FROM_EMAIL?: string
}

interface PagesContext {
  request: Request
  env: Env
}

const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function jsonResponse(body: { message: string }, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  })
}

function normalize(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function onRequestPost({ request, env }: PagesContext) {
  if (!env.RESEND_API_KEY) {
    return jsonResponse(
      {
        message:
          'El formulario aún no está configurado. Agrega RESEND_API_KEY en Cloudflare Pages.',
      },
      500,
    )
  }

  let payload: ContactRequestPayload

  try {
    payload = (await request.json()) as ContactRequestPayload
  } catch {
    return jsonResponse(
      {
        message: 'No se pudo leer la solicitud enviada desde el formulario.',
      },
      400,
    )
  }

  const name = normalize(payload.name)
  const email = normalize(payload.email)
  const businessName = normalize(payload.businessName)
  const businessType = normalize(payload.businessType)
  const budget = normalize(payload.budget)
  const message = normalize(payload.message)
  const packageName = normalize(payload.packageName)
  const packagePrice = normalize(payload.packagePrice)
  const recommendedFor = normalize(payload.recommendedFor)

  if (!name || !email || !businessName || !businessType || !budget || !message) {
    return jsonResponse(
      {
        message: 'Completa todos los campos antes de enviar la solicitud.',
      },
      400,
    )
  }

  if (!emailPattern.test(email)) {
    return jsonResponse(
      {
        message: 'Ingresa un correo de contacto válido para poder responderte.',
      },
      400,
    )
  }

  const to = env.PRISMA_CONTACT_EMAIL ?? 'prisma.gt@outlook.com'
  const from = env.PRISMA_FROM_EMAIL ?? 'Prisma <onboarding@resend.dev>'
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nueva solicitud Prisma · ${businessName}`,
      text: [
        'Nueva solicitud desde Prisma',
        '',
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Negocio: ${businessName}`,
        `Tipo de negocio: ${businessType}`,
        `Presupuesto: ${budget}`,
        `Plan seleccionado: ${packageName || 'Sin plan'}`,
        `Precio base: ${packagePrice || 'Sin precio'}`,
        `Tipo elegido en recomendador: ${recommendedFor || 'No especificado'}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 16px">Nueva solicitud desde Prisma</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
          <p><strong>Negocio:</strong> ${escapeHtml(businessName)}</p>
          <p><strong>Tipo de negocio:</strong> ${escapeHtml(businessType)}</p>
          <p><strong>Presupuesto:</strong> ${escapeHtml(budget)}</p>
          <p><strong>Plan seleccionado:</strong> ${escapeHtml(packageName || 'Sin plan')}</p>
          <p><strong>Precio base:</strong> ${escapeHtml(packagePrice || 'Sin precio')}</p>
          <p><strong>Tipo elegido en recomendador:</strong> ${escapeHtml(
            recommendedFor || 'No especificado',
          )}</p>
          <p><strong>Mensaje:</strong><br />${safeMessage}</p>
        </div>
      `,
    }),
  })

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text()
    console.error('Resend contact delivery failed', errorBody)

    return jsonResponse(
      {
        message:
          'No se pudo entregar la solicitud por correo en este momento. Intenta otra vez en unos segundos.',
      },
      502,
    )
  }

  return jsonResponse({
    message:
      'Solicitud enviada. Prisma la recibió y puede responderte al correo que dejaste.',
  })
}
