import React from 'react'
import './foryoudisplay.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useUserStore from '../../../../Store/Userstore';
import useBlogStore from '../../../../Store/myBlogsStore';
import { useMutation } from 'react-query'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




function Foryoudisplay({articleData}) {
    const navigate = useNavigate()
    const { id, title, body, blogImg, createdAt, excerpt,updatedAt, user } = articleData;

          
    const userIdentityFromUsestore = useUserStore((state) => state.user);
      let userBlog
        if(userIdentityFromUsestore[0].user.id == user.id){
        userBlog=true
        
        }else{
     userBlog=false
     
        }

    
   
   const {mutate,isError,isLoading,error} =  useMutation({
        mutationFn: async (postId)=>{
            const response = await fetch(`http://localhost:4000/delete-post?id=${postId}`,{
            method:"DELETE"
            })

            if (!response.ok) {
                throw new Error('Failed to delete the post');
            }
            return response.json();
        }
    })


    const timeStampDisplay = (timeStampInput) => {
        const date = new Date(timeStampInput);
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC',
        };
        return date.toLocaleString('en-US', options);
    };
  return (
    <>

    <div className='overall-for-you-display-card'>
        {  userBlog && 
    <div className="editing-container">
            <div onClick={() => navigate("/edit-post", { state: articleData })} className="update-icon"><CiEdit className='icons-post' /></div>
            <div  onClick={()=>{mutate(id); navigate("/bloglisting")}}  className="delete-icon"><MdDeleteOutline className='icons-post' /></div>
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
                <h5 className='text-secondary'>{timeStampDisplay(updatedAt)}</h5>
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
                    <h2>{user.firstName + " " + user.lastName}</h2>
                    <h4 className='text-secondary'>{excerpt}</h4>
                   {!userBlog && 
                    <div className="see-more-for-you-btn">
                    <button className='btn btn-outline-dark'>See all from {user.firstName + " " + user.lastName}</button>
                    <h4 className='mt-3 text-secondary'>created {timeStampDisplay(createdAt)}</h4>
                    </div>
                    }

                    
                </div>
            </div>
        </div>
        </>
  )
}

export default Foryoudisplay