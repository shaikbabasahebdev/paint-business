import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'ChromaCraft | Premium Paint & Coating Solutions',
  description: 'Premium paint supply, expert application services, and color consultation for homes and businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0f0a05] text-[#f5ede0] font-body antialiased selection:bg-orange-500/30 selection:text-orange-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
