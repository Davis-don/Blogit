
import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='overall-header-component'>
      <div className="left-logo-section">
        <h1 className='text-light'>BlogIt</h1>
      </div>
      <div className="right-logo-section">
        <button onClick={() => navigate('/signup')} className='btn bg-success text-light'>Signup</button>
        <button onClick={() => navigate('/signin')} className='btn text-light'>Signin</button>
      </div>
    </div>
  )
}

export default Header
