import React from 'react'
import './seeall.css'
import Header from '../../Components/Bloglisting/Header'
import useUserStore from '../../Store/Userstore'
import Seeallfrom from '../../Components/Seeall/Seeallfrom'
import Articlescards from '../../Components/Bloglisting/Articles/Articlescards'
import { useActionData, useLocation } from 'react-router-dom'
function Seeallfromspecificuser() {

    const location = useLocation()
    const userData = location.state
    const user = useUserStore((state) => state.user);
  return (
    <div className='see-all-from-specific-overall-container'>
         <Header firstName={user[0].user.firstName} lastName={user[0].user.lastName} />
         <Seeallfrom userIdPost = {userData.id}/>
        
        </div>
  )
}

export default Seeallfromspecificuser