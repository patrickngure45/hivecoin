import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DataTable from '@/components/DataTable'
import { formatCurrency, formatPercentage } from '@/lib/utils'
import CoinsPagination from '@/components/CoinsPagination'
import { fetcher } from '@/lib/coingecko.actions'

const PER_PAGE = 50

async function getCoins(page: number) {
  // CoinGecko markets endpoint
  // https://api.coingecko.com/api/v3/coins/markets
  const params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: PER_PAGE,
    page,
    sparkline: false,
    price_change_percentage: '24h',
    locale: 'en',
  } as const

  return fetcher<CoinMarketData[]>(`/coins/markets`, params, 120)
}

const Page = async ({ searchParams }: NextPageProps) => {
  const sp = await searchParams
  const page = Math.max(1, Number(sp?.page) || 1)

  let coins: CoinMarketData[] = []
  try {
    coins = await getCoins(page)
  } catch (e) {
    console.error('Failed to fetch coins markets:', e)
  }

  const hasMorePages = coins.length === PER_PAGE
  const totalPages = hasMorePages ? page + 1 : page // best-effort; API doesn't return total

  const columns: DataTableColumn<CoinMarketData>[] = [
    {
      header: '#',
      cell: (row) => row.market_cap_rank,
      headClassName: 'w-[60px] text-left',
      cellClassName: 'text-left',
    },
    {
      header: 'Coin',
      cell: (row) => (
        <div className="flex items-center gap-2 min-w-0">
          <Image src={row.image} alt={row.name} width={24} height={24} className="rounded-full" />
          <Link href={`/coins/${row.id}`} className="truncate hover:underline">
            <span className="font-medium text-white truncate">{row.name}</span>
          </Link>
          <span className="coin-symbol uppercase text-xs text-gray-400">{row.symbol}</span>
        </div>
      ),
      headClassName: 'text-left',
      cellClassName: 'text-left',
    },
    {
      header: 'Price',
      cell: (row) => <span>{formatCurrency(row.current_price)}</span>,
      headClassName: 'text-right',
      cellClassName: 'text-right',
    },
    {
      header: '24h %',
      cell: (row) => (
        <span className={row.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
          {formatPercentage(row.price_change_percentage_24h)}
        </span>
      ),
      headClassName: 'text-right',
      cellClassName: 'text-right',
    },
    {
      header: 'Market Cap',
      cell: (row) => <span>{formatCurrency(row.market_cap)}</span>,
      headClassName: 'text-right',
      cellClassName: 'text-right',
    },
    {
      header: '24h Volume',
      cell: (row) => <span>{formatCurrency(row.total_volume)}</span>,
      headClassName: 'text-right',
      cellClassName: 'text-right',
    },
  ]

  return (
    <main id="coins-page" className="container py-6">
      <h1 className="text-xl font-semibold mb-4">All Coins</h1>

      {coins.length ? (
        <DataTable<CoinMarketData>
          data={coins}
          columns={columns}
          rowKey={(row) => row.id}
          tableClassName="coins-table"
          headerRowClassName="text-sm"
        />
      ) : (
        <p className="text-gray-400">No data available.</p>
      )}

      <div className="mt-6">
        <CoinsPagination currentPage={page} totalPages={totalPages} hasMorePages={hasMorePages} />
      </div>
    </main>
  )
}

export default Page
