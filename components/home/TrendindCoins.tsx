import React from 'react'
import { fetcher } from '@/lib/coingecko.actions'
import DataTable from '@/components/ui/DataTable'
import { formatCurrency } from '@/lib/utils'
import { TrendingCoinsFallback } from '@/components/home/fallback'

const TrendingCoins = async () => {
  let trendingCoins

  try {
    trendingCoins = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300)
  } catch (error) {
    console.error('Error fetching trending coins:', error)
    return <TrendingCoinsFallback />
  }
  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin) => formatCurrency(coin.item.data.price),
    },
  ]

  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>

      <DataTable
        data={trendingCoins.coins.slice(0, 6) || []}
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
