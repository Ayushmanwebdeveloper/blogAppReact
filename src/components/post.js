import * as React from 'react';
import './post.css';
const Post = ({image, title, author, date}) => {
    return (<a className='link' href='/'>
        <div class="card mb-3 shadow-lg" style={{ width: '18rem' }}>
            <img src={image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{author}</p>
                <p class="card-text"><small class="text-muted">Last updated on {date} </small></p>
                </div>
        </div></a>
    );
}
export default Post;