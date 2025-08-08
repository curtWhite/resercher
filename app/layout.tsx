import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { AuthProvider } from './context/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Research Review Blog',
  description: 'A platform for reviewing and discussing academic research papers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}