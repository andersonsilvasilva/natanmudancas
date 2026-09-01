import { company } from '../config/company'

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export function formatPhoneBR(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export interface QuoteFormData {
  name: string
  whatsapp: string
  originCity: string
  destinationCity: string
  moveDate: string
  moveType: string
  description: string
  volumes: string
  notes: string
}

const moveTypeLabels: Record<string, string> = {
  residencial: 'Residencial',
  comercial: 'Comercial',
  frete: 'Frete',
  outro: 'Outro',
}

export function buildQuoteMessage(data: QuoteFormData): string {
  const lines = [
    'Olá, Natan Mudanças!',
    '',
    'Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `Origem: ${data.originCity}`,
    `Destino: ${data.destinationCity}`,
    `Data prevista: ${data.moveDate || 'A combinar'}`,
    `Tipo de serviço: ${moveTypeLabels[data.moveType] ?? data.moveType}`,
    `Volumes aproximados: ${data.volumes || 'Não informado'}`,
    '',
    'Itens/Descrição:',
    data.description,
  ]

  if (data.notes.trim()) {
    lines.push('', 'Observações:', data.notes)
  }

  lines.push('', 'Aguardo retorno. Obrigado!')

  return lines.join('\n')
}

export function buildSimpleWhatsAppUrl(): string {
  return buildWhatsAppUrl('Olá, Natan Mudanças! Gostaria de solicitar um orçamento.')
}
