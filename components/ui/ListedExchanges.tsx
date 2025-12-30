import React from 'react'

const ListedExchanges = () => {
  // Data extracted from the provided HTML
  const exchanges = [
    {
      name: 'Binance',
      url: 'https://www.binance.com/en/trade/HIVE_USDT',
      img: '/images/exchanges/binance.svg',
    },
    {
      name: 'Bitget',
      url: 'https://www.bitget.com/spot/HIVEUSDT',
      img: '/images/exchanges/bitget.svg',
    },
    {
      name: 'Bithumb',
      url: 'https://www.bithumb.com/react/trade/order/HIVE-KRW',
      img: '/images/exchanges/bithumb.png',
    },
    {
      name: 'Bitpanda',
      url: 'https://www.bitpanda.com/en/prices/hive-hive',
      img: '/images/exchanges/bitpanda.png',
    },
    {
      name: 'Bitrue',
      url: 'https://www.bitrue.com/futures/HIVE',
      img: '/images/exchanges/bitrue.png',
    },
    {
      name: 'Bydfi',
      url: 'https://www.bydfi.com/en/spot/hive_usdt',
      img: '/images/exchanges/bydfi.png',
    },
    { name: 'Changelly', url: 'https://changelly.com', img: '/images/exchanges/changelly.png' },
    {
      name: 'ChangeNow',
      url: 'https://changenow.io/?from=usdc&to=hive',
      img: '/images/exchanges/changenow.png',
    },
    {
      name: 'CoinDCX',
      url: 'https://coindcx.com/trade/HIVEINR',
      img: '/images/exchanges/coindcx.svg',
    },
    {
      name: 'CoinEx',
      url: 'https://www.coinex.com/en/exchange/HIVE-USDT',
      img: '/images/exchanges/coinex.png',
    },
    { name: 'CoinoSwap', url: 'https://www.coinoswap.com', img: '/images/exchanges/coinoswap.png' },
    {
      name: 'Digifinex',
      url: 'https://www.digifinex.io/en-ww/trade/USDT/HIVE',
      img: '/images/exchanges/digifinex.svg',
    },
    {
      name: 'EasyBit',
      url: 'https://easybit.com/en/coin-specs/HIVE',
      img: '/images/exchanges/easybit.svg',
    },
    {
      name: 'gate.io',
      url: 'https://www.gate.io/trade/HIVE_USDT',
      img: '/images/exchanges/gateio.svg',
    },
    { name: 'HitBTC', url: 'https://hitbtc.com/HIVE-to-USDT', img: '/images/exchanges/hitbtc.png' },
    {
      name: 'Hive Engine',
      url: 'https://hive-engine.com/?p=market&t=SWAP.HIVE',
      img: '/images/exchanges/hive-engine.png',
    },
    { name: 'HTX', url: 'https://www.htx.com/trade/hive_usdt', img: '/images/exchanges/HTX.svg' },
    {
      name: 'Indodax',
      url: 'https://indodax.com/market/HIVEIDR',
      img: '/images/exchanges/indodax.png',
    },
    {
      name: 'KCEX',
      url: 'https://www.kcex.com/futures/exchange/HIVE_USDT',
      img: '/images/exchanges/kcex.svg',
    },
    {
      name: 'LCX',
      url: 'https://exchange.lcx.com/sv/trade/HIVE-EUR',
      img: '/images/exchanges/LCX.png',
    },
    {
      name: 'MEXC',
      url: 'https://www.mexc.com/exchange/HIVE_USDT?_from=market',
      img: '/images/exchanges/mxc.png',
    },
    {
      name: 'Nami.Exchange',
      url: 'https://nami.exchange/vi/trade/HIVE-VNST',
      img: '/images/exchanges/nami.webp',
    },
    {
      name: 'Pionex',
      url: 'https://www.pionex.com/en/trade/HIVE_USDT/Manual',
      img: '/images/exchanges/pionex.png',
    },
    {
      name: 'SimpleSwap',
      url: 'https://simpleswap.io/exchange?from=btc-btc&to=hive-hive',
      img: '/images/exchanges/simpleswap.png',
    },
    {
      name: 'StealthEX',
      url: 'https://stealthex.io/coin/hive',
      img: '/images/exchanges/StealthEX.png',
    },
    {
      name: 'SwapSpace',
      url: 'https://swapspace.co/?from=btc&to=hive&amount=0.1',
      img: '/images/exchanges/swapspace.svg',
    },
    {
      name: 'Swapzone',
      url: 'https://swapzone.io/?to=hive',
      img: '/images/exchanges/swapzone.svg',
    },
    {
      name: 'Tokocrypto',
      url: 'https://tokocrypto.com/en/trade/HIVE_USDT',
      img: '/images/exchanges/tokocrypto.png',
    },
    {
      name: 'UPbit',
      url: 'https://upbit.com/exchange?code=CRIX.UPBIT.BTC-HIVE',
      img: '/images/exchanges/upbit.svg',
    },
    {
      name: 'WazirX',
      url: 'https://wazirx.com/exchange/HIVE-USDT',
      img: '/images/exchanges/wazirx.png',
    },
    {
      name: 'WEEX',
      url: 'https://www.weex.com/futures/HIVE-USDT',
      img: '/images/exchanges/weex.svg',
    },
    { name: 'XBTS', url: 'https://app.xbts.io/#/pools?a=hive', img: '/images/exchanges/xbts.png' },
    { name: 'XT', url: 'https://www.xt.com/en/trade/hive_usdt', img: '/images/exchanges/xt.png' },
  ]

  return (
    <section
      id="exchanges"
      className="w-full bg-gradient-to-b from-[#050505] to-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 font-sans antialiased"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Listed Exchanges</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-[700px] mx-auto leading-relaxed">
            Trade HIVE on 40+ exchanges worldwide. Maximum liquidity, maximum accessibility.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {exchanges.map((exchange, index) => (
            <a
              key={index}
              href={exchange.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={exchange.name}
              // Using the exact responsive width logic from the provided HTML
              className={`
                flex items-center justify-center h-20 
                w-[calc(50%-8px)] 
                sm:w-[calc(33.333%-11px)] 
                md:w-[calc(25%-12px)] 
                lg:w-[calc(20%-13px)] 
                xl:w-[calc(16.666%-14px)] 
                
                bg-[#121212] border border-gray-800 rounded-xl 
                transition-all duration-300 
                hover:bg-[#1F1F1F] hover:border-[#DC2626] hover:shadow-lg hover:-translate-y-1
              `}
            >
              <img
                alt={exchange.name}
                className="max-h-8 max-w-[65%] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                loading="lazy"
                src={exchange.img}
                // Fallback for broken images
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const parent = img.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="text-xs font-bold text-gray-500">${exchange.name}</span>`
                  }
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListedExchanges
