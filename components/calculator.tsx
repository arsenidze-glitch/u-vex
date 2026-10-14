'use client'

import { useState } from 'react'
import { ArrowDownUp } from 'lucide-react'
import { formatUah, rates } from '@/lib/rates'

export function Calculator() {
  const [code, setCode] = useState('USD')
  const [amount, setAmount] = useState('100')
  const [mode, setMode] = useState<'sell' | 'buy'>('sell')

  const rate = rates.find((r) => r.code === code) ?? rates[0]
  const numericAmount = Number.parseFloat(amount.replace(',', '.')) || 0
  const price = mode === 'sell' ? rate.buy : rate.sell
  const result = mode === 'sell' ? numericAmount * price : numericAmount / price

  const giveLabel = mode === 'sell' ? rate.code : 'UAH'
  const getLabel = mode === 'sell' ? 'UAH' : rate.code
  const selectCurrency = (currency: string, side: 'give' | 'get') => {
    if (currency === 'UAH') {
      setMode(side === 'give' ? 'buy' : 'sell')
      return
    }
    setCode(currency)
    setMode(side === 'give' ? 'sell' : 'buy')
  }
  const currencyOptions = rates.map((item) => item.code)

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_20%,transparent),0_30px_80px_-30px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">Калькулятор</h2>
        <div role="tablist" aria-label="Напрямок обміну" className="flex rounded-full bg-secondary p-1 text-sm">
          {(['sell', 'buy'] as const).map((m) => (
            <button
              key={m}
              role="tab"
              type="button"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
                mode === m ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {m === 'sell' ? 'Продати' : 'Купити'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-2xl bg-secondary p-4">
          <label htmlFor="amount" className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
            Віддаєте
          </label>
          <div className="flex items-center gap-3">
            <input
              id="amount"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="min-w-0 flex-1 bg-transparent font-display text-3xl font-bold outline-none placeholder:text-muted-foreground"
              placeholder="0"
            />
            <div className="relative shrink-0">
              <select
                aria-label="Валюта, яку віддаєте"
                value={giveLabel}
                onChange={(e) => selectCurrency(e.target.value, 'give')}
                className="appearance-none rounded-full bg-background py-1.5 pl-3 pr-7 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="UAH">UAH</option>
                {currencyOptions.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setMode(mode === 'sell' ? 'buy' : 'sell')}
            aria-label="Змінити напрямок"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowDownUp className="size-4" aria-hidden="true" />
          </button>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="rounded-2xl bg-secondary p-4">
          <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">Отримуєте</p>
          <div className="flex items-center gap-3">
            <output htmlFor="amount" className="min-w-0 flex-1 truncate font-display text-3xl font-bold text-accent-strong">
              {mode === 'sell' ? formatUah(result) : result.toFixed(rate.kind === 'crypto' ? 6 : 2)}
            </output>
            <div className="relative shrink-0">
              <select
                aria-label="Валюта, яку отримуєте"
                value={getLabel}
                onChange={(e) => selectCurrency(e.target.value, 'get')}
                className="appearance-none rounded-full bg-background py-1.5 pl-3 pr-7 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="UAH">UAH</option>
                {currencyOptions.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
              </select>
            </div>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          Курс: 1 {rate.code} = {formatUah(price)} грн ({mode === 'sell' ? 'купівля' : 'продаж'}). Для сум від
          $5&nbsp;000 — індивідуальні умови.
        </p>
      </div>
    </div>
  )
}
