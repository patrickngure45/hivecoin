'use server'

import qs from 'query-string'

// Read environment variables at module scope, but do not throw here to keep SSR/SSG builds safe.
// Netlify may not provide these during certain build phases; we will handle absence lazily at call time.
const BASE_URL = process.env.COINGECKO_BASE_URL || 'https://api.coingecko.com/api/v3'
const API_KEY = process.env.COINGECKO_API_KEY

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const base = BASE_URL?.replace(/\/$/, '') // ensure no trailing slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`

  const url = qs.stringifyUrl(
    {
      url: `${base}${path}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true },
  )

  // Build headers conditionally to avoid undefined values
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (API_KEY) headers['x-cg-demo-api-key'] = API_KEY

  const response = await fetch(url, {
    headers,
    next: { revalidate },
  })

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}))

    throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText} `)
  }

  return response.json()
}

// Minimal server helper to provide a pool identifier compatible with components expecting pool.id
// This avoids build-time failures when GeckoTerminal integration is not yet available.
export async function getPools(
  coinId: string,
  network?: string | null,
  contract?: string | null,
): Promise<{ id: string }> {
  const id = network && contract ? `${network}:${contract}` : coinId
  return { id }
}
