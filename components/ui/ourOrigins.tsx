import React from 'react'

type Article = {
  title: string
  description: string
  source: string
  date: string
  url: string
  style: 'dark' | 'red'
  icon: React.ReactNode
}

const OurOrigins = () => {
  // Data for the articles
  const articles: Article[] = [
    {
      title: 'The Great Steem Wars',
      description: "Inside Crypto's Biggest Hostile Takeover",
      source: 'DECRYPT',
      date: 'Aug 2020',
      url: 'https://decrypt.co/38050/steem-steemit-tron-justin-sun-cryptocurrency-war',
      style: 'dark', // Determines the gradient and text colors
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: 'The Fork That Won',
      description: 'How Hive Outperformed Steemit',
      source: 'DECRYPT',
      date: 'Mar 2020',
      url: 'https://decrypt.co/23854/hive-decentralized-fork-outperforms-steemit',
      style: 'red', // Determines the gradient and text colors
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ]

  // Types
  type Article = {
    title: string
    description: string
    source: string
    date: string
    url: string
    style: 'dark' | 'red'
    icon: React.ReactNode
  }

  // Sub-component for the Article Cards
  const ArticleCard = ({ article }: { article: Article }) => {
    // Styles for "Dark" style card (Left card in HTML)
    if (article.style === 'dark') {
      return (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-[#262626] to-[#1A1A1A] border border-gray-800 hover:shadow-2xl hover:shadow-[#DC2626]/20 transition-all duration-300 hover:-translate-y-1 hover:border-gray-700"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#DC2626]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {article.icon}
                </svg>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="font-medium text-white">{article.source}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#DC2626] transition-colors leading-snug mb-2 flex items-center gap-2">
              {article.title}
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </h3>
            <p className="text-sm text-gray-400">{article.description}</p>
          </div>
        </a>
      )
    }

    // Styles for "Red" style card (Right card in HTML)
    return (
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#991B1B] hover:shadow-2xl hover:shadow-[#DC2626]/40 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {article.icon}
              </svg>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="font-medium text-white">{article.source}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white leading-snug mb-2 flex items-center gap-2">
            {article.title}
            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </h3>
          <p className="text-sm text-white/80">{article.description}</p>
        </div>
      </a>
    )
  }

  return (
    <div className="w-full py-24 px-6 sm:px-10 bg-[#050505] font-sans antialiased">
      <div className="max-w-screen-2xl mx-auto min-h-[480px] flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Our Origins<span className="text-[#DC2626]">.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              In March 2020, a hostile takeover threatened to centralize a blockchain. The community
              refused. We forked, taking our code, our content, and our principles with us.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              <span className="font-semibold text-white">Hive was born</span>—a chain owned by no
              one and governed by everyone.
            </p>
          </div>

          {/* Right Column: Article Cards */}
          <div className="flex flex-col gap-5">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurOrigins
