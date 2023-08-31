import React from 'react'
import {ReactComponent as RareEatLogo} from "../assets/rare-eat-logo.svg"
import {ReactComponent as WhiteSocial} from "../assets/white-social.svg"


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
          <li className='hide'>Need Help?</li>
          <li className='hide'>Track Order</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li> Returns snd refunds</li>
          <li>Cookies</li>
        </ul>
        <ul>
          <li>Need Help?</li>
          <li>Track Order</li>
          <li>FAQs</li>
          <li className='hide'>Need Help?</li>
          <li className='hide'>Track Order</li>
          <li className='hide'>FAQs</li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>support@rareeatfresh.com</li>
          <li>02072054031</li>
          <li>International House, 64 Nile Street,</li> 
          <li>London, N1 7SR, United Kingdom</li>
          <li><WhiteSocial/></li>
        </ul>
      </div>
      <hr/>
      <p style={{color:"#FFFFFF", alignItems:"center", display:"flex", justifyContent:"center"}}>
      Copyright © 2023 Rare Eat Fresh. All rights reserved.
      </p>
    </div>
  )
}

export default Footer