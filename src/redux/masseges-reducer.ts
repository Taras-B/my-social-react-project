const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Oleh' },
    { id: 4, name: 'Ana' },
    { id: 5, name: 'Olesia' }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi, how are your lessons' },
    { id: 2, message: 'Hi, fine' },
    { id: 3, message: 'Ok, by by' }
  ] as Array<MessageType>
}

export type InitialStateMessageType = typeof initialState

const massegesReducer = (state = initialState, action: any): InitialStateMessageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.payload
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            message: body
          }
        ]
      }
    default:
      return state
  }
}

type SendMessagesCreatorActionType = {
  type: typeof SEND_MESSAGE
  payload: string
}

export const sendMessagesCreator = (newMessageBody: string): SendMessagesCreatorActionType => {
  return {
    type: SEND_MESSAGE,
    payload: newMessageBody
  }
}

export default massegesReducer
