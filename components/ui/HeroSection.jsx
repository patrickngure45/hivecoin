import React from 'react'

const HeroSection = () => {
  return (
    <div className="text-center xl:text-left mt-8 xl:mt-0 xl:flex-1 2xl:flex-none">
      {/* Main Headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-1 max-[600px]:text-5xl max-[600px]:mb-2 text-white">
        Fast <span className="text-[#DC2626]">&amp;</span> Scalable
        <span className="text-[#DC2626]">.</span>
      </h1>

      {/* Sub Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 max-[600px]:text-2xl h-[1.2em] whitespace-nowrap w-full md:w-full lg:w-auto">
        Your Ent
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-400 mt-8 mb-8 max-w-[650px] max-[600px]:text-base max-[600px]:mb-6 text-justify md:text-left xl:text-left">
        Hive is a decentralized, scalable, high-speed blockchain with zero fees and near-instant
        transactions—powering social apps, games, and financial tools built for everyone.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 max-[600px]:mb-8 xl:mt-12">
        <a
          href="https://developers.hive.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 w-[220px] max-[600px]:w-[180px] py-4 bg-[#DC2626] text-white font-semibold rounded-full overflow-hidden text-lg max-[600px]:text-base max-[600px]:py-3 shadow-lg shadow-red-900/20 transition-all hover:scale-105"
        >
          <span className="absolute inset-0 bg-[#991B1B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10">Start Building</span>
          <span className="relative z-10 text-2xl transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="https://peakd.com/trending"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[220px] max-[600px]:w-[180px] py-4 bg-[#1F1F1F] border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-[#DC2626] hover:text-white hover:bg-[#262626] transition-colors duration-200 text-lg max-[600px]:text-base max-[600px]:py-3 text-center"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default HeroSection
