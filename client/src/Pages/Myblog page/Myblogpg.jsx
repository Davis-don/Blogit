import React from 'react'
import Articlescards from '../../Components/Bloglisting/Articles/Articlescards'

function Myblogpg() {
  return (
    <div className='ovearall-myblogs-page-container'>
         <Articlescards reqApi = "http://localhost:4000/my-blogs"/>
        </div>
  )
}

export default Myblogpg