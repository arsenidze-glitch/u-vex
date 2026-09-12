'use server'

export type RequestState = { status: 'idle' | 'success' | 'error'; message?: string }

export async function submitExchangeRequest(_prev: RequestState, formData: FormData): Promise<RequestState> {
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const currency = String(formData.get('currency') ?? '').trim()
  const amount = Number.parseFloat(String(formData.get('amount') ?? ''))
  const delivery = String(formData.get('delivery') ?? '')

  if (name.length < 2) return { status: 'error', message: "Вкажіть ім'я." }
  if (!/^\+?[\d\s()-]{10,}$/.test(phone)) return { status: 'error', message: 'Перевірте номер телефону.' }
  if (!Number.isFinite(amount) || amount <= 0) return { status: 'error', message: 'Вкажіть суму більшу за нуль.' }

  // Тут підключіть відправку у Telegram-бот, CRM або базу даних.
  console.log('Нова заявка на обмін:', { name, phone, currency, amount, delivery })

  return {
    status: 'success',
    message: `Дякуємо, ${name}! Менеджер зателефонує на ${phone} протягом 5 хвилин, щоб зафіксувати курс.`,
  }
}
