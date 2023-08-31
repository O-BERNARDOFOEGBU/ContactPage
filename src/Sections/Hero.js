import React from 'react'
import Contact from '../components/Contact'
import background from "../assets/background.jpg";
import {ReactComponent as RareEatLogo} from "../assets/rare-eat-logo.svg"
import {ReactComponent as BlackSocial} from "../assets/black-social.svg"


const Hero = () => {
  return (
      <div className="background" style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"contain",  marginTop:"12%", height: "700px", borderRadius:"20px 0px 0px 20px" }}>
        <div className="hero-container" >
        <div style={{width:"40%", position:"relative"}}>
          <div className='mini-card' style={{position:"absolute", bottom:"0", left:"0"}}>
            <RareEatLogo style={{ width:"110px", height:"59px"}}/>
            <p><span>RARE EAT FRESH  </span>represents a range of unique ingredients and the vibrancy of different 
            Cultures, every product in the Rare Eat range has a story inspired by different Cultures
            <div style={{fontWeight:"700",marginTop:"4px"}}>020 7205 4031</div>
            <div style={{fontWeight:"700"}}>support@rareeatfresh.com</div>
            </p>
            <BlackSocial/>
            
          </div>
          
        </div>
        <Contact/>
        </div>
      </div>
  )
}

export default Hero