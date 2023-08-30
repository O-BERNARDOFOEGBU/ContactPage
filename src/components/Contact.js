import React from 'react'

const Contact = () => {
  return (
   <div className="contact-container" >
    <h1>
      Get in touch
    </h1>
    <form>
      <div>
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