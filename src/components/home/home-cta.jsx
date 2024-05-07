import React from 'react'
import H2 from '../typography/h2'
import P from '../typography/paragraph'
import { Button } from '../ui/button'
import Image from 'next/image'

const HomeCta = () => {
  return (
    <section className="px-32 gap-24 flex pt-32 bg-grey-500">
        <div className='space-y-6 '>
            <H2>More impressions, more conversions</H2>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</P>
            <Button size="lg" >Get Free Trail</Button>
        </div>
        <Image 
            src="/images/image.png"
            alt="feature"
            width={576}
            height={435}
        />
    </section>
  )
}

export default HomeCta