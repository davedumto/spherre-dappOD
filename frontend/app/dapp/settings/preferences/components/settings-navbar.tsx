'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SettingsNavbar() {
  const pathname = usePathname()

  const tabs = [
    { name: 'Profile', href: '/dapp/settings/profile' },
    { name: 'Wallet & Account', href: '/dapp/settings/wallet' },
    { name: 'Preferences', href: '/dapp/settings/preferences' },
    { name: 'Security', href: '/dapp/settings/security' },
    { name: 'Smart Lock', href: '/dapp/settings/smart-lock' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="border-b font-sans border-gray-800 bg-[#1C1D1F] py-2 px-2 sm:py-2.5 sm:px-8 w-full rounded-md overflow-hidden">
      <div className="flex space-x-2 sm:space-x-5 2xl:space-x-10 max-w-7xl overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`relative px-3 sm:px-4 py-2 sm:py-1 text-xs sm:text-sm font-bold transition-all duration-200 ease-in-out group rounded-md whitespace-nowrap ${
              isActive(tab.href)
                ? 'text-white bg-[#a259ff]'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#7d5fff] bg-transparent'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
