import React from 'react'
import './bloglisting.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from '../../Store/Userstore'
import Header from '../../Components/Bloglisting/Header'
import BloglistBody from '../../Components/BloglistingBody/BloglistBody'
function Bloglisting() {
  const user = useUserStore((state) => state.user);
  return (
    <div className='overall-bloglisting-container'>
      <Header firstName={user[0].firstName} lastName={user[0].lastName}/>
      <BloglistBody/>
        
        </div>
  )
}

export default Bloglisting