import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { buildQuoteMessage, buildWhatsAppUrl, formatPhoneBR, type QuoteFormData } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const initialFormData: QuoteFormData = {
  name: '',
  whatsapp: '',
  originCity: '',
  destinationCity: '',
  moveDate: '',
  moveType: 'residencial',
  description: '',
  volumes: '',
  notes: '',
}

const inputClasses =
  'w-full rounded-xl border border-dark-deep/15 bg-white px-4 py-3 text-sm text-dark-deep placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

const labelClasses = 'mb-1.5 block text-sm font-semibold text-dark-deep'

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData)

  function updateField<K extends keyof QuoteFormData>(field: K, value: QuoteFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = buildQuoteMessage(formData)
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="orcamento" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Orçamento"
            title="Solicite seu orçamento"
            subtitle="Preencha os dados abaixo e envie direto para o nosso WhatsApp."
          />
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-3xl rounded-3xl border border-dark-deep/5 bg-white p-6 shadow-lg sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Nome completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className={labelClasses}>
                  WhatsApp *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="numeric"
                  placeholder="(47) 99999-9999"
                  maxLength={16}
                  className={inputClasses}
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', formatPhoneBR(e.target.value))}
                />
              </div>

              <div>
                <label htmlFor="originCity" className={labelClasses}>
                  Cidade de origem *
                </label>
                <input
                  id="originCity"
                  name="originCity"
                  type="text"
                  required
                  className={inputClasses}
                  value={formData.originCity}
                  onChange={(e) => updateField('originCity', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="destinationCity" className={labelClasses}>
                  Cidade de destino *
                </label>
                <input
                  id="destinationCity"
                  name="destinationCity"
                  type="text"
                  required
                  className={inputClasses}
                  value={formData.destinationCity}
                  onChange={(e) => updateField('destinationCity', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="moveDate" className={labelClasses}>
                  Data aproximada da mudança
                </label>
                <input
                  id="moveDate"
                  name="moveDate"
                  type="date"
                  className={inputClasses}
                  value={formData.moveDate}
                  onChange={(e) => updateField('moveDate', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="moveType" className={labelClasses}>
                  Tipo de mudança
                </label>
                <select
                  id="moveType"
                  name="moveType"
                  className={inputClasses}
                  value={formData.moveType}
                  onChange={(e) => updateField('moveType', e.target.value)}
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="frete">Frete</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className={labelClasses}>
                  Descreva o que será transportado *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="volumes" className={labelClasses}>
                  Quantidade aproximada de volumes
                </label>
                <input
                  id="volumes"
                  name="volumes"
                  type="text"
                  placeholder="Ex: 20 caixas, 1 sofá, 2 camas"
                  className={inputClasses}
                  value={formData.volumes}
                  onChange={(e) => updateField('volumes', e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="notes" className={labelClasses}>
                  Observações
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className={`${inputClasses} resize-none`}
                  value={formData.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="mt-8 w-full sm:w-auto">
              <Send size={20} aria-hidden />
              Solicitar Orçamento
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
