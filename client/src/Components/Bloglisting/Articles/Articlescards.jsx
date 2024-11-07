import React, { useEffect } from 'react';
import Articlecard from './Articlecard';
import './articlecards.css';
import { useMutation } from 'react-query';
import useBlogStore from '../../../Store/myBlogsStore';
import useArticleStore from '../../../Store/Blogstore';

function Articlescards({ linkType, reqApi }) {
  let posts;
  
  if (linkType === "myBlogs") {
    posts = useBlogStore((state) => state.blog);
  } else {
    posts = useArticleStore((state) => state.article);
  }
  const token = sessionStorage.getItem("token");
  const setMyPosts = useBlogStore((state) => state.addBlog);
  const setOtherPeoplePosts = useArticleStore((state) => state.addOtherPeoplePost);  // Fixed typo here
  
  const { mutate, error, isLoading, isError } = useMutation({
    mutationFn: async () => {
      const response = await fetch(reqApi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: (data) => {
      if (linkType === "myBlogs") {
        setMyPosts(data);
      } else {
        setOtherPeoplePosts(data);
      }
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="overall-articles-cards-container">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      
      {posts && posts.length > 0 && posts[0].map((article) => (
        <Articlecard
          image={article.blogImg}
          id={article.id}
          fullNames={`${article.user.firstName} ${article.user.lastName}`}
          key={article.id}
          title={article.title}
          content={article.body}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
        />
      ))}
    </div>
  );
}

export default Articlescards;




// import React, { useEffect, useState } from 'react';
// import Articlecard from './Articlecard';
// import './articlecards.css';
// import { useMutation } from 'react-query';
// import useBlogStore from '../../../Store/myBlogsStore';
// import useArticleStore from '../../../Store/Blogstore';

// function Articlescards({linkType, reqApi}) {
//   // const myPosts = useBlogStore((state) => state.blog);
//   // const otherPeoplePosts = useArticleStore((state)=>state.article)
    
//    let posts
//   if(linkType === "myBlogs"){
//     posts = useBlogStore((state) => state.blog);
//   }
//   else{
// posts = useArticleStore((state)=>state.article)
//   }


//   const token = sessionStorage.getItem("token");
//   const setMyPosts = useBlogStore((state)=>state.addBlog)
//   const setOtherPeoplePosts = useArticleStore((state).addOtherPeoplePost)
  
//   const { mutate, error, isLoading, isError } = useMutation({
//     mutationFn: async () => {
//       const response = await fetch(reqApi, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization":  token
//       },
//       });
//       if (!response.ok) {
        
//         throw new Error("Network response was not ok");
//       }
//       return response.json(); 
//     },
//     onSuccess: (data) => {
//       //add posts to store
//       if(linkType === "myBlogs"){
//         setMyPosts(data)
//       }
//       else{
//         setOtherPeoplePosts(data)
//       }
  
//     },
//   });

  
//   useEffect(() => {
//     mutate(); 
//   }, [mutate]);

//   return (
//     <div className="overall-articles-cards-container">
    
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error: {error.message}</p>}
      
    
//       {posts[0].map((article) => (
//         <Articlecard image={article.blogImg} id={article.id} fullNames={article.user.firstName + " " + article.user.lastName} key={article.id} title={article.title} content={article.body} createdAt = {article.createdAt} updatedAt = {article.updatedAt} />
//       ))}
//     </div>
//   );
// }

// export default Articlescards;
