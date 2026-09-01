import type { LucideIcon } from 'lucide-react'
import { MessageCircle, ClipboardList, PackageCheck, Truck } from 'lucide-react'

export interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Solicite seu orçamento',
    description: 'Conte pelo WhatsApp o que precisa transportar.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planejamos o transporte',
    description: 'Avaliamos as informações da mudança, origem, destino e volumes.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Realizamos a coleta',
    description: 'Os itens são organizados para o transporte conforme o serviço contratado.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega no destino',
    description: 'Realizamos o transporte até o endereço combinado.',
  },
]
