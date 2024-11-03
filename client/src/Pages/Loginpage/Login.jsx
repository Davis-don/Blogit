import React from 'react'
import './login.css'
import Logincomponent from '../../Components/Login/Logincomponent'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    <div className='overall-signup-container'>
      <h1 onClick={()=>navigate("/")} className='brand-name-signup container-fluid'>Blogit</h1>
            <div className="content-holders-signup">
          <div className="right-side-signup">
            <div className="signup-text-box">
              <h1>Join BlogIt – Where Your Voice Finds Its Place!</h1>
              <h4 className='text-light'>
                Join a community of passionate writers, readers, and thinkers. Discover like-minded people, engage in meaningful conversations, and grow your audience.
              </h4>
            </div>
          </div>
          <div className="left-side-signup">
            <div className="signup-form-holder card">
              <h2 className='text-dark'>Login</h2>
              <Logincomponent/>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Login