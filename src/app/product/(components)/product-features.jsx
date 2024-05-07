import { ProductFeaturesCon } from '@/components/constants/constant'
import H2 from '@/components/typography/h2'
import H4 from '@/components/typography/h4'
import P from '@/components/typography/paragraph'
import Image from 'next/image'
import React from 'react'

const ProductFeatures = () => {
  return (
    <section>
        <div className='text-center'>
        <H2>Get the best out of your company with our service</H2>'
        </div>
        <div className='grid grid-cols-3 p-24 gap-x-24 gap-y-16 w-[1360px] h-[596px] rounded-tr-3xl mt-32'>
            {ProductFeaturesCon.map((item, index) => (
                <div key={index} className=''>
                    <Image src={item.icon} alt="icon" width={56} height={56} />
                    <H4>{item.heading}</H4>
                    <P>{item.desc}</P>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProductFeatures