import React from 'react'
import './hero.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import VideoPlayer from '../../Utils/VideoPlayer';
import { useNavigate } from 'react-router-dom';

function Hero() {
   const navigate = useNavigate();
  return (
    <div className='overall-hero-section'>
         <div className="left-side-hero">
            <div className="left-side-text-box">
            <h1 className='text-light'>Uncover Stories, Insights, and Inspiration</h1>
            <h2>INSPIRED INSIGHTS</h2>
            <h5 className='text-light container-fluid'>Inspiring stories and insights on what matters most.</h5>

            <div className="call-to-action-links">
                <div className="start-writting">
             <button onClick={()=>navigate('/signup')} className='btn'>Start Writting</button>
                </div>
                <div className="explore-stories">
                    <div className="arrow-icon">
                    <FaArrowAltCircleRight onClick={()=>navigate('/signup')} className='actual-arrow-icon'/>
                    </div>
                   <div className="text-link">
                    <p onClick={()=>navigate('/signup')} className='text-light explore-p'>Explore text for readers</p>
                   </div>
                </div>
             </div>
            </div>
             
         </div>
         <div className="right-side-hero">
         <div className="video-blog-container">
            <VideoPlayer/>
         </div>
         </div>
    </div>
  )
}

export default Hero