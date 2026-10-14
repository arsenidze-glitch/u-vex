import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import { contacts } from '@/lib/rates'

const footerNav = [
  { href: '#rates', label: 'Курси валют' },
  { href: '#calculator', label: 'Калькулятор' },
  { href: '#online', label: 'Онлайн-обмін' },
  { href: '#branches', label: 'Відділення' },
  { href: '#about', label: 'Про нас' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#252628] bg-[#101112] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12 md:py-16">
        <div className="flex flex-col gap-5">
          <Image src="/images/uvex-logo.png" alt="U·VEX Exchange" width={140} height={44} className="h-10 w-auto self-start mix-blend-lighten" />
          <p className="max-w-xs text-sm leading-6 text-white/60">Обмін валют і криптовалют у Рівному. Онлайн та офлайн.</p>
          <a href={contacts.phoneHref} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {contacts.phone}
          </a>
        </div>

        <nav aria-label="Навігація у футері" className="flex flex-col gap-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Навігація</p>
          {footerNav.map((item) => (
            <a key={item.href} href={item.href} className="w-fit text-sm text-white/65 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Зв&apos;язатися</p>
          <p className="text-sm leading-6 text-white/60">Підкажемо актуальний курс і приймемо вашу заявку.</p>
          <a href="#online" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Обміняти валюту
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <div className="flex gap-4 text-sm text-white/60">
            <a href={contacts.telegram} target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
            <a href={`mailto:${contacts.email}`} className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} U·VEX Exchange. Курси є орієнтовними та можуть змінюватися протягом дня.
        </p>
      </div>
    </footer>
  )
}
