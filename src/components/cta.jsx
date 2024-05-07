import React from 'react'
import H1 from './typography/h1'
import P from './typography/paragraph'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-8 my-32 text-center'>
        <H1>Are you ready to grow your business with us?</H1>
        <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</P>
        <Button>View Pricing</Button>
    </section>
  )
}

export default Cta