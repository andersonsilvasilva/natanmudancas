import logoImage from '../assets/images/logo-natan-mudancas.png'

export const company = {
  name: 'Natan Mudanças',
  legalName: 'Natan Zucchi',
  cnpj: '22.990.272/0001-19',
  slogan: 'Para todo Brasil',

  whatsapp: {
    // Número validado a partir da logomarca oficial (formato celular com 9 dígitos).
    display: '+55 (47) 99681-9431',
    number: '5547996819431',
  },

  email: 'natanli_zucchi@hotmail.com',

  address: {
    street: 'Rua Panamá',
    number: '1144',
    neighborhood: 'Bairro das Nações',
    city: 'Balneário Camboriú',
    state: 'SC',
    postalCode: '88338-190',
    country: 'Brasil',
  },

  serviceArea: 'Balneário Camboriú, Santa Catarina e transportes/mudanças para todo o Brasil.',

  logo: {
    src: logoImage,
    alt: 'Natan Mudanças — para todo Brasil',
  },

  developer: {
    name: 'HighTech Tecnologia',
    url: '#',
  },
} as const

export const displayAddress = `${company.address.neighborhood}, ${company.address.city}/${company.address.state}`
