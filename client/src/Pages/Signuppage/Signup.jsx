import React from 'react'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signupform from '../../Components/Signup/Signupform'



function Signup() {
  return (
    <div className='overall-signup-container'>
      <div className="content-holders-signup">
        <div className="right-side-signup">
          <div className="signup-text-box">
            <h1>Join BlogIt – Where Your Voice Finds Its Place!</h1>
            <h4 className='text-light'>Join a community of passionate writers, readers, and thinkers. Discover like-minded people, engage in meaningful conversations, and grow your audience.</h4>
          </div>
        </div>
        <div className="left-side-signup">
           <div className="signup-form-holder card">
            <h2 className='text-dark'>Signup</h2>
              <Signupform/>

           </div>
        </div>
      </div>
        
        </div>
  )
}

export default Signup