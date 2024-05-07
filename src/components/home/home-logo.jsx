
import Image from 'next/image'
import React from 'react'
import { LogoCon } from '../constants/constant'

const HomeLogo = () => {
  return (
    <section className="flex space-x-[100px] justify-center">
        {LogoCon.map((item, index) => (
            <Image 
               key={index} 
               src={item.icon} 
               alt="logo" 
               className="mx-4"
               width={165.725}
               height={40}
               />
        ))}
    </section>
  )
}

export default HomeLogo