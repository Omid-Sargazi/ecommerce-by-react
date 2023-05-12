import React from 'react'
import "./FeatureProduct.scss"

import Card from "../Card/Crad"
const FeatureProduct = ({type}) => {
    
    const data = [
            {
              id:1,
              img:"/images/4.jpg",
              img2:"/images/5.jpg",
              title:"Man Style",
              isNew:true,
              oldPrice:19,
              price:13,
        
            },
            {
              id:2,
              img:"/images/4.jpg",
              img2:"/images/5.jpg",
              title:"Man & Woman Style",
              isNew:true,
              oldPrice:17,
              price:14,
        
            },
            {
              id:3,
              img:"/images/4.jpg",
              img2:"/images/5.jpg",
              title:"Street Style",
              isNew:false,
              oldPrice:15,
              price:10,
        
            },
            {
              id:4,
              img:"/images/4.jpg",
              img2:"/images/5.jpg",
              title:"Woman Outside Style",
              isNew:false,
              oldPrice:18,
              price:11,
        
            },
          ]
    
  return (
    <div className='feauterproduct'>
      <div className='top'>
      <h1>{type} products</h1>
      <p>Lorem ipsum dolor sit veritatis porro dolor et deserunt eligendi consectetur doloremque illo dolorem consequuntur. Maxime numquam ipsum placeat ab deleniti?</p>
      </div>
      <div className='bottom'>
        {data.map(item=>(<Card item={item} key={item.id}/>))}
      </div>
    </div>
  )
}

export default FeatureProduct
