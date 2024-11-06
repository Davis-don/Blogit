import React from 'react'
import './articlecard.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Articlecard({title,content,fullNames,createdAt,updatedAt,image}) {
    

    const getNCharacters = (str)=>{
        return str.length > 200 ? str.slice(0, 200) + "...." : str + "....";
    }

    //function for time stamp
    const timeStampDisplay = (timeStampInput)=>{
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

    }
  return (
    <div className='overrall-article-card container'>
        <div className="article-header">
            <div className="user-img-article rounded-circle"></div>
            <div className="user-name-article"><h5 className='text-secondary'>{fullNames + " " + "(" + timeStampDisplay(createdAt)+ ")"}</h5></div>
        </div>
        <div className="body-article">
            <div className="text-box-article">
         <h1 className='article-title'>{title}</h1>
           <p className='article-content text-secondary' dangerouslySetInnerHTML={{__html:getNCharacters(content)}}></p>
            </div>
            <div className="image-article">
           <img className='article-thumbnail' src={image} alt="image" />
                 </div>
        </div>
        <div className="article-footer">
            <h5 className='text-secondary'>last update {timeStampDisplay(updatedAt)}</h5>
        </div>
        </div>
  )
}

export default Articlecard