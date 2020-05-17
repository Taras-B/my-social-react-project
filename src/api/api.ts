import { ProfileType, UserType } from './../types/types'
import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '7898467d-1e2f-4ef0-ba59-6a5a0c76a13b' },
})

export type GetProfileType = {
  data: ProfileType
  resultCode: number
  messages: Array<string>
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequier = 10,
}

export type GetItemType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
