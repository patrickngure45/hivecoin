'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import SearchModal from '@/components/ui/SearchModal'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-dark-900/90 border-b border-red-500/40 backdrop-blur supports-[backdrop-filter]:bg-dark-900/70">
      <div className="container inner flex items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-1 sm:gap-2"
          aria-label="Hive Liquidity home"
        >
          <Image
            src="/logo.svg"
            alt="Hive Liquidity logo"
            width={80}
            height={40}
            className="opacity-95 group-hover:opacity-100 transition-opacity"
          />

          <span className="text-white font-semibold tracking-tight leading-none text-lg sm:text-xl whitespace-nowrap">
            Hive <span className="text-red-500">Liquidity</span>
          </span>
        </Link>

        <nav>
          <Link
            href="/"
            className={cn(
              'nav-link flex-shrink-0 px-2 sm:px-3 py-2 border-b-2 border-transparent text-gray-300 hover:text-red-400 hover:border-red-500/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-sm',
              pathname === '/' && 'text-white border-red-500',
              'is-home',
              { 'is-active': pathname === '/' },
            )}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            href="/coins"
            className={cn(
              'nav-link flex-shrink-0 px-2 sm:px-3 py-2 border-b-2 border-transparent text-gray-300 hover:text-red-400 hover:border-red-500/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-sm',
              pathname === '/coins' && 'text-white border-red-500',
              { 'is-active': pathname === '/coins' },
            )}
            aria-current={pathname === '/coins' ? 'page' : undefined}
          >
            All Coins
          </Link>
          <Link
            href="/about"
            className={cn(
              'nav-link flex-shrink-0 px-2 sm:px-3 py-2 border-b-2 border-transparent text-gray-300 hover:text-red-400 hover:border-red-500/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-sm',
              pathname === '/coins' && 'text-white border-red-500',
              { 'is-active': pathname === '/about' },
            )}
            aria-current={pathname === '/about' ? 'page' : undefined}
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
