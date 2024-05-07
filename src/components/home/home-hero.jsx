import React from 'react'
import H1 from '../typography/h1'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'
import Plarge from '../typography/plarge'

const HomeHero = () => {
  return (
    <section className="bg-background py-24 justify-center items-center gap-8">
        <div className="text-center flex flex-col gap-10 items-center">
          <H1>The Best Software to Grow your Sales and Services</H1>
          <Plarge>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</Plarge>
          <div className="flex w-[576px] justify-end items-center font-base">
            <Input 
               type="email" 
               placeholder="Enter Your Email"
               className="flex relative py-6"
               />
            <Button className="absolute flex mr-2">Get Free Trail</Button>
          </div>
          <Image 
            src="/dashboard.svg" 
            alt="dashboard-image"
            width={1024}
            height={666.566}
          />
        </div>
          
    </section>
  )
}

export default HomeHero