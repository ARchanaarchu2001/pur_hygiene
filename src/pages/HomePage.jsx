import React from 'react'
import HeroSection from '../components/HeroSection'

import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <ProductGrid />
       
    </div>
  )
}

export default HomePage