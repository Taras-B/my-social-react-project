import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm, reset, InjectedFormProps } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Grid, Box, Button } from '@material-ui/core'
import { DialogType, MessageType } from '../../types/types'

type IDProps = {
  messagePage: {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
  }
  sendMessage: (newMessageBody: string) => void
}

const Dialogs: React.FC<IDProps> = (props) => {
  let state = props.messagePage

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ))

  let messageElements = state.messages.map((m) => <Message message={m.message} key={m.id} />)

  let AddNewMessage = (value: { newMessageBody: string }) => {
    props.sendMessage(value.newMessageBody)
  }

  return (
    <Grid container spacing={1} className={s.dialogs}>
      <Grid item xs={12} sm={3}>
        {dialogsElements}
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={9}
        justify="center"
        direction="column"
        className={s.messageForm}>
        <Box>{messageElements}</Box>
        <Box>
          <AddMessageFormRedux onSubmit={AddNewMessage} />
        </Box>
      </Grid>
    </Grid>
  )
}

const maxLength50 = maxLengthCreator(50)
type NewMessageFormValuesType = {
  newMessageBody: string
}
type PropsType = {}

const AddMessageForm: React.FC<
  InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name="newMessageBody"
        placeholder="Message you"
        multiline
        variant="outlined"
      />
      <div>
        <Button variant="outlined" color="primary" type="submit">
          Send
        </Button>
      </div>
    </form>
  )
}
const afterSubmit = (result: any, dispatch: any) => dispatch(reset('dialogAddMessageForm'))
const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({
  form: 'dialogAddMessageForm',
  onSubmitSuccess: afterSubmit,
})(AddMessageForm)

export default Dialogs
