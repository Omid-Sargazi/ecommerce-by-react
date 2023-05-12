import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeatureProduct type="feature"/>
      <Categories/>
      <FeatureProduct type="trending"/>
    </div>
  )
}

export default Home
