import React, { useState } from 'react';
import './bloglistingheader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUserStore from '../../Store/Userstore';
import { CiSearch } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Header({ firstName, lastName }) {
  const logoUtUser = useUserStore((state) => state.logoutUser);
  const [logoutUser,setLogout] = useState(false)
  const navigate = useNavigate();
  const [forYou, setForYou] = useState(true);
  const [myBlogs, setMyBlogs] = useState(false);

  
  const logout = () => {
    setLogout(true)
    setTimeout(() => {
      logoUtUser();
      navigate("/signin");
      setLogout(true)
    }, 1000);
     
  };

  const firstNameFirstCharacter = firstName.charAt(0);
  const cursorH1 = { cursor: "pointer" };
  const logoutCss = {
    width:'30vw',
    margin:"auto",
    padding:"1rem",
    textAlign:"center"

  }

  return (
    <div className='overall-bloglisting-header'>
      {logoutUser && <div style={logoutCss} className="alert alert-danger fs-4">
  <strong>Logged out</strong> out successfully
</div>}
      <div className="top-bloglist-header">
        <div className="logo-serch-container">
          <div className="logo-bloglisting-section text-dark">
            <h1 style={cursorH1} onClick={() => navigate("/bloglisting")}>Blogit</h1>
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
            <h2 style={cursorH1} onClick={() => navigate("/write")} className='fs-secondary '><FaPenAlt /> Write</h2>
          </div>
          <div className="far-end-left-div">
            
            <div style={cursorH1} onClick={() => navigate("/my-profile")} className="profile-avatar-section-bloging-list rounded-circle">
              <h2 className='text-light'>{firstNameFirstCharacter}</h2>
            </div>
      
            <button  onClick={logout} className="btn fs-4 mt-1">Logout</button>
          </div>
        </div>
      </div>
      <div className="bottom-bloglist-header container-fluid">
        <div className="bottom-top-section">
          {/* Small screen */}
          <div className="search-bloglisting-section-small">
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
  );
}

export default Header;
