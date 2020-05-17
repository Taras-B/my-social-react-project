import { instance, ResultCodeEnum } from './api'

type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}

export type MeResponseDataType = {
  id: number
  email: string
  login: string
}

export type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  getMe() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post<ResponseType<LoginResponseDataType>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}
