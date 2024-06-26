import H2 from '@/components/typography/h2'
import Label from '@/components/typography/label'
import P from '@/components/typography/paragraph'

import Image from 'next/image'
import React from 'react'

const ProductMarket = () => {
  return (
    <section className="px-32 gap-24 flex">
        <div className='space-y-6 flex flex-col justify-center w-[576px]'>
            <Label>Marketing insights</Label>
            <H2>Data-driven client feedback</H2>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</P>
        </div>
        <Image 
            src="/images/image1.png"
            alt="feature"
            width={576}
            height={435}
        />
    </section>
  )
}

export default ProductMarket