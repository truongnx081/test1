import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Navbar/Header'
import Banner from './components/Banner/Banner'
import SliderImg from './components/Slider/SliderImg'
import Tours from './components/Tours/Tours'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <SliderImg/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App
