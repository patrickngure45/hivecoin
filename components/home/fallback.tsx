import React from 'react'
import DataTable from '@/components/ui/DataTable'

// Coin overview skeleton fallback
export const CoinOverViewFallback = () => {
  return (
    <div id="coin-overview-fallback" className="p-2">
      <div className="header">
        <div className="header-image bg-dark-400/50 animate-pulse" />
        <div className="info">
          <div className="header-line-sm bg-dark-400/50 animate-pulse" />
          <div className="header-line-lg bg-dark-400/50 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="period-button-skeleton bg-dark-400/50 animate-pulse" />
        <div className="period-button-skeleton bg-dark-400/50 animate-pulse" />
        <div className="period-button-skeleton bg-dark-400/50 animate-pulse" />
        <div className="period-button-skeleton bg-dark-400/50 animate-pulse" />
      </div>

      <div className="chart">
        <div className="chart-skeleton bg-dark-400/50 animate-pulse" />
      </div>
    </div>
  )
}

// Trending coins table skeleton fallback
export const TrendingCoinsFallback = () => {
  type SkeletonRow = { id: string }
  const data: SkeletonRow[] = Array.from({ length: 6 }, (_, i) => ({ id: `${i}` }))

  const columns: DataTableColumn<SkeletonRow>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image bg-dark-400/50 animate-pulse" />
          <div className="name-line bg-dark-400/50 animate-pulse" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change">
          <div className="change-icon bg-dark-400/50 animate-pulse" />
          <div className="change-line bg-dark-400/50 animate-pulse" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="price-line bg-dark-400/50 animate-pulse" />,
    },
  ]

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={data}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  )
}

export default undefined
