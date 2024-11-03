import React from 'react'
import './bloglisting.css'
import Header from '../../Layout/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from '../../Store/Userstore'
function Bloglisting() {
  const user = useUserStore((state) => state.user);
  console.log(user)
  return (
    <div className='overall-bloglisting-container'>
      <Header/>
        <h1 className='text-light'>Bloglisting Page</h1>
        </div>
  )
}

export default Bloglisting