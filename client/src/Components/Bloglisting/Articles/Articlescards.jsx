import React, { useEffect, useState } from 'react';
import Articlecard from './Articlecard';
import './articlecards.css';
import { useMutation } from 'react-query';

function Articlescards({reqApi}) {
  
  const [articles, setArticles] = useState([]);

  
  const { mutate, error, isLoading, isError } = useMutation({
    mutationFn: async () => {
      const response = await fetch(reqApi, {
        method: "GET",
      });
      if (!response.ok) {
        
        throw new Error("Network response was not ok");
      }
      return response.json(); 
    },
    onSuccess: (data) => {
      setArticles(data); 
    },
  });

  
  useEffect(() => {
    mutate(); 
  }, [mutate]);

  return (
    <div className="overall-articles-cards-container">
    
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      
    
      {articles.map((article) => (
        <Articlecard id={article.id} fullNames={article.user.firstName + " " + article.user.lastName} key={article.id} title={article.title} content={article.body} createdAt = {article.createdAt} updatedAt = {article.updatedAt} />
      ))}
    </div>
  );
}

export default Articlescards;
