import React from 'react'
import DataTable from '@/components/DataTable'

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

export const CategoriesFallback = () => {
  type SkeletonRow = { id: string }
  const data: SkeletonRow[] = Array.from({ length: 10 }, (_, i) => ({ id: `${i}` }))

  const columns: DataTableColumn<SkeletonRow>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className="category-line skeleton" />,
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1">
          <div className="gainer-image skeleton" />
          <div className="gainer-image skeleton" />
          <div className="gainer-image skeleton" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className="value-skeleton-lg skeleton" />,
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
  ]

  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>
      <DataTable
        data={data}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName="mt-3"
      />
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
