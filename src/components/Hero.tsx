import { ArrowRight, Building2, MessageCircle, PackageCheck, Route, Truck } from 'lucide-react'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

const indicators = [
  { icon: Truck, label: 'Mudanças residenciais' },
  { icon: Building2, label: 'Mudanças comerciais' },
  { icon: PackageCheck, label: 'Fretes' },
  { icon: Route, label: 'Transportes para todo o Brasil' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-dark-deep pt-24"
    >
      {/* Background: gradient + subtle route pattern (substituível por foto real em /public/images/hero-mudancas.jpg) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark-deep via-dark-deep to-dark" />
      <div
        className="absolute inset-0 -z-10 animate-diagonal-rise opacity-[0.07] motion-reduce:animate-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F5811C 0, #F5811C 1px, transparent 1px, transparent 40px)',
        }}
        aria-hidden
      />
      <div className="absolute -right-24 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" aria-hidden />

      <Container className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,40rem)_1fr]">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Balneário Camboriú / SC — para todo o Brasil
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Mudanças com segurança, agilidade e cuidado{' '}
                <span className="bg-gradient-to-r from-[#FFC98C] via-primary to-primary-dark bg-clip-text text-transparent">
                  para todo o Brasil.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg text-white/85 sm:text-xl">
                Transporte residencial e comercial com atendimento personalizado a partir de Balneário
                Camboriú.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-3 text-base text-white/65">
                Da coleta à entrega, cuidamos da sua mudança com organização, responsabilidade e atenção
                aos detalhes.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button as="a" href="#orcamento" variant="primary" size="lg">
                  Solicitar Orçamento
                  <ArrowRight size={20} aria-hidden />
                </Button>
                <Button
                  as="a"
                  href={buildSimpleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <MessageCircle size={20} aria-hidden />
                  Falar no WhatsApp
                </Button>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
                {indicators.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <Icon size={18} className="shrink-0 text-primary" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Ilustração: caminhão parado sobre estrada com faixas animadas simulando movimento */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative flex min-h-[22rem] items-center justify-center">
              <div
                className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl xl:h-96 xl:w-96"
                aria-hidden
              />

              <div className="relative flex flex-col items-center">
                <Truck
                  className="h-44 w-44 animate-truck-bob text-primary/70 xl:h-56 xl:w-56"
                  strokeWidth={0.9}
                  aria-hidden
                />

                <div className="relative -mt-[28px] h-1 w-72 overflow-hidden rounded-full bg-white/10 xl:-mt-[34px] xl:w-[26rem]">
                  <div
                    className="absolute inset-y-0 -left-12 w-[calc(100%+6rem)] animate-road-dash motion-reduce:animate-none"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, rgba(245,129,28,0.85) 0px, rgba(245,129,28,0.85) 22px, transparent 22px, transparent 46px)',
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
