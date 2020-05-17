import { getAuthUserData } from './auth-reducer'
import { MyCastomThunk } from '../types/types'
import { InferActionsTypes } from './redux-store'

// const INITIALIZADE_SUCCESS = 'SN/APP/INITIALIZADE_SUCCESS'

let initialState = {
  initialized: false,
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZADE_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const actions = {
  initializedSuccess: () =>
    ({
      type: 'SN/APP/INITIALIZADE_SUCCESS',
    } as const),
}

export type MyReducerThunk = MyCastomThunk<ActionsType>

export const initializeApp = (): MyReducerThunk => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export default appReducer
