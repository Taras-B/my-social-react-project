import { ResultCodeEnum } from './../api/api'
import { securityAPI } from '../api/securityAPI'
import { authAPI } from '../api/authAPI'
import { stopSubmit } from 'redux-form'
import { MyCastomThunk } from '../types/types'
import { InferActionsTypes } from './redux-store'

// const SET_USER_DATA = 'SN/auth/SET_USER_DATA'
// const GET_CAPTCHA_URL_SUCCESS = 'SN/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
    case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>

type ThunksType = MyCastomThunk<ActionsType>

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'SN/auth/SET_USER_DATA',
      payload: {
        userId,
        email,
        login,
        isAuth,
      },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
}

export const getAuthUserData = (): ThunksType => async (dispatch) => {
  let meData = await authAPI.getMe()
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data
    dispatch(actions.setAuthUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunksType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === ResultCodeEnum.CaptchaIsRequier) {
      dispatch(getCapthcaUrl())
    }
    let message = data.resultCode > 0 ? data.messages[0] : 'SomeMessages'
    //@ts-ignore
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCapthcaUrl = (): ThunksType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunksType => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export default authReducer
