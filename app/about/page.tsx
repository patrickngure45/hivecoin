'use client'
import React, { useState } from 'react'
import StatsGrid from '@/components/ui/transactionStatsGrid'
import BlockchainActivity from '@/components/ui/blockChainActivity'
import HeroSection from '@/components/ui/HeroSection'
import Tokenomics from '@/components/ui/Tokenomics'
import OurOrigins from '@/components/ui/ourOrigins'
import CommunityMarquee from '@/components/ui/CommunityMarquee'
import Footer from '@/components/ui/Footer'
import ListedExchanges from '@/components/ui/ListedExchanges'

const SignUp = () => {
  // State for Password Visibility Toggle
  const [showPassword, setShowPassword] = useState(false)

  // State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  })

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target
    const name = (target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)
      .name as keyof typeof formData
    const value = (target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value
    const type = (target as HTMLInputElement).type
    const checked = (target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    alert('Sign up simulated!')
  }

  return (
    <main className="container py-6">
      <div className="bg-[#050505] text-[#E5E5E5] font-sans antialiased min-h-screen flex flex-col md:flex-row overflow-hidden selection:bg-[#DC2626] selection:text-white relative">
        {/* CSS Styles for Animations & Custom Scrollbar */}
        <style>{`
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #000;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #DC2626;
        }
        
        /* Smooth fade in animation */
        .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        @keyframes fadeIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>

        {/* LEFT SIDE: Branding & Visual */}
        <div
          className="hidden md:flex md:w-1/2 lg:w-3/5 bg-[#121212] relative overflow-hidden flex-col justify-between p-12"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        >
          {/* Background Gradient Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-[#121212] opacity-80 z-0 pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2626] rounded-full blur-[128px] opacity-10 z-0 pointer-events-none"></div>

          {/* Top Logo Area */}
          <div
            className="relative z-10 flex items-center gap-3 fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-10 h-10 bg-[#DC2626] flex items-center justify-center transform rotate-45 shadow-lg shadow-red-900/50">
              <i className="fa-solid fa-cubes text-white text-xl transform -rotate-45"></i>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">HIVE</span>
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-lg fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unlock the power of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Liquidity
              </span>
              .
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Join the Hive Liquidity Programme to maximize yields, stake assets, and participate in
              decentralized governance with institutional-grade security.
            </p>

            {/* Stats / Trust Signals */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">$4.2B+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">TVL</div>
              </div>
              <div className="w-px h-12 bg-gray-800"></div>
              <div>
                <div className="text-3xl font-bold text-white">120K+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Hive Members</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            className="relative z-10 text-gray-600 text-sm fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            &copy; 2020 Hive Protocol. All rights reserved.
          </div>
        </div>

        {/* RIGHT SIDE: Sign Up Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-[#050505] flex flex-col justify-center items-center p-8 lg:p-12 relative z-20 overflow-y-auto">
          {/* Mobile Logo */}
          <div className="md:hidden mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#DC2626] flex items-center justify-center transform rotate-45">
              <i className="fa-solid fa-cubes text-white text-sm transform -rotate-45"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">HIVE</span>
          </div>

          <div className="w-full max-w-md fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-gray-400">Enter your details to join the liquidity hive.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-regular fa-user text-gray-500"></i>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-lg bg-[#1F1F1F] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#DC2626] focus:border-[#DC2626] transition-colors sm:text-sm"
                    placeholder="e.g. Alex Voyager"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-regular fa-envelope text-gray-500"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-lg bg-[#1F1F1F] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#DC2626] focus:border-[#DC2626] transition-colors sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-lock text-gray-500"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-lg bg-[#1F1F1F] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#DC2626] focus:border-[#DC2626] transition-colors sm:text-sm"
                    placeholder="••••••••"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`${showPassword ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'} text-gray-500 hover:text-white transition-colors`}
                    ></i>
                  </div>
                </div>
                {/* Password Strength Indicator (Visual) */}
                <div className="flex gap-1 mt-2">
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-[#DC2626]"></div>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full"></div>
                  <div className="h-1 w-full bg-gray-800 rounded-full"></div>
                  <div className="h-1 w-full bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-[#DC2626] focus:ring-[#DC2626] border-gray-700 bg-[#1F1F1F] rounded"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-medium text-gray-400 hover:text-white transition-colors cursor-pointer select-none"
                  >
                    I agree to the{' '}
                    <a href="#" className="text-[#DC2626] hover:text-red-400">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#DC2626] hover:text-red-400">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#991B1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505] focus:ring-[#DC2626] transition-all transform active:scale-95 mt-4"
              >
                Start Earning
              </button>
            </form>

            {/* Divider */}
            <div className="relative mt-8 mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#050505] text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-800 rounded-lg bg-[#1F1F1F] hover:bg-gray-800 text-white transition-colors">
                <i className="fa-brands fa-google text-lg"></i>
                <span className="ml-2 text-sm font-medium">Google</span>
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-800 rounded-lg bg-[#1F1F1F] hover:bg-gray-800 text-white transition-colors">
                <i className="fa-brands fa-ethereum text-lg"></i>
                <span className="ml-2 text-sm font-medium">Wallet</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-gray-400">
              Already part of the Hive?
              <a
                href="/login"
                className="font-medium text-[#DC2626] hover:text-white transition-colors"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
      <StatsGrid />
      <div className="bg-[#050505] text-[#E5E5E5] min-h-screen font-sans antialiased overflow-hidden">
        {/* Navbar (Optional simple header to frame the content) */}
        <nav className="p-6 lg:p-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#DC2626] rounded-sm transform rotate-45"></div>
            <span className="text-xl font-bold tracking-tight text-white">HIVE</span>
          </div>
        </nav>

        {/* Main Content Grid */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* LEFT SIDE: Hero Section */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <HeroSection />
            </div>

            {/* RIGHT SIDE: Blockchain Activity */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2 mt-12 lg:mt-0">
              {/* We wrap it in a w-full to ensure it stays on the right side of the grid */}
              <div className="w-full max-w-[600px]">
                <BlockchainActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tokenomics />
      <CommunityMarquee />
      <OurOrigins />
      <ListedExchanges />
    </main>
  )
}

export default SignUp
