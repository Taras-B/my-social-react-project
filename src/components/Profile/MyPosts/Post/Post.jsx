import React from 'react'
import s from './Post.module.css'
import { Typography, Button } from '@material-ui/core'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.title}>
        <img
          src={
            props.photo
              ? props.photo
              : 'https://images.unsplash.com/photo-1550791970-613acd0edf84?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80'
          }
          alt="NBature"
        />
        <Typography variant="body2" display="inline">
          {props.message}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" display="inline" className={s.like}>
          Like: {props.like}
        </Typography>
        <Button variant="outlined" size="small" onClick={() => props.deletePost(props.id)}>
          Delete post
        </Button>
      </div>
    </div>
  )
}

export default Post
