import React from 'react'
import s from './../Dialogs.module.css'
import { Typography } from '@material-ui/core'

const Message: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className={s.message}>
      <Typography variant="body2">{message}</Typography>
    </div>
  )
}

export default Message
