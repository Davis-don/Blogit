import React, { useEffect, useState } from 'react';
import Articlecard from '../Bloglisting/Articles/Articlecard';
import { useMutation } from 'react-query';
import useBlogStore from '../../Store/myBlogsStore';
import useArticleStore from '../../Store/Blogstore';

function Seeallfrom({ userIdPost }) {
  const [posts, setPosts] = useState([]); 

  const token = sessionStorage.getItem("token");
  const setMyPosts = useBlogStore((state) => state.addBlog);
  const setOtherPeoplePosts = useArticleStore((state) => state.addOtherPeoplePost);

  const { mutate, error, isLoading, isError } = useMutation({
    mutationFn: async (postUserId) => {
      const response = await fetch(`http://localhost:4000/user-posts/${postUserId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    onSuccess: (data) => {
      setPosts(data); 

    },
  });

  useEffect(() => {
    if (userIdPost) {
      mutate(userIdPost); 
    }
  }, [mutate, userIdPost]);




  return (
    <div className="overall-articles-cards-container">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}

      {posts.length > 0 && posts.map((article) => (
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

export default Seeallfrom;


