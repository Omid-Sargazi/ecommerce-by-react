import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='items'>
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
         
        </div>
        <div className='items'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='items'>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eveniet aut suscipit aliquid sapiente neque. Dolor atque . Obcaecati magnam dolores ex ad.</span>
        </div>
        <div className='items'>
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime eveniet aut suscipit aliquid sapiente neque. Dolor atque . Obcaecati magnam dolores ex ad.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Omid E-Commerce</span>
          <span className='copyRight'>© Remix SoftwarSargazi_Omid</span>
        </div>
        <div className='right'>
          <img src='/images/payment.png'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
