import { getAuthUserData } from './auth-reducer'
import { MyCastomThunk } from '../types/types'

const INITIALIZADE_SUCCESS = 'INITIALIZADE_SUCCESS'

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INITIALIZADE_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}
type ActionType = InitializedSuccessType

type InitializedSuccessType = {
  type: typeof INITIALIZADE_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZADE_SUCCESS
})
export type MyReducerThunk = MyCastomThunk<ActionType>

export const initializeApp = (): MyReducerThunk => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
