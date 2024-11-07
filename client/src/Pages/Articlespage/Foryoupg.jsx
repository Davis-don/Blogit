import React from 'react';
import './foryouall.css';
import { useSearchParams } from 'react-router-dom';
import Header from '../../Components/Bloglisting/Header';
import useUserStore from '../../Store/Userstore';
import Foryoudisplay from '../../Components/Bloglisting/Articles/DisplayArticlesBlogs/Foryoudisplay';
import { useQuery } from 'react-query';

function Foryoupg() {
  const [searchParams] = useSearchParams();
  const user = useUserStore((state) => state.user);


  const id = searchParams.get('id');
  console.log("Article ID:", id);

  const { data, isLoading, isError, refetch } = useQuery(
    ['postId', id], 
    async () => {
      const response = await fetch(`http://localhost:4000/article-read?id=${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
    {
      enabled: !!id, 
      cacheTime: 600000, 
      staleTime: 300000, 
    }
  );

  return (
    <div className='overall-for-you-all-page'>
      <Header firstName={user[0].user.firstName} lastName={user[0].user.lastName} />

      <div className="read-for-you-body">
    
        {isLoading && <p>Loading article...</p>}
        {isError && <p>Error loading article. Please try again.</p>}

        {data && <Foryoudisplay articleData={data} />}
      </div>
    </div>
  );
}

export default Foryoupg;
