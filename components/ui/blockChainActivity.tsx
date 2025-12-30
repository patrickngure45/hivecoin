import React from 'react'

const BlockchainActivity = () => {
  // Mock Data extracted from the HTML
  const transactions = [
    {
      user: 'aggroed',
      action: 'played Splinterlands',
      hash: '33af7c335c8916af686c75853f907cb085ef6911',
    },
    {
      user: 'beaker007',
      action: 'played Splinterlands',
      hash: '12a2bbefe0780bd0b04df26f67642a4e7214a1a3',
    },
    {
      user: 'baex',
      action: 'traded on Hive Engine',
      hash: 'b3679c17ae711a497b7ec6770c3a1ba6b53226c0',
    },
    {
      user: 'thank2u',
      action: 'played Splinterlands',
      hash: 'b4424c1548e48c56e59eb2f3333c9d72b73c71b1',
    },
    {
      user: 'dr-animation',
      action: 'traded on Hive Engine',
      hash: '4635928cecaf1f0c3223cc50e6d90956f357d77c',
    },
  ]

  // Helper to truncate hash
  const truncateHash = (hash: string): string => `${hash.substring(0, 4)}...${hash.substring(hash.length - 4)}`

  return (
    <div className="w-full relative mb-[50px] bg-[#121212]/80 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-800 rounded-3xl p-6 max-[600px]:bg-transparent max-[600px]:backdrop-blur-none max-[600px]:shadow-none max-[600px]:border-none max-[600px]:p-0">
      {/* CSS for Fade In Animation */}
      <style>{`
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header Section */}
      <div className="flex items-center justify-between mb-6 max-[600px]:px-2">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-white max-[600px]:text-gray-100">
            Blockchain Activity
          </h3>
          <a
            href="https://hivehub.dev/b/102494038"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-500 max-[600px]:text-gray-400 hover:text-[#DC2626] transition-colors"
          >
            #102,494,038
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
          </div>
          <span className="text-sm font-semibold text-[#22c55e] uppercase tracking-wide">Live</span>
        </div>
      </div>

      {/* Transaction List */}
      {/* Converted from absolute positioning to a flexible column for better React maintenance */}
      <div className="relative flex flex-col gap-0 min-h-[360px]">
        {transactions.map((tx, index) => (
          <a
            key={index}
            href={`https://hivehub.dev/tx/${tx.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#1F1F1F] max-[600px]:bg-[#1F1F1F] backdrop-blur-sm border border-gray-800 rounded-xl px-5 py-4 transition-all duration-400 hover:bg-[#262626] hover:border-gray-700 cursor-pointer animate-fade-in mb-4 last:mb-0"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <img
                alt={tx.user}
                className="w-12 h-12 rounded-full shrink-0 bg-gray-700 object-cover ring-2 ring-[#1F1F1F]"
                src={`https://images.hive.blog/u/${tx.user}/avatar/small`}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none'
                }} // Fallback handling if needed
              />

              <div className="flex-1 min-w-0 flex flex-col">
                <span className="text-sm font-bold text-gray-100 truncate">{tx.user}</span>
                <span className="text-sm text-gray-400 truncate">{tx.action}</span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <span className="text-xs text-gray-600 group-hover:text-[#DC2626] font-mono transition-colors">
                  {truncateHash(tx.hash)}
                </span>
                <span className="text-sm text-gray-500 group-hover:text-[#DC2626] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BlockchainActivity
