import React, { useState, useEffect } from 'react';
import Post from './post';
import { db } from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import './postcontainer.css';
const PostContainer = () => {
    const [postsToRender, setPostsToRender] = useState([]);
    useEffect(() => {
        const blogRef = ref(db, 'blogs');
      onValue(blogRef, (snapshot) => {
            snapshot.forEach((post) => {
               const childData = post.val();
                console.log(childData);
                postsToRender.push(<Post image={childData.image} title={childData.title} author={childData.author} date={childData.date} />);
                setPostsToRender(postsToRender);
            });
        })

    });

    return (
        <div className="postcontainer">
            {postsToRender}
        </div>
    );
}
export default PostContainer;