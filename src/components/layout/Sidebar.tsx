'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Shield,
  Users,
  TrendingUp,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from './SidebarContext'

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      current: pathname === '/dashboard'
    },
    {
      name: 'Proposals',
      href: '/proposals',
      icon: FileText,
      current: pathname?.startsWith('/proposals')
    },
    {
      name: 'Treasury',
      href: '/treasury',
      icon: Shield,
      current: pathname?.startsWith('/treasury')
    },
    {
      name: 'Community',
      href: '/community',
      icon: Users,
      current: pathname?.startsWith('/community')
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: TrendingUp,
      current: pathname?.startsWith('/analytics')
    }
  ]

  const bottomNavigation = [
    {
      name: 'Notifications',
      href: '/notifications',
      icon: Bell,
      current: pathname?.startsWith('/notifications')
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
      current: pathname?.startsWith('/settings')
    },
    {
      name: 'Help',
      href: '/help',
      icon: HelpCircle,
      current: pathname?.startsWith('/help')
    }
  ]

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-200 overflow-hidden',
        isOpen ? 'w-64' : 'w-16'
      )}
    >
      {/* Logo */}
      <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 bg-gradient-to-br from-aurora-teal-500 to-midnight-navy-500 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          {isOpen && <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">TaxTrack</span>}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              isOpen
                ? 'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200'
                : 'flex items-center justify-center w-full p-2 rounded-lg transition-colors duration-200',
              item.current
                ? 'bg-aurora-teal-100 dark:bg-aurora-teal-900/20 text-aurora-teal-700 dark:text-aurora-teal-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
          >
            <item.icon
              className={cn(
                isOpen ? 'h-5 w-5 flex-shrink-0' : 'h-5 w-5',
                item.current ? 'text-aurora-teal-500' : 'text-gray-500 dark:text-gray-400'
              )}
            />
            {isOpen && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
        {/* bottom nav links */}
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              isOpen
                ? 'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200'
                : 'flex items-center justify-center w-full p-2 rounded-lg transition-colors duration-200',
              item.current
                ? 'bg-aurora-teal-100 dark:bg-aurora-teal-900/20 text-aurora-teal-700 dark:text-aurora-teal-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
          >
            <item.icon
              className={cn(
                isOpen ? 'h-5 w-5 flex-shrink-0' : 'h-5 w-5',
                item.current ? 'text-aurora-teal-500' : 'text-gray-500 dark:text-gray-400'
              )}
            />
            {isOpen && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}

        {/* collapse/expand button placed above logout so it never conflicts with logo */}
        <div className="flex items-center">
          {isOpen ? (
            <button
              onClick={toggle}
              aria-label="Collapse sidebar"
              className="flex items-center w-full px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-aurora-teal-400"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Collapse</span>
            </button>
          ) : (
            <button
              onClick={toggle}
              aria-label="Expand sidebar"
              className="w-9 h-9 mx-auto rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-aurora-teal-400"
            >
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>

        {/* Logout Button */}
        <button className={cn(isOpen ? 'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-lg' : 'w-full flex items-center justify-center p-2 rounded-lg', 'transition-colors duration-200 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20')}>
          <LogOut className={cn(isOpen ? 'mr-3 h-5 w-5 flex-shrink-0' : 'h-5 w-5')} />
          {isOpen ? 'Disconnect' : ''}
        </button>
      </div>
    </div>
  )
}
