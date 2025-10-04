import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { SidebarProvider } from '@/components/layout/SidebarContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaxTrack - Transparent Municipal Finance DAO',
  description: 'Decentralized governance platform for transparent municipal finance and civic engagement',
  keywords: 'DAO, governance, municipal finance, blockchain, transparency, civic engagement',
  authors: [{ name: 'TaxTrack Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Only apply dark class if user has explicitly saved 'dark' in localStorage.
// Default behavior: light theme (no 'dark' class) when there's no saved preference.
const setInitialTheme = `(${String(function () {
  try {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  } catch (e) {
    // ignore - keep light theme
  }
})})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Run theme init before React hydrates to avoid FOUC */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Providers>
          <SidebarProvider>
            <Header />
            {children}
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  )
}
