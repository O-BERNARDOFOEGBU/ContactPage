import React from 'react'
import Contact from '../components/Contact'
import background from "../assets/background.jpg";

const Hero = () => {
  return (
      <div className="background"style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"contain",  marginTop:"12%", height: "700px" }}>
        <div className="hero-container" >
        <div style={{width:"40%"}}>
          <div>
            yup
            uiuui
          </div>
          <div>
            yup
            uiuui
          </div>
          <div>
            yup
            uiuui
          </div>
        </div>
        <Contact/>
        </div>
      </div>
  )
}

export default Hero