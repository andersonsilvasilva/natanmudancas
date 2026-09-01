import { steps } from '../data/howItWorks'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Como funciona" title="Sua mudança sem complicação" />
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-primary/40 via-primary/20 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ number, icon: Icon, title, description }, index) => (
              <Reveal key={number} delay={index * 100}>
                <div className="relative flex gap-5 lg:flex-col lg:gap-4">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                    <Icon size={22} aria-hidden />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-primary">{number}</span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-dark-deep">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
