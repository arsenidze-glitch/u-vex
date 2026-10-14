'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { contacts } from '@/lib/rates'

const nav = [
  { href: '#rates', label: 'Курси' },
  { href: '#calculator', label: 'Калькулятор' },
  { href: '#online', label: 'Онлайн-обмін' },
  { href: '#branches', label: 'Відділення' },
  { href: '#about', label: 'Про нас' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#1a1b1d] bg-[#101112]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
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
            <a key={item.href} href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={contacts.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:px-4"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{contacts.phone}</span>
            <span className="sm:hidden">Подзвонити</span>
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Мобільна навігація" className="border-t border-white/10 bg-[#101112] px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
