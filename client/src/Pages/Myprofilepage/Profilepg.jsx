import React from 'react'
import "./profilepage.css"
import Header from '../../Components/Bloglisting/Header'
import Profileupdate from '../../Components/Profile update/Profileupdate'
import Personalinfoupdate from '../../Components/Personal info update/Personalinfoupdate'
import Passwordupdate from '../../Components/PaswordUpdate/Passwordupdate'
import useUserStore from '../../Store/Userstore'

function Profilepg() {
    const user = useUserStore((state) => state.user);
  return (
    <div className='overall-profile-page-section'>
        <Header firstName={user[0].user.firstName} lastName={user[0].user.lastName} />
        <Profileupdate/>
        <Personalinfoupdate/>
        <Passwordupdate/>
        </div>
  )
}

export default Profilepg