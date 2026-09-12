'use client'

import { useActionState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { submitExchangeRequest, type RequestState } from '@/app/actions'
import { contacts, rates } from '@/lib/rates'

const inputClass =
  'h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40'

export function OnlineRequest() {
  const [state, action, pending] = useActionState<RequestState, FormData>(submitExchangeRequest, { status: 'idle' })

  return (
    <section id="online" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Онлайн-обмін</p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Залиште заявку — зафіксуємо курс за вами
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Менеджер передзвонить протягом 5 хвилин, підтвердить суму й курс. Далі — доставка готівки
            по Рівному, переказ на картку або отримання у зручному відділенні.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Send className="size-4" aria-hidden="true" />
              Написати в Telegram
            </a>
            <a
              href={contacts.viber}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Viber
            </a>
          </div>
        </div>

        {state.status === 'success' ? (
          <div
            role="status"
            className="flex flex-col items-start gap-4 rounded-3xl border border-primary/40 bg-card p-8"
          >
            <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">Заявку прийнято</h3>
            <p className="leading-relaxed text-muted-foreground">{state.message}</p>
          </div>
        ) : (
          <form action={action} className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Ім&apos;я
                <input name="name" required autoComplete="name" placeholder="Олена" className={inputClass} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Телефон
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+380 67 000 00 00"
                  className={inputClass}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Валюта
                <select name="currency" className={inputClass} defaultValue="USD">
                  {rates.map((r) => (
                    <option key={r.code} value={r.code}>
                      {r.code} — {r.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Сума
                <input name="amount" inputMode="decimal" required placeholder="1000" className={inputClass} />
              </label>
            </div>
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-2 text-sm font-medium">Спосіб отримання</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  ['branch', 'У відділенні'],
                  ['courier', 'Доставка'],
                  ['card', 'На картку'],
                ].map(([value, label], i) => (
                  <label
                    key={value}
                    className="flex h-11 cursor-pointer items-center justify-center rounded-xl border border-input text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:font-semibold has-[:checked]:text-primary-foreground"
                  >
                    <input type="radio" name="delivery" value={value} defaultChecked={i === 0} className="sr-only" />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
            {state.status === 'error' && (
              <p role="alert" className="text-sm text-destructive">
                {state.message}
              </p>
            )}
            <button
              type="submit"
              disabled={pending}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {pending ? 'Надсилаємо…' : 'Надіслати заявку'}
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
