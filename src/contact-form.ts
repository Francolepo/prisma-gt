export type ContactSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export type ContactSubmissionState = {
  status: ContactSubmissionStatus
  message: string
}

export const defaultContactSubmissionState: ContactSubmissionState = {
  status: 'idle',
  message: '',
}

type ContactRequestMetadata = {
  packageName: string
  packagePrice: string
  recommendedFor: string
}

type ContactRequestPayload = {
  name: string
  email: string
  businessName: string
  businessType: string
  customBusinessType: string
  budget: string
  message: string
  packageName: string
  packagePrice: string
  recommendedFor: string
}

function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

async function parseResponseMessage(response: Response) {
  try {
    const data = (await response.json()) as { message?: string }
    return data.message
  } catch {
    return undefined
  }
}

export async function submitContactForm(
  form: HTMLFormElement,
  metadata: ContactRequestMetadata,
): Promise<ContactSubmissionState> {
  const formData = new FormData(form)

  const payload: ContactRequestPayload = {
    name: readFormValue(formData, 'nombre'),
    email: readFormValue(formData, 'correo'),
    businessName: readFormValue(formData, 'negocio'),
    businessType: readFormValue(formData, 'tipo'),
    customBusinessType: readFormValue(formData, 'tipoOtro'),
    budget: readFormValue(formData, 'presupuesto'),
    message: readFormValue(formData, 'mensaje'),
    packageName: metadata.packageName,
    packagePrice: metadata.packagePrice,
    recommendedFor: metadata.recommendedFor,
  }

  if (payload.businessType === 'Otro' && payload.customBusinessType) {
    payload.businessType = payload.customBusinessType
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const responseMessage = await parseResponseMessage(response)

    if (!response.ok) {
      return {
        status: 'error',
        message:
          responseMessage ??
          'No se pudo enviar la solicitud. Intenta otra vez en unos segundos.',
      }
    }

    return {
      status: 'success',
      message:
        responseMessage ??
        'Solicitud enviada. Prisma te responderá pronto por correo.',
    }
  } catch {
    return {
      status: 'error',
      message:
        'No se pudo conectar con el formulario. Revisa tu conexión e inténtalo de nuevo.',
    }
  }
}
