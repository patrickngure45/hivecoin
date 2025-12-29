import { fetcher } from '@/lib/coingecko.actions'
import Image from 'next/image'
import Link from 'next/link'
import CoinsPagination from '@/components/CoinsPagination'
import { cn, formatPercentage, formatCurrency } from '@/lib/utils'
import DataTable from '@/components/DataTable'

export const dynamic = 'force-dynamic'

const truncateWords = (text: string, maxWords = 4) => {
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ') + '…'
}

const Coins = async ({ searchParams }: NextPageProps) => {
  const pageParam = searchParams?.page
  const pageStr = Array.isArray(pageParam) ? pageParam[0] : pageParam

  const currentPage = Number(pageStr) || 1
  const perPage = 20

  const coinsData = await fetcher<CoinMarketData[]>('/coins/markets', {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: perPage,
    page: currentPage,
    sparkline: 'false',
    price_change_percentage: '24h',
  })

  const columns: DataTableColumn<CoinMarketData>[] = [
    {
      header: 'Rank',
      cellClassName: 'rank-cell',
      cell: (coin) => (
        <>
          #{coin.market_cap_rank}
          <Link href={`/coins/${coin.id}`} aria-label="View coin" />
        </>
      ),
    },
    {
      header: 'Token',
      cellClassName: 'token-cell',
      cell: (coin) => {
        const fullText = `${coin.name} (${coin.symbol.toUpperCase()})`
        return (
          <div className="token-info">
            <Image src={coin.image} alt={coin.name} width={36} height={36} className="token-icon" />
            <p title={fullText}>{truncateWords(fullText, 3)}</p>
          </div>
        )
      },
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: (coin) => formatCurrency(coin.current_price),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: (coin) => {
        const isTrendingUp = coin.price_change_percentage_24h > 0

        return (
          <span
            className={cn('change-value', {
              'text-green-600': isTrendingUp,
              'text-red-500': !isTrendingUp,
            })}
          >
            {isTrendingUp && '+'}
            {formatPercentage(coin.price_change_percentage_24h)}
          </span>
        )
      },
    },
    {
      header: 'Market Cap',
      headClassName: 'market-cap-cell',
      cellClassName: 'market-cap-cell',
      cell: (coin) => formatCurrency(coin.market_cap),
    },
  ]

  const hasMorePages = coinsData.length === perPage

  const estimatedTotalPages = currentPage >= 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100

  return (
    <main id="coins-page">
      <div className="content">
        <h4>All Coins</h4>

        <DataTable
          tableClassName="coins-table"
          columns={columns}
          data={coinsData}
          rowKey={(coin) => coin.id}
        />
        <CoinsPagination
          currentPage={currentPage}
          totalPages={estimatedTotalPages}
          hasMorePages={hasMorePages}
        />
      </div>
    </main>
  )
}

export default Coins
