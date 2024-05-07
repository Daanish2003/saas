import React from 'react'
import Label from '../typography/label'
import H2 from '../typography/h2'
import P from '../typography/paragraph'
import Image from 'next/image'
import H4 from '../typography/h4'

const HomeDiscover = () => {
  return (
    <section className='px-32 flex justify-between items-center gap-[87px]'>
        <div className="space-y-6 w-[576px]">
            <Label>
                Discover More
            </Label>
            <H2>Analyze your sales and marketing leads</H2>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</P>
        </div>
        <div className="space-y-8 w-[576px]">
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/features.svg"
                  alt="features1"
                  width={48}
                  height={48}
                />
                <div>
                   <H4>Sales Tracking</H4>
                   <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</P>
                </div>
            </div>
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/features-2.svg"
                  alt="features-3"
                  width={48}
                  height={48}
                />
                <div>
                   <H4>Project Management</H4>
                   <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</P>
                </div>
            </div>
            <div className='flex space-x-6 items-center'>
                <Image
                  src="/assets/features-3.svg"
                  alt="features-3"
                  width={48}
                  height={48}
                />
                <div>
                   <H4>Activity Report</H4>
                   <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</P>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeDiscover