import { Mail, MessageCircle } from 'lucide-react'
import { company, displayAddress } from '../config/company'
import { navLinks } from '../data/nav'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Container } from './ui/Container'

const footerLinks = navLinks.filter((link) =>
  ['#inicio', '#empresa', '#servicos', '#orcamento', '#contato'].includes(link.href),
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-deep pb-28 pt-16 text-white sm:pb-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <img
              src={company.logo.src}
              alt={company.logo.alt}
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-white/70">
              Natan Mudanças — Transporte e mudanças com atendimento para todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Links rápidos
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Informações
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              <li>CNPJ {company.cnpj}</li>
              <li>{displayAddress}</li>
              <li>
                <a
                  href={buildSimpleWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle size={16} aria-hidden />
                  {company.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail size={16} aria-hidden />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {company.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{' '}
            <a href={company.developer.url} className="font-semibold text-white/70 hover:text-white">
              {company.developer.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
