import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Molecule/Header/Header'
import Footer from '@/components/Molecule/Footer/Footer'

import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mecânica Mundial',
  description: '',
}

export default function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <div className="mt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}