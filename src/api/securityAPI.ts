import { instance } from './api'

type GetCaptchaResponsseType = {
  url: string
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaResponsseType>(`security/get-captcha-url`).then((res) => res.data)
  },
}
