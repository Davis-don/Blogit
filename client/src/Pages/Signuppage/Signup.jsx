import React from 'react'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Signupform (){

  
  return(
    <div className="signup-overall-form">
      <label className='text-dark label-name' for='f-name'>First Name</label><br/>
      <input id='f-name' type='text' className='form-control signup-input' placeholder='first name'/><br/>
      <label className='text-dark label-name' for='l-name'>Last Name</label><br/>
      <input id='l-name' type='text' className='form-control signup-input' placeholder='Last name'/><br/>
      <label className='text-dark label-name' for='email'>Email adress</label><br/>
      <input id='email' type='text' className='form-control signup-input' placeholder='Email adress'/><br/>
      <label className='text-dark label-name' for='f-name'>Username</label><br/>
      <input id='f-name' type='text' className='form-control signup-input' placeholder='username'/><br/>
      <label className='text-dark label-name' for='f-name'>Password</label><br/>
      <input id='f-name' type='password' className='form-control signup-input' placeholder='password'/><br/>
      <label className='text-dark label-name' for='f-name'>Confirm password</label><br/>
      <input id='f-name' type='password' className='form-control signup-input' placeholder='confirm password'/><br/>
      <div className="button-submit-signup">
        <button className='btn'>submit</button>
      </div>

    </div>
  )
}

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