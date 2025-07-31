import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import ProductSection from '../components/ProductSection'

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <ProductSection />
        <InfoSection />
       
    </div>
  )
}

export default HomePage