import { MessageType, DialogType } from './../types/types'
import { InferActionsTypes } from './redux-store'
// const SEND_MESSAGE = 'SN/dialogs/SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Oleh' },
    { id: 4, name: 'Ana' },
    { id: 5, name: 'Olesia' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi, how are your lessons' },
    { id: 2, message: 'Hi, fine' },
    { id: 3, message: 'Ok, by by' },
  ] as Array<MessageType>,
}

export type InitialStateMessageType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>

const massegesReducer = (state = initialState, action: ActionType): InitialStateMessageType => {
  switch (action.type) {
    case 'SN/dialogs/SEND_MESSAGE':
      let body = action.payload
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            message: body,
          },
        ],
      }
    default:
      return state
  }
}

export const actions = {
  sendMessagesCreator: (newMessageBody: string) =>
    ({
      type: 'SN/dialogs/SEND_MESSAGE',
      payload: newMessageBody,
    } as const),
}

export default massegesReducer
