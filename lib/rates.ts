export type Rate = {
  code: string
  name: string
  buy: number
  sell: number
  kind: 'fiat' | 'crypto'
}

export const rates: Rate[] = [
  { code: 'USD', name: 'Долар США', buy: 41.35, sell: 41.55, kind: 'fiat' },
  { code: 'EUR', name: 'Євро', buy: 48.1, sell: 48.4, kind: 'fiat' },
  { code: 'PLN', name: 'Польський злотий', buy: 11.2, sell: 11.4, kind: 'fiat' },
  { code: 'GBP', name: 'Фунт стерлінгів', buy: 55.6, sell: 56.3, kind: 'fiat' },
  { code: 'CHF', name: 'Швейцарський франк', buy: 51.8, sell: 52.6, kind: 'fiat' },
  { code: 'CZK', name: 'Чеська крона', buy: 1.92, sell: 1.99, kind: 'fiat' },
  { code: 'USDT', name: 'Tether (TRC-20 / ERC-20)', buy: 41.4, sell: 41.7, kind: 'crypto' },
  { code: 'BTC', name: 'Bitcoin', buy: 4_620_000, sell: 4_690_000, kind: 'crypto' },
  { code: 'ETH', name: 'Ethereum', buy: 148_500, sell: 151_200, kind: 'crypto' },
]

export const ratesUpdatedAt = '12.09.2026, 09:30'

export const branches = [
  {
    name: 'Центр',
    address: 'вул. Соборна, 14',
    hours: 'Пн–Нд 08:00–20:00',
    phone: '+380 (67) 000 00 01',
  },
  {
    name: 'Ювілейний',
    address: 'вул. Макарова, 23',
    hours: 'Пн–Сб 09:00–19:00',
    phone: '+380 (67) 000 00 02',
  },
  {
    name: 'Автовокзал',
    address: 'вул. Київська, 40',
    hours: 'Щодня 07:00–22:00',
    phone: '+380 (67) 000 00 03',
  },
]

export const contacts = {
  phone: '+380 (67) 000 00 00',
  phoneHref: 'tel:+380670000000',
  telegram: 'https://t.me/uvex_exchange',
  viber: 'viber://chat?number=%2B380670000000',
  email: 'hello@uvex.com.ua',
}

export function formatUah(value: number) {
  return new Intl.NumberFormat('uk-UA', {
    minimumFractionDigits: value >= 1000 ? 0 : 2,
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value)
}
