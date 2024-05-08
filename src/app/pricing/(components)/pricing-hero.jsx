import { PricingCon } from '@/components/constants/constant'
import H1 from '@/components/typography/h1'
import H3 from '@/components/typography/h3'
import P from '@/components/typography/paragraph'
import Plarge from '@/components/typography/plarge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'
import React from 'react'

const PricingHero = () => {
  return (
    <section className="mt-24 space-y-14">
        <div className="text-center space-y-10">
            <H1>Pricing plans that suit you</H1>
            <Plarge>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Plarge>
        </div>
        <div className="flex justify-between px-[73px]">
            {PricingCon.map((item, index) => (
                <div className={`w-[411px] h-[714px] rounded-3xl border-2 shadow-xl ${index == 1 ? "bg-lime-400" : "bg-white"}`} key={index}>
                    <div className="pl-12 pt-12 flex gap-6 pb-10">
                        <Image src={item.icon} alt="plans" width={54} height={54} />
                        <div>
                        <H3>{item.plan}</H3>
                        <P>{item.planDesc}</P>
                        </div>
                    </div>
                    <Separator />
                    {item.features.map((feature, index) => (
                        <div className="flex mt-8 gap-x-4 text-center px-20" key={index}>
                            <Image src={feature.icon} alt="tick" width={24} height={24} />
                            <P>{feature.feature}</P>
                        </div>
                    ))}
                    <div className="flex flex-col text-center mt-8 px-12 gap-y-4">
                    <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</P>
                    <H3>{item.price}</H3>
                    <P>{item.period}</P>
                    <Button>Get Started</Button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default PricingHero