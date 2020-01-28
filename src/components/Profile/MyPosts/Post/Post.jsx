import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.unsplash.com/photo-1550791970-613acd0edf84?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" alt="NBature"/>
            {props.message}
            <div><span>Like: </span>{props.like}</div>
            
        </div>
    )
}

export default Post;