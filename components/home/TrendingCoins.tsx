import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { fetcher } from '@/lib/coingecko.actions'
import DataTable from '@/components/DataTable'
import { cn, formatCurrency, formatPercentage } from '@/lib/utils'
import { TrendingCoinsFallback } from '@/components/home/fallback'

const TrendingCoins = async () => {
  let trendingCoins: { coins: TrendingCoin[] } | null = null

  try {
    trendingCoins = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300)
  } catch (error) {
    console.error('Error fetching trending coins:', error)
    return <TrendingCoinsFallback />
  }

  const coins = trendingCoins?.coins?.slice(0, 6) || []
  if (!coins.length) return <TrendingCoinsFallback />

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: 'Name',
      headClassName: 'w-[50%]',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const item = coin.item
        return (
          <Link href={`/coins/${item.id}`} className="name-link flex items-center gap-2 min-w-0">
            <Image src={item.large} alt={item.name} width={28} height={28} className="rounded-full shrink-0" />
            <p className="truncate">{item.name}</p>
          </Link>
        )
      },
    },
    {
      header: '24h Change',
      headClassName: 'w-[30%]',
      cellClassName: 'change-cell',
      cell: (coin) => {
        const item = coin.item
        const change = item.data.price_change_percentage_24h.usd
        const isTrendingUp = change > 0
        return (
          <div className={cn('price-change flex items-center gap-1', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
            <span>{formatPercentage(change)}</span>
          </div>
        )
      },
    },
    {
      header: 'Price',
      headClassName: 'hidden sm:table-cell',
      cellClassName: 'price-cell hidden sm:table-cell',
      cell: (coin) => formatCurrency(coin.item.data.price),
    },
  ]

  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>

      <DataTable
        data={coins}
        columns={columns}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  )
}
export default TrendingCoins
