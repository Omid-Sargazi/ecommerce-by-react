import React, { Fragment, useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss"
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
const Product = () => {
  const id = useParams().id
  const [selectedImage, setSelectedImage] = useState("img")
  const [quantuty, setQuantity] = useState(0)
const decrease = ()=>{
  return quantuty===0 ? setQuantity(0): setQuantity(quantuty-1) 
}


const {data, loading, error} =useFetch(`/products/${id}?populate=*`)



  return (
    <div className='product'>
     {loading? "loading": (<Fragment><div className='left'>
        <div className='images'>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt='image' onClick={()=>setSelectedImage("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt='image' onClick={()=>setSelectedImage("img2")}/>
        </div>
        <div className='mainImg'>
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedImage]?.data?.attributes?.url}/>
        </div>
      </div>
      <div className='right'>
        <h2>{data?.attributes?.title}</h2>
        <span className='price'>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className='quantity'>
          <button onClick={decrease}>-</button>
          <span>{quantuty}</span>
          <button onClick={()=>setQuantity(quantuty+1)}>+</button>
        </div>
        <button className='add'>
          
          <span><AddShoppingCartIcon/>ADD TO CART </span>
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon/>ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon/>ADD TO COMPARE
          </div>
        </div>
      </div></Fragment>)}
    </div>
  )
}

export default Product
