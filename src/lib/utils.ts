import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// USD to INR conversion rate (as of October 2025)
const USD_TO_INR_RATE = 83.5

// Format currency values for display in Indian Rupees
export function formatCurrency(amount: number, currency = 'INR'): string {
  // Convert USD to INR if amount is in USD
  const inrAmount = currency === 'USD' ? amount * USD_TO_INR_RATE : amount

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(inrAmount)
}

// Convert USD amount to INR
export function convertToINR(usdAmount: number): number {
  return usdAmount * USD_TO_INR_RATE
}

// Format token amounts
export function formatTokenAmount(amount: number, decimals = 18): string {
  const value = amount / Math.pow(10, decimals)
  if (value < 0.01) return '<0.01'
  if (value < 1000) return value.toFixed(2)
  if (value < 1000000) return `${(value / 1000).toFixed(1)}K`
  return `${(value / 1000000).toFixed(1)}M`
}

// Format addresses for display
export function formatAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// Format dates relative to now
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return date.toLocaleDateString()
}

// Generate random ID for components
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}
