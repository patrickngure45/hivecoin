import React from 'react'

// Sub-component: The Circular Progress Chart
const DonutChart = ({ percentage, color, staked, liquid }) => {
  // Calculating the circumference based on r=72 (2 * PI * 72 ≈ 452.39)
  const circumference = 452.3893421169302
  // The HTML provided specific offsets. We approximate the visual logic here.
  // HIVE (42%) -> Offset ~262, HBD (77%) -> Offset ~103
  const getOffset = (percent) => {
    const num = parseInt(percent)
    if (num === 42) return 262.45
    if (num === 77) return 103.82
    return circumference // Default empty
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: '160px', height: '160px' }}>
        <svg width="160" height="160" className="transform -rotate-90">
          <circle cx="80" cy="80" r="56" fill={color} fillOpacity="0.04"></circle>
          <circle
            cx="80"
            cy="80"
            r="72"
            fill="none"
            stroke={color}
            strokeWidth="16"
            className="opacity-20"
          ></circle>
          <circle
            cx="80"
            cy="80"
            r="72"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeDasharray={circumference}
            strokeDashoffset={getOffset(percentage)}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            style={{ filter: `drop-shadow(${color}33 0px 0px 8px)` }} // Adding transparency to shadow
          ></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}</span>
          <span className="text-sm text-gray-400 font-medium">Staked</span>
        </div>
      </div>
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Staked</span>
            <span className="text-white font-semibold">{staked}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: color }}></div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Liquid</span>
            <span className="text-white font-semibold">{liquid}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sub-component: The Individual Token Card
const TokenCard = ({ data }) => {
  const { title, badge, color, image, btnText, features, chart } = data

  return (
    <div
      className="group relative rounded-3xl p-5 sm:p-10 overflow-hidden transition-all duration-500"
      style={{
        background: `linear-gradient(to right bottom, ${color}1A, ${color}0D)`, // Adding transparency to hex
        border: `1px solid ${color}4D`,
        boxShadow: 'none',
      }}
    >
      {/* Hover Overlay Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to top, ${color}1A, transparent, transparent)` }}
      ></div>

      <div className="relative flex flex-col md:flex-row gap-8">
        {/* Left Content: Info & Features */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: color }}
              ></div>
              <img
                alt={title}
                className="relative w-20 h-20 min-w-20 min-h-20 drop-shadow-lg object-contain"
                src={image}
              />
            </div>
            <div>
              <div className="flex items-center gap-6">
                <h3 className="text-4xl font-bold text-white">{title}</h3>
                <button
                  className="px-4 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:brightness-125 cursor-pointer"
                  style={{
                    backgroundColor: `${color}33`,
                    border: `1px solid ${color}`,
                    color: color,
                  }}
                >
                  {btnText}
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: color }}
                >
                  {badge}
                </span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${color}33` }}
                >
                  <div style={{ color: color }}>{feat.icon}</div>
                </div>
                <span className="text-gray-300">
                  {feat.highlight ? (
                    <span className="flex items-center gap-2 flex-wrap">
                      <span className="whitespace-nowrap flex items-center gap-2">
                        {feat.prefix}{' '}
                        <span className={`text-2xl font-bold mt-[-2px]`} style={{ color: color }}>
                          {feat.highlight}
                        </span>
                      </span>
                      <span className="whitespace-nowrap">{feat.suffix}</span>
                    </span>
                  ) : (
                    feat.text
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Chart */}
        <div className="flex flex-col items-center justify-center md:items-end">
          <DonutChart
            percentage={chart.percent}
            color={color}
            staked={chart.staked}
            liquid={chart.liquid}
          />
        </div>
      </div>
    </div>
  )
}

// Main Tokenomics Component
const Tokenomics = () => {
  // Data Definition
  const tokens = [
    {
      title: 'HIVE',
      badge: 'Utility & Governance',
      color: '#DC2626', // Theme Red
      image: 'https://hive.io/images/circle_hive_red.png',
      btnText: 'Buy',
      features: [
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          text: 'Powers all transactions',
        },
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          text: 'Stake to vote on governance',
        },
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          ),
          text: '', // Empty main text, using highlight
          prefix: 'Up to',
          highlight: '20%',
          suffix: 'Staking Rewards',
        },
      ],
      chart: { percent: '42%', staked: '200.1M', liquid: '276.6M' },
    },
    {
      title: 'HBD',
      badge: 'Stablecoin',
      color: '#22c55e', // Theme Green (Emerald)
      image: 'https://hive.io/images/hbd.svg',
      btnText: 'Buy',
      features: [
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          text: 'Algorithmic peg to USD',
        },
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          ),
          text: 'Backed by HIVE',
        },
        {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          ),
          text: 'Earn',
          highlight: '15% APR',
          suffix: '', // Empty suffix
        },
      ],
      chart: { percent: '77%', staked: '8.4M', liquid: '2.5M' },
    },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-[#050505] to-[#0A0A0A] py-24 px-6 sm:px-10 font-sans antialiased">
      <div className="max-w-screen-2xl mx-auto min-h-[480px] flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Tokenomics<span className="text-[#DC2626]">.</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            A dual-coin economy built for real utility. HIVE powers the network and rewards
            participation. HBD provides stability for commerce and savings.
          </p>
        </div>

        {/* Token Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {tokens.map((token, index) => (
            <TokenCard key={index} data={token} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
