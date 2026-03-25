'use client';

import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  Search,
  ShoppingCart,
  Twitter,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

const categories = [
  {
    title: 'Winter Clothing',
    href: '/winter-clothing',
    description: 'Premium winter clothing for extreme conditions',
    items: [
      { title: 'Winter Jackets', href: '/winter-clothing/winter-jackets' },
      {
        title: 'Thermal Underwear',
        href: '/winter-clothing/thermal-underwear',
      },
      { title: 'Snow Pants', href: '/winter-clothing/snow-pants' },
      {
        title: 'Winter Accessories',
        href: '/winter-clothing/winter-accessories',
      },
    ],
  },
  {
    title: 'Footwear',
    href: '/footwear',
    description: 'Arctic-ready boots and footwear',
    items: [
      { title: 'Snow Boots', href: '/footwear/snow-boots' },
      { title: 'Ice Cleats', href: '/footwear/ice-cleats' },
      { title: 'Thermal Socks', href: '/footwear/thermal-socks' },
      { title: 'Boot Accessories', href: '/footwear/boot-accessories' },
    ],
  },
  {
    title: 'Equipment',
    href: '/equipment',
    description: 'Essential arctic survival equipment',
    items: [
      { title: 'Sleeping Bags', href: '/equipment/sleeping-bags' },
      { title: 'Tents', href: '/equipment/tents' },
      { title: 'Heating Devices', href: '/equipment/heating-devices' },
      { title: 'Navigation Tools', href: '/equipment/navigation-tools' },
    ],
  },
];

export function Navbar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenCategory(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenCategory(null);
    }, 100);
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <div className="relative">
        {/* Top Bar with Social Media Icons - Inside the main container */}
        <div className="mb-2 flex items-center justify-end gap-4 px-2">
          <span className="text-xs text-white/50">Join our community</span>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Twitter className="h-4 w-4" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Facebook className="h-4 w-4" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </Link>
        </div>

        {/* Main Navbar Bar */}
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-6 shadow-lg backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-linear-to-br flex h-9 w-9 items-center justify-center rounded-full from-blue-500 to-cyan-400 shadow-md">
              <span className="text-sm font-bold text-white">AG</span>
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">
              Arctic Accessories
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {categories.map(category => (
              <div
                key={category.title}
                onMouseEnter={() => handleMouseEnter(category.title)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 ${
                    openCategory === category.title ? 'bg-white/10' : ''
                  }`}
                >
                  {category.title}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openCategory === category.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ))}

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-white transition hover:text-blue-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-white transition hover:text-blue-300"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Full-width Dropdown */}
        {openCategory && (
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="animate-in fade-in slide-in-from-top-2 absolute left-0 right-0 top-[calc(100%+6px)] rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-xl duration-150"
          >
            {categories
              .filter(c => c.title === openCategory)
              .map(category => (
                <div key={category.title} className="p-6">
                  {/* Header */}
                  <div className="mb-4 border-b border-white/10 pb-4">
                    <Link
                      href={category.href}
                      onClick={() => setOpenCategory(null)}
                      className="group inline-flex flex-col"
                    >
                      <span className="text-base font-semibold text-white transition-colors group-hover:text-blue-300">
                        {category.title}
                      </span>
                      <span className="text-sm text-white/50">
                        {category.description}
                      </span>
                    </Link>
                  </div>

                  {/* Items — pipe separated, no border */}
                  <div className="flex items-center">
                    {category.items.map((item, index) => (
                      <div key={item.title} className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setOpenCategory(null)}
                          className="px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                          {item.title}
                        </Link>
                        {index < category.items.length - 1 && (
                          <span className="select-none text-white/20">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </header>
  );
}
