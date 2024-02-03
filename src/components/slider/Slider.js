//// home sayfasındaki slider i yapacağımız yer
import React, { useState } from 'react'
import "./Slider.scss"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { sliderData } from './slider-data'
import { Slide } from 'react-toastify'


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev"/>
      <AiOutlineArrowRight className="arrow next"/>

      {
        sliderData.map((slide,index) => {
          const {image,heading,desc} = slide
          return (
            <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                {
                  index === currentSlide && (
                    <>
                    <img src={image} alt="slide"/>
                    <div className='content'>
                      <h2>{heading}</h2>
                      <p>{desc}</p>
                      <hr/>
                      <a href="#product" className='--btn --btn-primary'>Shop Now</a>
                    </div>
                    </>
                  )
                }
            </div>
          )
        })
      }
    </div>
  )
}

export default Slider