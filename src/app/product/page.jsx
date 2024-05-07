import React from 'react'
import ProductHero from './(components)/product-hero'
import ProductFeatures from './(components)/product-features'
import ProductMarket from './(components)/product-market'
import ProductTracker from './(components)/product-tracker'
import ProductLead from './(components)/product-lead'
import ProductCollaburation from './(components)/product-collaboration'
import ProductFeatures2 from './(components)/product-features2'

const Product = () => {
  return (
    <div className='space-y-32'>
        <ProductHero />
        <ProductFeatures />
        <ProductMarket />
        <ProductTracker />
        <ProductLead />
        <ProductCollaburation />
        <ProductFeatures2 />
    </div>
  )
}

export default Product