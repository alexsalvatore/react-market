import React, { useState } from 'react';

const PostingLayout = (props) =>{

    const [post, setPost] = useState({
        author: '',
        mail: '',
        title: '',
        text: '',
        img : ''});

    const onChange = (e) =>{
        setPost({...post, [e.target.name]: e.target.value});
    }
    return <div>
        <h2>Posting</h2>
        <div>
            <input value={post.author} name="author" placeholder="Author's name" onChange={onChange}></input><br/>
            <input value={post.mail} name="mail" placeholder="Contact/Email" onChange={onChange}></input><br/>
            <input value={post.title} name="title" placeholder="Title" onChange={onChange}></input><br/>

            <textarea  value={post.text} name="text" placeholder="Your text" onChange={onChange} rows="4" cols="50">
            </textarea><br/>
        </div>
        <button>Submit</button>
    </div>;
}

export default PostingLayout;