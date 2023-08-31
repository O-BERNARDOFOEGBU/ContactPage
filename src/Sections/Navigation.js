import React from 'react'
import {ReactComponent as RareEatLogo} from "../assets/rare-eat-logo.svg"
import {ReactComponent as SearchLogo} from "../assets/search.svg"
import {ReactComponent as FlagIcon} from "../assets/flag.svg"
import {ReactComponent as CartIcon} from "../assets/cart.svg"
import {ReactComponent as Avatar} from "../assets/avatar.svg"


const Navigation = () => {
  return (
    <div className='nav-header'>

      <div className='logo'>
       <RareEatLogo/>
      </div>
      <div className='nav-links'>
        <div>store</div>
        <div>about</div>
        <div>contact</div>
        <div>blog</div>
      </div>
      <div className="input-field">
      <span className="search-logo"><SearchLogo/></span>
        <input style={{backgroundColor:"#F9F9F9"}} className="input" type="text" placeholder="Search" />
        {/* <img src="/images/search-icon.png" alt="Search Icon" /> */}
        
      </div>
      <div className='avatar-links'>
        <FlagIcon/>
        <CartIcon/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Navigation