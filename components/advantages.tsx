import { Banknote, Bitcoin, Lock, Truck } from 'lucide-react'

const items = [
  {
    icon: Banknote,
    title: 'Чесний курс',
    text: 'Без прихованих комісій. Курс, який ви бачите на сайті — той, за яким ми обмінюємо.',
  },
  {
    icon: Truck,
    title: 'Доставка готівки',
    text: 'Оформіть онлайн-заявку — кур&apos;єр привезе гроші за адресою в межах Рівного.',
  },
  {
    icon: Bitcoin,
    title: 'Крипта за готівку',
    text: 'USDT, BTC, ETH. Купівля та продаж на будь-яку суму, розрахунок протягом 10 хвилин.',
  },
  {
    icon: Lock,
    title: 'Безпечно й легально',
    text: 'Працюємо за ліцензією НБУ. Перевірка купюр детектором, чек за кожну операцію.',
  },
]

const steps = [
  { title: 'Обираєте суму', text: 'Рахуєте в калькуляторі або пишете нам у месенджер.' },
  { title: 'Фіксуємо курс', text: 'Курс закріплюється за вами на 30 хвилин після підтвердження.' },
  { title: 'Отримуєте гроші', text: 'У відділенні, з доставкою або переказом на картку.' },
]

export function Advantages() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Чому U·VEX</p>
          <h2 className="font-display max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Сучасний обмінник, який працює так, як зручно вам
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>

        <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
          <h3 className="font-display mb-8 text-2xl font-bold">Як проходить онлайн-обмін</h3>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2">
                <span className="font-display text-sm font-bold opacity-60">Крок {i + 1}</span>
                <p className="font-display text-lg font-bold">{s.title}</p>
                <p className="text-sm leading-relaxed opacity-80">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
