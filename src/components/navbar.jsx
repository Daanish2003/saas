import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { NavMenu } from './constants/constant'

const Navbar = () => {
  return (
    <nav className="px-20 flex justify-between items-center h-[71px]">
        <Image 
           src="/logo.svg" 
           alt="logo" 
           width={140} 
           height={28.354}
        />
        <div className="flex gap-8 items-center">
           <ul className='flex gap-8'>
           {NavMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
           </ul>
           <Button className="px-10 py-4 rounded-xl">Free Trail</Button>
        </div>
    </nav>
  )
}

export default Navbar