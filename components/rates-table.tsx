import { formatUah, rates, ratesUpdatedAt, type Rate } from '@/lib/rates'

function Table({ title, items }: { title: string; items: Rate[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="font-display font-bold">{title}</h3>
        <span className="text-xs text-muted-foreground">за 1 одиницю, грн</span>
      </div>
      <table className="w-full text-sm">
        <thead className="text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            <th scope="col" className="px-6 py-3 text-left font-medium">Валюта</th>
            <th scope="col" className="px-6 py-3 text-right font-medium">Купівля</th>
            <th scope="col" className="px-6 py-3 text-right font-medium">Продаж</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.code} className="border-t border-border transition-colors hover:bg-secondary/60">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-secondary font-display text-[11px] font-bold text-primary">
                    {r.code.slice(0, 4)}
                  </span>
                  <div>
                    <p className="font-semibold">{r.code}</p>
                    <p className="text-xs text-muted-foreground">{r.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-right font-display font-semibold tabular-nums">{formatUah(r.buy)}</td>
              <td className="px-6 py-4 text-right font-display font-semibold tabular-nums text-primary">
                {formatUah(r.sell)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function RatesTable() {
  const fiat = rates.filter((r) => r.kind === 'fiat')
  const crypto = rates.filter((r) => r.kind === 'crypto')

  return (
    <section id="rates" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Актуальні курси</p>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Курси валют сьогодні
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Оновлено {ratesUpdatedAt}. Курс у відділеннях може відрізнятися.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Table title="Готівкова валюта" items={fiat} />
          <Table title="Криптовалюта" items={crypto} />
        </div>
      </div>
    </section>
  )
}
