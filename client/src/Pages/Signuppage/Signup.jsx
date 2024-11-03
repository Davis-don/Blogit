
import React from 'react';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signupform from '../../Components/Signup/Signupform';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate()
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
              <h2 className='text-dark'>Signup</h2>
              <Signupform />
                
                <Link to="/signin" className='login-link'>Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Signup;
