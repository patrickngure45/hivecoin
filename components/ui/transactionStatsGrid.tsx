import React from 'react'

const StatsGrid = () => {
  // Data extracted from the HTML for cleaner rendering
  const stats = [
    {
      label: 'Transactions',
      value: '4,081,215,615',
      iconPath: 'M4 7h16M4 12h16M4 17h16', // List/Menu icon
    },
    {
      label: 'Market Cap',
      value: '$60.19M',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', // Trending Up icon
    },
    {
      label: 'TVL',
      value: '$29.06M',
      iconPath:
        'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Currency icon
    },
    {
      label: 'Accounts',
      value: '2.6M',
      iconPath:
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', // Users icon
    },
    {
      label: 'Uptime (Days)',
      value: '3,567',
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Clock icon
    },
  ]

  return (
    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:flex
      lg:justify-between
      gap-6
      lg:gap-12
      pt-8
      max-[600px]:pt-4
      border-t
      border-gray-800
      mt-12
      max-[600px]:mt-2
      mb-12
      max-[600px]:mb-10
      font-sans
      antialiased
    "
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          {/* Label & Icon */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <svg
              className="w-5 h-5 max-[600px]:hidden text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={stat.iconPath}
              />
            </svg>
            <span className="font-medium">{stat.label}</span>
          </div>

          {/* Value */}
          <div className="text-4xl max-[600px]:text-2xl lg:w-[255px] font-bold text-white tracking-tight">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsGrid
