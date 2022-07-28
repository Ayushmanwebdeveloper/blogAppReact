import * as React from 'react';
import { useState } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [blog, setBlog] = useState('');
    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const handleAuthorOnChange = (e) => {
        setAuthor(e.target.value);
    };
    const handleBlogOnChange = (e) => {
        setBlog(e.target.value);
    };
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const createBlog = () => {
        const blogRef = firebase.database().ref('Blog');
        const blog = {
            author: author,
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            title: title,
            date: date,
            complete: false,
            description: blog
        };

        blogRef.push(blog);
    };

    return (<>
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" onChange={handleTitleOnChange} class="form-control" id="title" placeholder="Harry Potter and the Goblet of Fire"/>
        </div>
        <div class="mb-3">
            <label for="author" class="form-label">Name you want to be displayed as author-</label>
            <input type="text" onChange={handleAuthorOnChange} class="form-control" id="author" placeholder="name@example.com" />
        </div>

        <div class="mb-3">
            <label for="blog" class="form-label">Blog Text</label>
            <textarea onChange={handleBlogOnChange} class="form-control" id="blog" rows="3"></textarea>
        </div>
        <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" disabled />
                <label class="input-group-text" for="inputGroupFile02">Upload Image</label>
        </div>
        <button onClick={createBlog} style={{ marginTop: '25px', borderRadius: '5px' }} type="button" class="btn btn-dark btn-lg">Create Blog</button>
    </>
    );
}

export default NewBlog;