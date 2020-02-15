import { getAuthUserData } from './auth-reducer'

const INITIALIZADE_SUCCESS = 'INITIALIZADE_SUCCESS'

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessType = {
  type: typeof INITIALIZADE_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZADE_SUCCESS
})

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
