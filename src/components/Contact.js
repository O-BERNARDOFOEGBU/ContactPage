import React from 'react'

const Contact = () => {
  return (
   <div className="contact-container" >
    <h1>
      Get in touch
    </h1>
    <p style={{fontSize:"16px", color:"#626262", fontWeight:"500"}}>Your Questions and Feedback Matter to Us - Reach Out, Let's Connect, 
      and Explore Together to Ensure Your Rare Eat Fresh Experience Is 
      Exceptional and Delightful.
    </p>
    <form>
      <div className="name-container">
      <input type="text" name="firstname" placeholder='First Name'/>
      <input type="text" name="lastname" placeholder='Last Name'/>
      </div>
      <input type="email" name="email" placeholder='Email Address'/>
      <textarea name="message" placeholder='Describe your issues' rows={10} cols={30}/>
      <button type="submit">Send</button>

    </form>
     
   </div>
   
  )
}

export default Contact