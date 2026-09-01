// Depoimentos reais de clientes ainda não fornecidos.
// Seção desativada em src/components/Testimonials.tsx (SHOW_TESTIMONIALS = false)
// até que a empresa envie avaliações verídicas para substituir este array.
export interface Testimonial {
  name: string
  city: string
  quote: string
}

export const testimonials: Testimonial[] = []
