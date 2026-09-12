import Image from 'next/image'
import { contacts } from '@/lib/rates'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Image src="/images/uvex-logo.png" alt="U·VEX Exchange" width={140} height={44} className="h-9 w-auto mix-blend-lighten" />
          <p className="text-sm text-muted-foreground">Обмін валют і криптовалют у Рівному. Онлайн та офлайн.</p>
        </div>
        <address className="flex flex-col gap-1 text-sm not-italic text-muted-foreground">
          <a href={contacts.phoneHref} className="font-semibold text-foreground hover:text-primary">
            {contacts.phone}
          </a>
          <a href={`mailto:${contacts.email}`} className="hover:text-primary">
            {contacts.email}
          </a>
          <a href={contacts.telegram} target="_blank" rel="noreferrer" className="hover:text-primary">
            Telegram
          </a>
        </address>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} U·VEX Exchange. Курси є орієнтовними та можуть змінюватися протягом дня.
        </p>
      </div>
    </footer>
  )
}
