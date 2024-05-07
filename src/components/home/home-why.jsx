import React from 'react'
import Label from '../typography/label'
import H2 from '../typography/h2'
import P from '../typography/paragraph'
import Image from 'next/image'

const HomeWhy = () => {
  return (
    <section className='px-32 flex justify-center items-center gap-[87px]'>
        <div className="space-y-6 w-[577px]">
            <Label>
               Why should you work with us?
            </Label>
            <H2>To upscale your business to the next level</H2>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</P>
        </div>
        <div className="space-y-8 w-[576px]">
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/right-arrow.svg"
                  alt="right-arrow"
                  width={48}
                  height={48}
                />
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</P>
            </div>
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/right-arrow.svg"
                  alt="right-arrow"
                  width={48}
                  height={48}
                />
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</P>
            </div>
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/right-arrow.svg"
                  alt="right-arrow"
                  width={48}
                  height={48}
                />
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</P>
            </div>
        </div>
    </section>
  )
}

export default HomeWhy