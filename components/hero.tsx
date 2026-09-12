import { ArrowRight, Clock, MapPin, Shield } from 'lucide-react'
import { ratesUpdatedAt } from '@/lib/rates'
import { Calculator } from '@/components/calculator'

const badges = [
  { icon: Shield, text: 'Ліцензія НБУ' },
  { icon: MapPin, text: '3 відділення в Рівному' },
  { icon: Clock, text: 'Онлайн 24/7' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Курс оновлено {ratesUpdatedAt}
          </div>
          <h1 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Обмін валют <span className="text-primary">без черг</span> і зайвих відсотків
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Долар, євро, злотий та крипта за чесним курсом. Приходьте у відділення або оформіть
            онлайн-заявку — зафіксуємо курс і привеземо готівку.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#online"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Обміняти онлайн
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#rates"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Дивитись курси
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {badges.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div id="calculator" className="scroll-mt-24">
          <Calculator />
        </div>
      </div>
    </section>
  )
}
