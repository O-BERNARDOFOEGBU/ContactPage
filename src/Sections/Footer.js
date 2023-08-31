import React from 'react'
import {ReactComponent as RareEatLogo} from "../assets/rare-eat-logo.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <RareEatLogo style={{ width:"110px", height:"59px"}}/>
      <div className='footer-content'>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Store</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Store</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Store</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Store</li>
          <li>Blog</li>
        </ul>
      </div>
      <hr/>
      <p style={{color:"#FFFFFF"}}>2023 Rare Eat Fresh. All rights reserved.</p>
    </div>
  )
}

export default Footer