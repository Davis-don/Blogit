import React from 'react'
import './bloglisting.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from '../../Store/Userstore'
import Header from '../../Components/Bloglisting/Header'
function Bloglisting() {
  const user = useUserStore((state) => state.user);
  return (
    <div className='overall-bloglisting-container'>
      <Header firstName={user[0].first_Name} lastName={user[0].last_Name}/>
        
        </div>
  )
}

export default Bloglisting