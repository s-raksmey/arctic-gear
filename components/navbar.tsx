'use client';

import Link from 'next/link';
import { Menu, ShoppingCart, Search, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  {
    title: 'Winter Clothing',
    href: '/winter-clothing',
    description: 'Premium winter clothing for extreme conditions',
    items: [
      { title: 'Winter Jackets', href: '/winter-clothing/winter-jackets' },
      { title: 'Thermal Underwear', href: '/winter-clothing/thermal-underwear' },
      { title: 'Snow Pants', href: '/winter-clothing/snow-pants' },
      { title: 'Winter Accessories', href: '/winter-clothing/winter-accessories' },
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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AG</span>
          </div>
          <span className="font-bold text-xl">Arctic Gear</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={category.href}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {category.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-1">
                      {category.items.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
