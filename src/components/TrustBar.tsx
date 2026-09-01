import { Boxes, HeartHandshake, Route, ShieldCheck } from 'lucide-react'
import { Container } from './ui/Container'

const items = [
  { icon: ShieldCheck, label: 'Transporte Seguro' },
  { icon: HeartHandshake, label: 'Atendimento Personalizado' },
  { icon: Boxes, label: 'Mudanças Residenciais e Comerciais' },
  { icon: Route, label: 'Viagens para Todo o Brasil' },
]

export function TrustBar() {
  return (
    <div className="border-b border-dark-deep/5 bg-white py-6">
      <Container>
        <ul className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start justify-center gap-2.5 text-left">
              <Icon size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm font-semibold leading-snug text-dark-deep">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
