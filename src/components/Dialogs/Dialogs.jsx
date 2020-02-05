import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'; 
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Grid, Box, Button } from '@material-ui/core';


const Dialogs = (props) => {
    let state = props.messagePage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let AddNewMessage =(value) => {
        console.log('object', value)
        props.sendMessage(value.newMessageBody)
    }

    return (
        <Grid container spacing={1} className={s.dialogs}>
            <Grid item xs={12} sm={3} >
                {dialogsElements}
            </Grid>
            <Grid container item xs={12} sm={9} justify="center" direction='column' className={s.messageForm} >
                <Box>{messageElements}</Box>
                <Box>
                    <AddMessageFormRedux onSubmit={AddNewMessage} />
                </Box>
            </Grid>
        </Grid>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                validate={[required, maxLength50]} 
                name="newMessageBody" 
                placeholder="Message you"
                multiline
                variant="outlined"
                 />
             <div><Button variant="outlined" color="primary" type='submit'>Send</Button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;