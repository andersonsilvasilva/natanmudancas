import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { company, displayAddress } from '../config/company'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Contact() {
  return (
    <section id="contato" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Contato" title="Fale com a Natan Mudanças" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-xl rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-heading text-xl font-extrabold text-dark-deep">{company.name}</h3>
                <p className="mt-1 text-sm text-muted">Responsável: {company.legalName}</p>
                <p className="text-sm text-muted">CNPJ: {company.cnpj}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <p className="text-sm text-dark-deep">{displayAddress}</p>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <a
                  href={buildSimpleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-dark-deep hover:text-primary"
                >
                  {company.whatsapp.display}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm font-semibold text-dark-deep hover:text-primary"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <Button
              as="a"
              href={buildSimpleWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="mt-8 w-full"
            >
              <MessageCircle size={18} aria-hidden />
              Abrir no WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
