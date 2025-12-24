import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset:100,

    })
  }, [])
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App