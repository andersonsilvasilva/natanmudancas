import { benefits } from '../data/benefits'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Benefits() {
  return (
    <section id="diferenciais" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Diferenciais" title="Por que escolher a Natan Mudanças?" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-heading text-base font-bold text-dark-deep">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
