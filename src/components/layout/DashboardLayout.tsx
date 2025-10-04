'use client'

import React from 'react'
import { Sidebar } from './Sidebar'
import { useSidebar } from './SidebarContext'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <Sidebar />
        <main className={`flex-1 p-8 transition-all duration-200 ${isOpen ? 'ml-64' : 'ml-16'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
