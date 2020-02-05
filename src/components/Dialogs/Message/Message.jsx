import React from 'react';
import s from './../Dialogs.module.css';
import { Typography } from '@material-ui/core';


const Message = (props) => {
    return <div className={s.message}><Typography variant="body2">{props.message}</Typography></div>
}

export default Message;