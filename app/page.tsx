import React, { Suspense } from 'react'
import Image from 'next/image'
import DataTable from '@/components/ui/DataTable'
import Link from 'next/link'
import { cn, formatCurrency } from '@/lib/utils'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { fetcher } from '@/lib/coingecko.actions'
import CoinOverview from '@/components/home/CoinOverview'
import TrendingCoins from '@/components/home/TrendindCoins'
import { CoinOverViewFallback, TrendingCoinsFallback } from '@/components/home/fallback'

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item
      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      )
    },
  },
  {
    header: '24h Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item
      const isTtrendingUp = item.data.price_change_percentage_24h.usd > 0
      return (
        <div className={cn('price-change', isTtrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p>
            {isTtrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
          </p>
        </div>
      )
    },
  },
  {
    header: 'price',
    cellClassName: 'name-cell',
    cell: (coin) => coin.item.data.price,
  },
]
const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverViewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  )
}
export default Page
