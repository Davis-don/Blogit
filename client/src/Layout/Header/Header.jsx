import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div className='overall-header-component'>
        <div className="left-logo-section">
        <h1 className='text-light'>BlogIt</h1>
        </div>
        <div className="right-logo-section">
        <button className='btn text-light'>Signin</button>
        </div>
        </div>
  )
}

export default Header