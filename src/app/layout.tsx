import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Explore Marinduque',
  description: 'Working example site using Payload CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

