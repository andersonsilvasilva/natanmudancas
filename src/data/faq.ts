export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Vocês realizam mudanças para outros estados?',
    answer:
      'Sim. A Natan Mudanças realiza transportes para diferentes regiões do Brasil. Consulte disponibilidade para sua origem e destino.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Entre em contato pelo WhatsApp e informe a cidade de origem, destino, data aproximada e os itens que serão transportados.',
  },
  {
    question: 'Vocês fazem mudanças residenciais?',
    answer: 'Sim. Atendemos mudanças residenciais e outros tipos de transporte.',
  },
  {
    question: 'Vocês atendem empresas?',
    answer: 'Sim. Também realizamos transportes e mudanças comerciais.',
  },
  {
    question: 'Como informar o que será transportado?',
    answer:
      'Você poderá enviar pelo WhatsApp uma descrição dos itens e, quando necessário, fotos ou vídeos para facilitar a avaliação.',
  },
]
