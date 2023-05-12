import React from 'react'
import "./Categories.scss";

import { Link, NavLink } from 'react-router-dom';
const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
            <img src='/images/11.jpg'/>
           <Link className='link' to="/products/1"><button>Man</button></Link>
        </div>
        <div className='row'>
        <img src='/images/22.jpg'/>
       
            <Link className='link' to="/products/1"><button>Woman</button></Link>
      
        </div>
      </div>
      <div className='col'>
        <div className='row'>
        <img src='/images/33.jpg'/>
       <Link to="/products/1"><button>Glass</button></Link>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
            <div className='col'>
                <div className='row'>
                <img src='/images/44.jpg'/>
                <Link className='link' to="/products/1"><button>Children</button></Link>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                <img src='/images/55.jpg'/>
                <Link className='link' to="/products/1"><button>Art</button></Link>
                </div>

            </div>
        </div>
        <div className='row'>
        <img src='/images/66.jpg'/>
        <Link className='link' to="/products/1"><button>Accesories</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
