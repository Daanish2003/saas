import H2 from '@/components/typography/h2'
import Label from '@/components/typography/label'
import P from '@/components/typography/paragraph'
import Image from 'next/image'
import React from 'react'

const ProductTracker = () => {
  return (
    <section className="px-32 gap-24 flex">
         <Image 
            src="/images/image2.png"
            alt="feature"
            width={576}
            height={435}
        />
        <div className='space-y-6 flex flex-col justify-center w-[576px]'>
            <Label>Time tracker</Label>
            <H2>Track your project performance</H2>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</P>
        </div>
    </section>
  )
}

export default ProductTracker