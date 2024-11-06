import React from 'react'
import './foryouall.css'
import Header from '../../Components/Bloglisting/Header'
import useUserStore from '../../Store/Userstore'
import Foryoudisplay from '../../Components/Bloglisting/Articles/DisplayArticlesBlogs/Foryoudisplay'

function Foryoupg() {
    const user = useUserStore((state) => state.user);
  return (
    <div className='overall-for-you-all-page'>
        <Header firstName={user[0].user.firstName} lastName={user[0].user.lastName} />
        <div className="read-for-you-body">
            <Foryoudisplay/>
        </div>

        </div>
  )
}

export default Foryoupg