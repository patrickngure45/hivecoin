import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formats a value into a localized currency string.
// Safe to use with numbers, numeric strings, null/undefined. Falls back to "-" when invalid.
export function formatCurrency(
  value: number | string | null | undefined,
  options?: {
    currency?: string
    locale?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    fallback?: string
  }
): string {
  const {
    currency = "USD",
    locale = "en-US",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    fallback = "-",
  } = options || {}

  if (value === null || value === undefined) return fallback

  const num = typeof value === "string" ? Number(value) : value
  if (Number.isNaN(num)) return fallback

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(num)
  } catch {
    // Fallback to a simple formatted number if Intl fails (e.g., bad currency code)
    return num.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits,
    })
  }
}
