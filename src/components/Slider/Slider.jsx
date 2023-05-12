import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slider.scss"
const Slider = () => {
   const [currentSlide, setCurrentSlide]  = useState(1)
    const data = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    ]

    const preSlide = ()=>{
       return currentSlide===0 ? setCurrentSlide(2) : setCurrentSlide(currentSlide-1);
    }

    const nextSlide = ()=>{
       return currentSlide===2 ? setCurrentSlide(0)  : setCurrentSlide(currentSlide+1) ;
    }


  return (
    <div className='slider'>
      <div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt='sliderImage'/>
        <img src={data[1]} alt='sliderImage'/>
        <img src={data[2]} alt='sliderImage'/>
      </div>
       <div className='icons'>
       <div className='icon' onClick={preSlide} >
        <KeyboardArrowLeftIcon/>
       </div>
       <div className='icon' onClick={nextSlide} >
        <KeyboardArrowRightIcon/>
       </div>
       </div>
    </div>
  )
}

export default Slider
