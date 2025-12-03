import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'نمایشگاه بین‌المللی شیلات و آبزیان',
  description: 'نهمین نمایشگاه بین‌المللی شیلات، آبزیان، ماهیگیری، غذاهای دریایی و صنایع وابسته',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  )
}

