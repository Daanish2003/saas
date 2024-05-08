import { FaqCon } from '@/components/constants/constant'
import H2 from '@/components/typography/h2'
import H4 from '@/components/typography/h4'
import P from '@/components/typography/paragraph'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import React from 'react'

const PricingFAQ = () => {
  return (
    <section className="px-20 mt-32">
        <div className="bg-[#F0F2FE] flex gap-8 p-20 rounded-3xl">
            <div className='flex flex-col space-y-6'>
                <H2>Frequestly Asked Questions</H2>
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</P>
            </div>
            <Accordion type="single" collapsible className=" flex flex-col gap-4">
            {FaqCon.map((item, index) => (
                <AccordionItem value={item.value} key={index} className="bg-white w-[672px] p-10 rounded-3xl">
                    <AccordionTrigger><H4>{item.question}</H4></AccordionTrigger>
                    <AccordionContent><P>{item.answer}</P></AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
    </section>
  )
}

export default PricingFAQ