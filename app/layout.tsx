import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Tokenomics from '@/components/ui/Tokenomics'
import OurOrigins from '@/components/ui/ourOrigins'
import CommunityMarquee from '@/components/ui/CommunityMarquee'
import ListedExchanges from '@/components/ui/ListedExchanges'
import Footer from '@/components/ui/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NETLIFY_SITE_URL ||
  process.env.URL ||
  'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hive Coin',
  description: 'Hive coin crypto screener App with a build-in-High-Frequency Terminal & Dashboard ',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  )
}
