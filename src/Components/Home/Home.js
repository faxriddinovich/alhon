import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Content from './Content'
import ProductSlider from './ProductSlider'
import './style.scss'
import Title from './Title'
import './responsive.scss'


function Home() {
  useEffect(() => {
    document.getElementById("home").classList.add("selected")
    document.getElementById("company").classList.remove("selected")
    document.getElementById("products").classList.remove("selected")
    document.getElementById("contact").classList.remove("selected")
  },[])
  return (
    <div className='home'>
        <Header/>
        <Content/>
        <Title/>
        <ProductSlider/>
        <Footer/>
    </div>
  )
}

export default Home