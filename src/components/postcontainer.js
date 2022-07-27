import * as React from 'react';
import Post from './post';
import './postcontainer.css';
const PostContainer = () => {
    const posts = {post1:'', post2:'', post3:''};
    const postsToRender = [];

    for (let post of posts) {
        postsToRender.push(<Post image={post.image} title={post.title} author={post.author} date={post.date} />);
    }
    return (
        <div className="postcontainer">
            {postsToRender}
        </div>
    );
}
export default PostContainer;