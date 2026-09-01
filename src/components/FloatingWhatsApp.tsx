import { MessageCircle } from 'lucide-react'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'

export function FloatingWhatsApp() {
  return (
    <a
      href={buildSimpleWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicite seu orçamento pelo WhatsApp"
      className="group fixed bottom-6 right-5 z-40 hidden sm:block"
    >
      <span
        className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-[#25D366]/40 motion-reduce:hidden"
        aria-hidden
      />
      <span className="flex items-center overflow-hidden rounded-full bg-[#25D366] shadow-lg shadow-black/25 transition-all duration-300 group-hover:pr-5">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <MessageCircle size={28} className="text-white" fill="white" strokeWidth={0} aria-hidden />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-xs">
          Solicite seu orçamento
        </span>
      </span>
    </a>
  )
}
