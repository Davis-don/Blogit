import React from 'react'
import './foryoudisplay.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from '../../../../Store/Userstore';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";





function Foryoudisplay({articleData}) {
    const { id, title, body, blogImg, createdAt, excerpt,updatedAt, user } = articleData;

          

    const userIdentityFromUsestore = useUserStore((state) => state.user);
    //console.log(userIdentityFromUsestore[0].user.id)
      let userBlog
        if(userIdentityFromUsestore[0].user.id == user.id){
        userBlog=true
        
        }else{
     userBlog=false
     
        }

    
  return (
    <>

    <div className='overall-for-you-display-card'>
        {  userBlog && 
    <div className="editing-container">
            <div className="update-icon"><CiEdit className='icons-post' /></div>
            <div className="delete-icon"><MdDeleteOutline className='icons-post' /></div>
            </div>
            }
        <div className="for-you-all-header">
        <h1>{title}</h1>
        <h3 className='text-secondary'>{excerpt}</h3>
        </div>
        <div className="user-cred-for-you-all">
            <div className="user-avatar rounded-circle">

            </div>
            <div className="user-name-cred">
                <h4>{user.firstName + " " + user.lastName}</h4>
                <h5 className='text-secondary'>{createdAt}</h5>
            </div>
        </div>
        <div className="hero-for-you-all">
                <img src={blogImg} alt ="post image"/>
        </div>
        <div className="content-body-section-for-you">
            <p className='body-content-for-you' dangerouslySetInnerHTML={{__html: body}}></p>
        </div>
        </div>
        
        <div className="for-you-footer-section">
            <div className="user-cred-card-footer">
                <div className="user-card-footer-img rounded-circle"></div>
                <div className="bottom-text-content-footer-for-u">
                    <h2>Written by Greece Aberdeen</h2>
                    <h4 className='text-secondary'>I tried many side hustles. Many failed, some succeeded.</h4>

                    <div className="see-more-for-you-btn">
                    <button className='btn btn-outline-dark'>See all from Greece Aberdeen</button>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
  )
}

export default Foryoudisplay