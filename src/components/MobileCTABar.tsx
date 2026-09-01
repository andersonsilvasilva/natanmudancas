import { ClipboardList, MessageCircle } from 'lucide-react'
import { buildSimpleWhatsAppUrl } from '../lib/whatsapp'

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-dark-deep/10 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={buildSimpleWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
      >
        <MessageCircle size={18} aria-hidden />
        WhatsApp
      </a>
      <a
        href="#orcamento"
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-white"
      >
        <ClipboardList size={18} aria-hidden />
        Orçamento
      </a>
    </div>
  )
}
