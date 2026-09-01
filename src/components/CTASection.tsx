import { MessageCircle, Truck } from 'lucide-react'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dark-deep py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-deep via-dark to-dark-deep" />
      <Truck
        className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-64 w-64 text-white/[0.05] sm:h-80 sm:w-80"
        strokeWidth={1}
        aria-hidden
      />

      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">Vai se mudar?</h2>
            <p className="max-w-xl text-lg text-white/80">
              Converse agora com a Natan Mudanças e solicite uma cotação.
            </p>
            <Button
              as="a"
              href={buildSimpleWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <MessageCircle size={22} aria-hidden />
              Pedir Orçamento pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
