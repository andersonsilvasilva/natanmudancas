import type { LucideIcon } from 'lucide-react'
import { Building2, House, Package, Route, Truck, CalendarCheck } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: House,
    title: 'Mudanças Residenciais',
    description:
      'Transporte de móveis, eletrodomésticos, caixas e objetos pessoais com cuidado em todas as etapas.',
  },
  {
    icon: Building2,
    title: 'Mudanças Comerciais',
    description:
      'Transporte organizado para escritórios, lojas, empresas e estabelecimentos comerciais.',
  },
  {
    icon: Package,
    title: 'Fretes',
    description:
      'Fretes para volumes, móveis, equipamentos e mercadorias, com atendimento personalizado.',
  },
  {
    icon: Route,
    title: 'Mudanças Interestaduais',
    description:
      'Planejamento e transporte de mudanças entre cidades e estados, com atendimento para diferentes regiões do Brasil.',
  },
  {
    icon: Truck,
    title: 'Transporte de Móveis',
    description:
      'Coleta e transporte cuidadoso de móveis, eletrodomésticos e outros itens de maior volume.',
  },
  {
    icon: CalendarCheck,
    title: 'Mudanças Planejadas',
    description:
      'Organização prévia da coleta, transporte e entrega para tornar sua mudança mais tranquila e eficiente.',
  },
]
