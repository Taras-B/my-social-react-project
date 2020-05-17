import { ResultCodeEnum } from './../api/api'
import { securityAPI } from '../api/securityAPI'
import { authAPI } from '../api/authAPI'
import { stopSubmit } from 'redux-form'
import { MyCastomThunk } from '../types/types'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

type ActionType = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

type SetAuthUserDataActionPayload = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayload
}

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
})

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export type ThunkCreator = MyCastomThunk<ActionType>

export const getAuthUserData = (): ThunkCreator => async (dispatch) => {
  let meData = await authAPI.getMe()
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkCreator => async (dispatch) => {
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

export const getCapthcaUrl = (): ThunkCreator => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkCreator => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
