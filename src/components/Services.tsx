import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções para cada tipo de transporte"
            subtitle="Atendimento sob medida para cada etapa da sua mudança ou frete."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 60}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-dark-deep/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-deep">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <a
                  href="#orcamento"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                >
                  Solicitar orçamento
                  <ArrowRight size={16} aria-hidden />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
