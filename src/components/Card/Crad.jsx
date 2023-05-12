import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom';
const Crad = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className='image'>
        {item.isNew && <span>new collection</span>}
        <img src={item.img} alt='image' className='mainImage'/>
        <img src={item.img2} alt='image' className='secondImage'/>
      </div>
      <div className=''>{item.title}</div>
      <div className='prices'>
        <h3><s>${item.oldPrice}</s></h3>
        <h3>${item.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Crad
