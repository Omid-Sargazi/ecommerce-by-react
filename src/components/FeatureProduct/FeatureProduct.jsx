import React from 'react'
import "./FeatureProduct.scss"
import Card from "../Card/Crad"
import useFetch from '../../hooks/useFetch'
const FeatureProduct = ({type}) => {
    
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );


  return (
    <div className='feauterproduct'>
      <div className='top'>
      <h1>{type} products</h1>
      <p>Lorem ipsum dolor sit veritatis porro dolor et deserunt eligendi consectetur doloremque illo dolorem consequuntur. Maxime numquam ipsum placeat ab deleniti?</p>
      </div>
      <div className='bottom'>
        {error ? "something went wrong":(loading? "loading" : data?.map(item=>(<Card item={item} key={item.id}/>)))}
      </div>
    </div>
  )
}

export default FeatureProduct
