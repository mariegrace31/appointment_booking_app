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
    <div className='flex justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-72'>
      <div className='flex gap-1 items-center'>
      <Image src='/logo.svg' alt='logo' className='w-10 h-8'
        width={150} height={80}
      />
      <p className='text-3xl font-normal text-primary'>ZoneDoctor</p>
      </div>
      <ul className='md:flex gap-8 hidden'>
        {Menu.map((item,index) => (
          <Link href={item.path}>
          <li className='text-lg hover:underline hover:scale-105 transition-all ease-in-out hover:text-primary hover:cursor-pointer'>{item.name}</li>
          </Link>
        ))}
      </ul>
      </div>
      <Button>Get Started</Button>

    </div>
  )
}

export default Header;
