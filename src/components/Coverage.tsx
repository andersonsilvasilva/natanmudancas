import { MapPin, MessageCircle } from 'lucide-react'
import truckPhoto from '../assets/images/coverage-truck.jpg'
import { routeCities } from '../data/coverage'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function Coverage() {
  return (
    <section id="atendimento" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Área de atendimento
              </span>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-dark-deep sm:text-4xl">
                De Balneário Camboriú para todo o Brasil.
              </h2>
              <p className="text-lg text-muted">
                A Natan Mudanças está localizada em Balneário Camboriú/SC e realiza transportes locais,
                regionais e interestaduais.
              </p>

              <div>
                <span className="text-sm font-semibold text-dark-deep">Trajeto frequente:</span>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {routeCities.map((city) => (
                    <li
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-dark-deep"
                    >
                      <MapPin size={14} className="shrink-0 text-primary" aria-hidden />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  as="a"
                  href={buildSimpleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <MessageCircle size={20} aria-hidden />
                  Consultar disponibilidade
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-[0_40px_70px_-20px_rgba(41,45,48,0.4)]">
              <img
                src={truckPhoto}
                alt="Caminhão da Natan Mudanças pronto para viagem"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-dark-deep/85 via-dark-deep/5 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                  <MapPin size={18} className="shrink-0 text-primary" aria-hidden />
                  <span className="font-heading text-sm font-bold text-white">
                    Balneário Camboriú / SC
                  </span>
                </div>
                <span className="text-xs text-white/70">Ponto de partida das mudanças e fretes</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
