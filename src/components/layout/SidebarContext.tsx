'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface SidebarContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('sidebarOpen') : null
      if (raw === 'true') return true
      if (raw === 'false') return false
    } catch (e) {
      // ignore
    }
    return true // default open
  })

  useEffect(() => {
    try {
      localStorage.setItem('sidebarOpen', isOpen ? 'true' : 'false')
    } catch (e) {
      // ignore
    }
  }, [isOpen])

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((v) => !v)

  return (
    <SidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}
