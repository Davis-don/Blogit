import React from 'react'
import './bloglistingheader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CiSearch } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
function Header({firstName,lastName}) {
    const firstNameFirstCharacter = firstName.charAt(0);
    const navigate = useNavigate();
  return (
    <div className='overall-bloglisting-header'>
        <div className="top-bloglist-header">
     <div className="logo-serch-container">
        <div className="logo-bloglisting-section text-dark">
            <h1>Blogit</h1>
      </div>
        <div className="search-bloglisting-section ">
            <form>
                <div className="div-btn-search">
                <button className='btn fs-1' type='submit'><CiSearch /></button>
                </div>
                <div className="div-serch-input">
                <input type='text' className='form-control serch-input' placeholder='search...'/>
                </div>
             
            
            </form>
        </div>
        
     </div>
     <div className="profile-blogliting-container">
        <div className="write-section-blolisting">
            <h2 className='fs-secondary '><FaPenAlt /> Write</h2>
        
        </div>
      <div className="profile-avatar-section-bloging-list rounded-circle">
       <h2 className='text-light'>{firstNameFirstCharacter}</h2>
      </div>
     </div>
        </div>
        <div className="bottom-bloglist-header">
          <div className="bottom-top-section">
           {/* Small screen */}
<div className="search-bloglisting-section-small ">
            <form>
                <div className="div-btn-search">
                <button className='btn fs-1' type='submit'><CiSearch /></button>
                </div>
                <div className="div-serch-input">
                <input type='text' className='form-control serch-input' placeholder='search...'/>
                </div>
             
            
            </form>
        </div>
        {/* end small screen */}
          </div>





        </div>
        </div>
  )
}

export default Header