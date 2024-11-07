import React from 'react'
import './bloglistbody.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Articlespg from '../../Pages/Articlespage/Articlespg'
import Myblogpg from '../../Pages/Myblog page/Myblogpg'
import useBlogStore from '../../Store/myBlogsStore'
import useArticleStore from '../../Store/Blogstore'
function BloglistBody() {
    const [forYou,setForYou] = useState(true)
    const [myBlog,setMyBlog] = useState(false)
    const myBlogsPosts = useBlogStore((state)=>state.blog)
    const otherPeopleArticles = useArticleStore((state)=>state.article) 
    console.log("my blogs here")
    console.log(myBlogsPosts.length>0)
    console.log(myBlogsPosts)


  return (
    <div className='overall-blog-listing-body'>
        {/* Bloglisting nav start */}
        <div className="bloglist-body-nav">
            <ul className='list-unstyled'>
         <li onClick={()=>{setForYou(true);setMyBlog(false)}} className={forYou ? "fs-4 active-bloglist-nav" : "fs-4"}>For You</li>
         <li onClick={()=>{setForYou(false),setMyBlog(true)}} className={myBlog ? "fs-4 active-bloglist-nav" : "fs-4"}>My blogs</li>
            </ul>
        </div>
        {/* Bloglisting nav end */}
     <div className="body-display-section">

        {forYou && 
            <div className="article-for-you">
                <Articlespg/>
                {/* {otherPeopleArticles.length>1 ? <Articlespg/> : <h1>No post available</h1>} */}
            </div>
        }
        { myBlog && 
            <div className="my-blogs-bloglist">
                <Myblogpg/>
               {/* {myBlogsPosts.length==0 ?  <Myblogpg/> : <h1>No post available</h1> } */}
            </div>
        }
        </div>
        
        </div>
  )
}

export default BloglistBody