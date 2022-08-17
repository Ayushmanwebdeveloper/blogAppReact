import React, { useState, useEffect } from 'react';
import Post from './post';
import { db } from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import './postcontainer.css';

function PostContainer () {
    const render =[];
    const [postsToRender, setPostsToRender] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
const blogRef = ref(db, 'blogs');
      onValue(blogRef, (snapshot) => {
          snapshot.forEach((post) => {
                  const childData = post.val();
                 posts.push(childData);
          });
      })
      setTimeout(() => {
          for (const childData of posts) {
              console.log(childData);
              render.push(<Post image={childData.image} title={childData.title} author={childData.author} date={childData.date} />);
          }
          console.log(render);
          setPostsToRender(render);

      }, 3000);

    }, []);

 return (
        <div className="postcontainer">
            {postsToRender}
        </div>
    );
}
export default PostContainer;