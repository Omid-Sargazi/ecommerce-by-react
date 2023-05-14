import React from 'react'
import { DeleteOutline } from '@mui/icons-material';
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartReducer';
import { resetCart } from '../redux/cartReducer';
const Cart = () => {
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()
    console.log(products,"cart")
    const totalPrice = ()=>{
      let total = 0;
      products.forEach(element => {
       ( total += element.quantity * element.price)
      });
      return total.toFixed(2)
    }
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className='item' key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img}/>
            <div className='details'>{item.title}
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>{item.quantity} x ${item.price}</div>
            </div>
      <div className='delete' onClick={()=>dispatch(removeItem(item.id))}>
        <DeleteOutline/>
      </div>
        </div>
      ))}

      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
