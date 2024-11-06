import React, { useEffect, useState } from 'react';
import Articlecard from './Articlecard';
import './articlecards.css';
import { useMutation } from 'react-query';
import useBlogStore from '../../../Store/myBlogsStore';

function Articlescards({reqApi}) {
  const posts = useBlogStore((state) => state.blog);
  const token = sessionStorage.getItem("token");
  const setPost = useBlogStore(((state)=>state.addBlog))
  
  const { mutate, error, isLoading, isError } = useMutation({
    mutationFn: async () => {
      const response = await fetch(reqApi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":  token
      },
      });
      if (!response.ok) {
        
        throw new Error("Network response was not ok");
      }
      return response.json(); 
    },
    onSuccess: (data) => {
      setPost(data)
    },
  });

  
  useEffect(() => {
    mutate(); 
  }, [mutate]);

  return (
    <div className="overall-articles-cards-container">
    
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      
    
      {posts[0].map((article) => (
        <Articlecard image={article.blogImg} id={article.id} fullNames={article.user.firstName + " " + article.user.lastName} key={article.id} title={article.title} content={article.body} createdAt = {article.createdAt} updatedAt = {article.updatedAt} />
      ))}
    </div>
  );
}

export default Articlescards;
