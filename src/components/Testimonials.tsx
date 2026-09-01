import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

// Ativar somente quando a Natan Mudanças fornecer depoimentos reais de clientes.
const SHOW_TESTIMONIALS = false

export function Testimonials() {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null

  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Depoimentos" title="Quem confia na Natan Mudanças" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm">
                <Quote size={24} className="text-primary" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-muted">{testimonial.quote}</p>
                <div>
                  <p className="font-heading text-sm font-bold text-dark-deep">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.city}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
