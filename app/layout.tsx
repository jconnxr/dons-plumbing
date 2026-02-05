import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Don's Plumbing | 24/7 Emergency Plumber in Oklahoma City",
  description: "Oklahoma City's trusted plumbing experts. 13+ years of experience. 24/7 emergency service. Drain cleaning, water heaters, sewer repair & more. Call 405-996-8259.",
  keywords: ['plumber', 'Oklahoma City', 'emergency plumber', 'drain cleaning', 'water heater', 'sewer repair', '24/7 plumber'],
  openGraph: {
    title: "Don's Plumbing | 24/7 Emergency Plumber in Oklahoma City",
    description: "Oklahoma City's trusted plumbing experts. 13+ years of experience. 24/7 emergency service.",
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
