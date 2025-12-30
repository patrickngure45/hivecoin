import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Protocol',
      links: [
        { name: 'Governance', href: '#' },
        { name: 'Tokenomics', href: '#' },
        { name: 'Whitepaper', href: '#' },
        { name: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Hive Blog', href: '#' },
        { name: 'Discord', href: '#' },
        { name: 'Developers', href: 'https://developers.hive.io/' },
        { name: 'Events', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Explorer', href: 'https://hiveblocks.com/' },
        { name: 'Wallets', href: '#' },
        { name: 'Exchanges', href: '#' },
        { name: 'Help Center', href: '#' },
      ],
    },
  ]

  const socials = [
    { name: 'Twitter', icon: 'fa-brands fa-twitter', href: '#' },
    { name: 'Discord', icon: 'fa-brands fa-discord', href: '#' },
    { name: 'GitHub', icon: 'fa-brands fa-github', href: '#' },
    { name: 'Telegram', icon: 'fa-brands fa-telegram', href: '#' },
  ]

  return (
    <footer className="bg-[#050505] border-t border-gray-800 pt-16 pb-8 font-sans antialiased">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#DC2626] flex items-center justify-center transform rotate-45 shadow-lg shadow-red-900/50">
                <i className="fa-solid fa-cubes text-white text-sm transform -rotate-45"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">HIVE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A decentralized social blockchain that powers the next generation of applications.
              Fast, feeless, and truly owned by the community.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#DC2626] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#DC2626] transition-all duration-300"
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            &copy; {currentYear} Hive Protocol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
