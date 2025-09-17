import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import ProductsCarousel from './components/ProductsCarousel'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <ProductsCarousel/>
      <Services/>
      <SubscribeSection/>
      <Footer/>
    </>
  )
}

export default App
