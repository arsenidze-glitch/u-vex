import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { contacts } from '@/lib/rates'

const nav = [
  { href: '#rates', label: 'Курси' },
  { href: '#calculator', label: 'Калькулятор' },
  { href: '#online', label: 'Онлайн-обмін' },
  { href: '#branches', label: 'Відділення' },
  { href: '#about', label: 'Про нас' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="U·VEX Exchange — на головну" className="flex items-center">
          <Image
            src="/images/uvex-logo.png"
            alt="U·VEX Exchange"
            width={140}
            height={44}
            priority
            className="h-9 w-auto mix-blend-lighten"
          />
        </Link>
        <nav aria-label="Основна навігація" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={contacts.phoneHref}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{contacts.phone}</span>
          <span className="sm:hidden">Подзвонити</span>
        </a>
      </div>
    </header>
  )
}
