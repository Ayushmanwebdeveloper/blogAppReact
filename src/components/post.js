import { post } from 'jquery';
import * as React from 'react';
import './post.css';
const Post = ({image, title, author, date}) => {
    return (
        <div class="card mb-3">
            <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{author}</p>
                <p class="card-text"><small class="text-muted">Last updated on {date} </small></p>
                </div>
        </div>
    );
}
export default Post;