import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Header() {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Explore',
      path: '/explore'
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/contact'
    },
  ]
  return (
<header class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center gap-1 md:flex md:items-center md:gap-1">
      <Image src='/logo.svg' alt='logo' className='w-7 h-5 md:w-10 md:h-8'
         width={150} height={80}
      />
      <p className='text-lg md:text-2xl font-normal text-primary'>ZoneDoctor</p>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
          {Menu.map((item,index) => (
           <Link href={item.path}>
          <li className='sm:text-lg text-lg hover:underline hover:scale-105 transition-all ease-in-out hover:text-primary hover:cursor-pointer'>{item.name}</li>
          </Link>
         ))}
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <Button>Get Started</Button>
        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
)
}

export default Header;
