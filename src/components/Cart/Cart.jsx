import React from 'react'
import { DeleteOutline } from '@mui/icons-material';
import "./Cart.scss"
const Cart = () => {
    const data = [
        {
          id:1,
          img:"/images/11.jpg",
          img2:"/images/22.jpg",
          title:"Man Style",
          isNew:true,
          oldPrice:19,
          price:13,
          details:"omid sargazi front-end developer"
    
        },
        {
          id:2,
          img:"/images/22.jpg",
          img2:"/images/33.jpg",
          title:"Man & Woman Style",
          isNew:true,
          oldPrice:17,
          price:14,
          details:"omid sargazi front-end developer"
    
        },]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map(item=>(
        <div className='item' key={item.id}>
            <img src={item.img}/>
            <div className='details'>{item.title}
            <p>{item.details.substring(0, 100)}</p>
            <div className='price'>1 x {item.price}</div>
            </div>
      <div className='delete'>
        <DeleteOutline/>
      </div>
        </div>
      ))}

      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$133</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart
