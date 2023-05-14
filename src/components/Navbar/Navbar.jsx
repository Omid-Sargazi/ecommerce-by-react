import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { FavoriteBorderOutlined, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const products = useSelector(item=>item.cart.products)
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className='navbar'>
        <div className='wrapper'>
      <div className='left'>
       <div className='item'>
        <img src='/images/en.png' alt='image'/>
        <ExpandMoreIcon/>
       </div>
       <div className='item'>
        <span>USD</span>
        <ExpandMoreIcon/>
       </div>
       <div className='item'>
        <Link className='link' to="/products/1">Woman</Link>
        <Link className='link' to="/products/2">Man</Link>
        <Link className='link' to="/products/3">Children</Link>
       </div>
      </div>
      <div className='center'>
        <Link className='link' to="/">Omid E-Commerce</Link>
      </div>
      <div className='right'>
        <Link className='link'>HomePage</Link>
        <Link className='link'>About Page</Link>
        <Link className='link'>Contact</Link>
        <Link className='link'>Stores</Link>
        <div className='icons'>
          <Search/>
          <PersonOutlineOutlined/>
          <FavoriteBorderOutlined/>
          <div className='cartIcon' onClick={()=>setOpenCart(!openCart)}>
            <ShoppingCartOutlined/>
            <span>{products.length}</span>
          </div>
        </div>
      </div>
        </div>
            {openCart&&<Cart/>}
    </div>
  )
}

export default Navbar
