import { ProfileType } from './../types/types'
import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '7898467d-1e2f-4ef0-ba59-6a5a0c76a13b' }
})
export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userId: number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    console.warn('Obsolote method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  }
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequier = 10
}

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

export const authAPI = {
  getMe() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((res) => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}
