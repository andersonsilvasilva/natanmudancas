import type { LucideIcon } from 'lucide-react'
import { MessageCircle, ClipboardCheck, ShieldCheck, MapPinned, Zap } from 'lucide-react'

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: MessageCircle,
    title: 'Atendimento direto',
    description: 'Fale diretamente conosco para organizar os detalhes da sua mudança.',
  },
  {
    icon: ClipboardCheck,
    title: 'Planejamento',
    description: 'Cada transporte é avaliado de acordo com origem, destino e quantidade de volumes.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado com seus bens',
    description: 'Seus itens são tratados com responsabilidade durante o processo de transporte.',
  },
  {
    icon: MapPinned,
    title: 'Atendimento nacional',
    description: 'Transportes com origem em Santa Catarina para diferentes regiões do Brasil.',
  },
  {
    icon: Zap,
    title: 'Comunicação rápida',
    description: 'Atendimento facilitado pelo WhatsApp.',
  },
]
