'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { getCandlestickConfig, getChartConfig, PERIOD_BUTTONS, PERIOD_CONFIG } from '@/constants'
import { CandlestickSeries, createChart, IChartApi, ISeriesApi } from 'lightweight-charts'
import { convertOHLCData } from '@/lib/utils'

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = 'daily',
}: CandlestickChartProps) => {
  const [loading, setLoading] = useState(false)
  const [period, setPeriod] = useState(initialPeriod)
  const [ispending, startTransition] = useTransition()
  const [ohlcData, setOhlcData] = useState<OHLCData[]>(data ?? [])
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)

  const fetchOHLCData = async (selectedPeriod: Period) => {
    try {
      const { days } = PERIOD_CONFIG[selectedPeriod]
      const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY
      const url = new URL(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc`)
      url.searchParams.set('vs_currency', 'usd')
      url.searchParams.set('days', String(days))

      const res = await fetch(url.toString(), {
        headers: apiKey ? { 'x-cg-demo-api-key': apiKey } : undefined,
        cache: 'no-store',
      })
      if (!res.ok) throw new Error(`Failed to fetch OHLC: ${res.status}`)
      const newData = (await res.json()) as OHLCData[]
      setOhlcData(newData ?? [])
    } catch (e) {
      console.error('Failed to fetchOHLCData', e)
    }
  }
  const handlePeriodChange = (newPeriod: Period) => {
    if (newPeriod === period) return
    startTransition(async () => {
      setPeriod(newPeriod)
      await fetchOHLCData(newPeriod)
    })
  }
  useEffect(() => {
    const container = chartContainerRef.current
    if (!container) return
    const showTime = ['daily', 'weekly', 'monthly'].includes(period)
    const chart = createChart(container, {
      ...getChartConfig(height, showTime),
      width: container.clientWidth,
    })
    const series = chart.addSeries(CandlestickSeries, getCandlestickConfig())
    const initialSeconds = ohlcData.map((pitem) => [Math.floor(pitem[0] / 1000), pitem[1], pitem[2], pitem[3], pitem[4]] as OHLCData)
    series.setData(convertOHLCData(initialSeconds))
    chart.timeScale().fitContent()
    chartRef.current = chart
    candleSeriesRef.current = series
    const observer = new ResizeObserver((entries) => {
      if (!entries.length) return
      chart.applyOptions({ width: entries[0].contentRect.width })
    })
    observer.observe(container)
    return () => {
      observer.disconnect()
      chart.remove()
      chartRef.current = null
      candleSeriesRef.current = null
    }
  }, [height])
  useEffect(() => {
    if (!candleSeriesRef.current) return
    const convertToSeconds = ohlcData.map(
      (pitem) => [Math.floor(pitem[0] / 1000), pitem[1], pitem[2], pitem[3], pitem[4]] as OHLCData,
    )
    const converted = convertOHLCData(convertToSeconds)
    candleSeriesRef.current.setData(converted)
    chartRef.current?.timeScale().fitContent()
  }, [ohlcData, period])
  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>
        <div className="button-group">
          <span className="text-sm mx-2 font-medium text-purple-100/50">Period:</span>
          {PERIOD_BUTTONS.map(({ value, label }) => (
            <button
              key={value}
              className={period === value ? 'config-button-active' : 'config-button'}
              onClick={() => handlePeriodChange(value)}
              disabled={loading}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div ref={chartContainerRef} className="chart" style={{ height }} />
    </div>
  )
}
export default CandlestickChart
