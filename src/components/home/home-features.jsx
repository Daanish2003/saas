import React from 'react'
import Label from '../typography/label'
import H2 from '../typography/h2'
import Image from 'next/image'
import P from '../typography/paragraph'
import H3 from '../typography/h3'
import { FeaturesCon } from '../constants/constant'

const HomeFeatures = () => {
  return (
    <section className="flex flex-col gap-10 justify-center text-center mx-20">
        <Label>High-quality</Label>
        <H2>We have the Best Solution for your Business</H2>
        <div className="bg-[#E0E4FC] bg-opacity-50 rounded-3xl flex justify-center  p-16 gap-2">
           {FeaturesCon.map((item, index) => (
            <div className="flex flex-col space-x-4 gap-4 text-center items-center" key={index}>
                <Image 
                   src={item.icon}
                   alt={item.alt}
                   width={48}
                   height={48}
                   className='ml-4'
                   />
                <H3>{item.heading}</H3>
                <P>{item.desc}</P>
            </div>
           ))}
        </div>
    </section>
  )
}

export default HomeFeatures