import React, { useEffect, useState } from 'react';
import {buildPDF} from '../helpers/pdfHelper';
import localforage from 'localforage';

const PostingLayout = (props) =>{

    const [post, setPost] = useState({
        author: '',
        mail: '',
        title: '',
        text: '',
        img : ''});

    useEffect( () =>{
        localforage.getItem('draft', (err, value)=>{
            if(err || !value) return;
            setPost(JSON.parse(value));
        });
    },[]);

    const onChange = (e) =>{
        setPost({...post, [e.target.name]: e.target.value});
        localforage.setItem('draft', JSON.stringify({...post, [e.target.name]: e.target.value}));
    }

    const onSubmit = () =>{
       // buildPDF(post);
    }

    const onPreview = () =>{
        buildPDF(post);
    }
    return <div>
        <h2>Posting</h2>
        <div>
            <input value={post.author} name="author" placeholder="Author's name" onChange={onChange}></input><br/>
            <input value={post.mail} type="email" name="mail" placeholder="Email" onChange={onChange}></input><br/>
            <input value={post.title} name="title" placeholder="Title" onChange={onChange}></input><br/>

            <textarea  value={post.text} name="text" placeholder="Your text" onChange={onChange} rows="4" cols="50">
            </textarea><br/>
        </div>
        <button onClick={onPreview}>Preview</button> <button onClick={onSubmit}>Submit</button>
    </div>;
}

export default PostingLayout;