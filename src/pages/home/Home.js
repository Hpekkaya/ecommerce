// slider ve product componentinin gösterildiği home sayfasıdır.
import React, { useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import Product from '../../components/product/Product'

const Home = () => {
  // gets the URL link
  const url = window.location.href

  // Link back to top of ProductDetails componenets
  useEffect(()=>{
    const scrollToProducts = () => {
      if(url.includes("#products")){
        window.scrollTo({
          top:700,
          behavior:"smooth"
        })
        return;
      }   
    }
    scrollToProducts()
  },[url])

  

  return (
    <div>
      <Slider/>
      <Product/>
    </div>
  )
}

export default Home