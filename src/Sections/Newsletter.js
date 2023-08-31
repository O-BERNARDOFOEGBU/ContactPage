import React from 'react'

const Newsletter = () => {
  return (
    <div className="newsletter-card">
      <h1>Join Our Newsletter: Stay Connected, Savor Exclusives!</h1>
      <div className="newsletter-text"> Subscribe to our newsletter and be a part of the vibrant 
        Rare Eat Fresh community. Stay connected with the latest 
      </div>
      <div className="newsletter-text">updates, exclusive offers, and exciting promotions on rare West African food ingredients.</div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"2%"}}>
      {/* <div className="news-input-container"> */}
      <input className='news-input' type="email" name="email" placeholder='Email address'/>
      <button className='news-submit'  type="submit">Subscribe</button>
      {/* </div> */}
      </div>
    </div>
  )
}

export default Newsletter