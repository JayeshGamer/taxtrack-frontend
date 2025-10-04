'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Settings } from 'lucide-react'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Shield } from 'lucide-react'
import { useSidebar } from './SidebarContext'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''
  const { isOpen } = useSidebar()
  const { openConnectModal } = useConnectModal ? useConnectModal() : { openConnectModal: undefined }

  const offsetClass = !isHome ? (isOpen ? 'pl-64' : 'pl-16') : ''

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${offsetClass}`}>
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="no-underline flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-aurora-teal-500 to-midnight-navy-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">TaxTrack</span>
            </Link>
          </div>

          {/* CENTER: Navigation - centered and evenly spaced */}
          <nav className="hidden md:flex flex-1 justify-center" aria-label="Primary navigation">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/" className="no-underline">
                  <LiquidButton className="text-black dark:text-white h-8 px-4" size="sm">
                    Home
                  </LiquidButton>
                </Link>
              </li>
              <li>
                <Link href="/proposals" className="no-underline">
                  <LiquidButton className="text-black dark:text-white h-8 px-4" size="sm">
                    Proposals
                  </LiquidButton>
                </Link>
              </li>
              <li>
                <Link href="/treasury" className="no-underline">
                  <LiquidButton className="text-black dark:text-white h-8 px-4" size="sm">
                    Treasury
                  </LiquidButton>
                </Link>
              </li>
            </ul>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center space-x-3">
            <AnimatedThemeToggler className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />

            <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <Settings className="w-5 h-5" />
            </button>

            <div className="hidden sm:block">
              <Link href="/dashboard">
                <LiquidButton className="text-black dark:text-white h-8 px-4" size="sm">
                  Launch App
                </LiquidButton>
              </Link>
            </div>

            <div className="ml-2">
              <LiquidButton
                onClick={() => openConnectModal && openConnectModal()}
                className="text-black dark:text-white h-8 px-3"
                size="sm"
              >
                Connect Wallet
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
