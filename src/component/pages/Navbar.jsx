import React, { useState } from 'react'
// import logo from './component/Assets/Logo.png'
import cart from "../Assets/cart_icon.png"
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () =>
{
    const [menu, setMenu] = useState('shop')
  return (
    <div style={{display:"flex", justifyContent:"space-around"}} className=''>
          <div>
              <img src={logo} alt="" />
              <p>shpoer</p>
          </div>
          <ul >
              
              <Link to='/'>
              <li onClick={()=>{setMenu("shop")}}>shop</li>
              </Link>   
              
              <Link to='/mens'>
              <li onClick={()=>{setMenu("mens")}}>men</li>
              </Link>   
              <Link to='/womens'>
              
              <li onClick={()=>{setMenu("womens")}}>women</li>
              </Link>
              <Link to='/kids'>
              
              <li onClick={()=>{setMenu("kids")}}>kids</li>
              </Link>
          </ul>
      <div>
        <Link to={'/Cart'}>
          
              <img src={cart} alt="" />
        </Link>
          </div>
    </div>
  )
}

export default Navbar
