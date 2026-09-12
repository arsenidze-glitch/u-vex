import { Clock, MapPin, Phone } from 'lucide-react'
import { branches } from '@/lib/rates'

export function Branches() {
  return (
    <section id="branches" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Відділення</p>
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Три точки в Рівному
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {branches.map((b) => (
            <li key={b.name} className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold">{b.name}</h3>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Адреса</dt>
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <dd>{b.address}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Графік</dt>
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <dd className="text-muted-foreground">{b.hours}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="sr-only">Телефон</dt>
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <dd>
                    <a href={`tel:${b.phone.replace(/[^\d+]/g, '')}`} className="hover:text-primary">
                      {b.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(`Рівне, ${b.address}`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-sm font-semibold text-primary hover:underline"
              >
                Прокласти маршрут →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
