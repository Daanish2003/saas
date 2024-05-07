import React from 'react'
import H2 from '../typography/h2'
import Image from 'next/image'
import P from '../typography/paragraph'
import H6 from '../typography/h6'
import { TestimonialCon } from '../constants/constant'

const HomeTestimonial = () => {
  return (
    <section className='flex flex-col justify-center text-center space-y-16 px-32'>
        <H2>The stunning results our customers have experienced</H2>
        <div className='flex space-x-12'>
            {TestimonialCon.map((item, index) => (
                <div key={index} className="flex flex-col gap-8 justify-center items-center p-14 text-center border-2 border-[#6199ed42] rounded-3xl">
                    <P>{item.comments}</P>
                    <Image src={item.image} alt="image" width={56} height={56}/>
                    <H6>{item.name}</H6>
                    <P>{item.position}</P>
                </div>
            ))}
        </div>
    </section>
  )
}

export default HomeTestimonial