import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom';
const Crad = ({item}) => {
  const urlImage = process.env.REACT_APP_UPLOAD_URL;
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className='image'>
        {item?.attributes.isNew && <span>new collection</span>}
        <img src={urlImage+item.attributes?.img?.data?.attributes?.url} alt='image' className='mainImage'/>
        <img src={urlImage+item.attributes?.img2?.data?.attributes?.url} alt='image' className='secondImage'/>
      </div>
      <div className=''>{item?.attributes.title}</div>
      <div className='prices'>
        <h3><s>${item.oldPrice|| item?.attributes.price +50}</s></h3>
        <h3>${item?.attributes.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Crad
