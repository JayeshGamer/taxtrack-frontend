"use client"

import { useCallback, useLayoutEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function AnimatedThemeToggler({ className }: Props) {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // useLayoutEffect so we read the DOM before paint to avoid flicker
  useLayoutEffect(() => {
    try {
      let stored: string | null = null
      try {
        stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
      } catch (e) {
        // ignore
      }

      if (stored === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDark(true)
        return
      }

      if (stored === 'light') {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
        return
      }

      // fallback to existing html class or system preference
      const preferDark = document.documentElement.classList.contains('dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      if (preferDark) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      setIsDark(preferDark)
    } catch (err) {
      // swallow
      // eslint-disable-next-line no-console
      console.debug('[ThemeToggler] init error', err)
    }
  }, [])

  const toggleTheme = useCallback(async () => {
    try {
      if (!buttonRef.current) return

      // capture current state to compute new theme
      const currentIsDark = isDark
      const newThemeIsDark = !currentIsDark

      // Use startViewTransition if available for a smooth theme switch, matching the original pattern
      if (typeof (document as any).startViewTransition === 'function') {
        try {
          await (document as any).startViewTransition(() => {
            flushSync(() => {
              setIsDark(newThemeIsDark)
              if (newThemeIsDark) document.documentElement.classList.add('dark')
              else document.documentElement.classList.remove('dark')
              try {
                localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light')
              } catch (e) {
                // ignore
              }
            })
          }).ready
        } catch (e) {
          // fallback synchronous update
          flushSync(() => {
            setIsDark(newThemeIsDark)
            if (newThemeIsDark) document.documentElement.classList.add('dark')
            else document.documentElement.classList.remove('dark')
            try { localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light') } catch (e) {}
          })
        }
      } else {
        // synchronous fallback
        flushSync(() => {
          setIsDark(newThemeIsDark)
          if (newThemeIsDark) document.documentElement.classList.add('dark')
          else document.documentElement.classList.remove('dark')
          try { localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light') } catch (e) {}
        })
      }

      // reveal animation (non-blocking)
      try {
        if (buttonRef.current) {
          const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
          const x = left + width / 2
          const y = top + height / 2
          const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
          )

          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 700,
              easing: 'ease-in-out',
              pseudoElement: '::view-transition-new(root)',
            } as any
          )
        }
      } catch (e) {
        // ignore
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[ThemeToggler] toggle failed', err)
    }
  }, [isDark])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn('p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white', className ?? '')}
      data-testid="theme-toggler"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
