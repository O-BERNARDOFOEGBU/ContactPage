import React from 'react'
import {ReactComponent as RareEatLogo} from "../assets/rare-eat-logo.svg"
import {ReactComponent as SearchLogo} from "../assets/search.svg"


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
        <input className="input" type="text" placeholder="Search" />
        {/* <img src="/images/search-icon.png" alt="Search Icon" /> */}
        
      </div>
      <div><RareEatLogo/> </div>
    </div>
  )
}

export default Navigation