import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { company } from '../config/company'
import { navLinks } from '../data/nav'
import { useScrolled } from '../hooks/useScrolled'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/0'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={company.logo.src}
              alt={company.logo.alt}
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  scrolled ? 'text-dark-deep' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              as="a"
              href={buildSimpleWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              <MessageCircle size={20} aria-hidden />
              Falar no WhatsApp
            </Button>
          </div>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
              scrolled ? 'text-dark-deep' : 'text-white'
            }`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-dark-deep/10 bg-white shadow-lg lg:hidden">
          <Container>
            <nav className="flex flex-col divide-y divide-dark-deep/5 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 text-base font-semibold text-dark-deep hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pb-5 pt-2">
              <Button
                as="a"
                href={buildSimpleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full"
              >
                <MessageCircle size={20} aria-hidden />
                Falar no WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
