import HomeLogo from '@/components/home/home-logo'
import H1 from '@/components/typography/h1'
import Plarge from '@/components/typography/plarge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductHero = () => {
  return (
    <section className="flex flex-col p-24 space-y-16">
        <div className="flex space-x-24">
            <div className='flex flex-col justify-center text-start space-y-10'>
                <H1>Grow your Sales and Services</H1>
                <Plarge>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Plarge>
                <div className="space-x-4">
                    <Button>Get Started</Button>
                    <Button variant="secondary">Contact us</Button>
                </div>
            </div>
            <Image src="/dashboard.svg" alt="dashboard" width={616} height={401} />
        </div>
        <HomeLogo />
    </section>
  )
}

export default ProductHero