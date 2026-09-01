import { PackageCheck, ShieldCheck } from 'lucide-react'
import aboutPhoto from '../assets/images/about-mudancas.jpg'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function About() {
  return (
    <section id="empresa" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Sobre a Natan Mudanças
              </span>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-dark-deep sm:text-4xl">
                Sua mudança em boas mãos
              </h2>
              <p className="text-lg text-muted">
                A Natan Mudanças oferece soluções de transporte e mudanças para clientes residenciais e
                empresas. Com atendimento direto e planejamento cuidadoso, trabalhamos para que cada
                etapa da mudança aconteça de forma organizada, segura e eficiente.
              </p>
              <p className="text-lg text-muted">
                Com base em Balneário Camboriú/SC, realizamos atendimentos locais, regionais e
                transportes para diferentes regiões do Brasil.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_70px_-20px_rgba(41,45,48,0.4)]">
              <img
                src={aboutPhoto}
                alt="Equipe da Natan Mudanças carregando um sofá em um caminhão de mudanças"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-dark-deep/85 via-dark-deep/10 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-7">
                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-white backdrop-blur-sm">
                  <ShieldCheck size={20} className="shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold">Transporte seguro</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-white backdrop-blur-sm">
                  <PackageCheck size={20} className="shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold">Coleta organizada</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
