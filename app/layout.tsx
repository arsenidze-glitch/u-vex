import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Unbounded, Manrope } from 'next/font/google'
import './globals.css'

const _unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded' })
const _manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'U·VEX Exchange — обмін валют у Рівному онлайн та офлайн',
  description:
    'U·VEX Exchange: вигідний курс долара, євро, злотого та криптовалют у Рівному. Обмін у відділеннях або онлайн з доставкою. Працюємо щодня.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`bg-background scroll-smooth ${_unbounded.variable} ${_manrope.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
