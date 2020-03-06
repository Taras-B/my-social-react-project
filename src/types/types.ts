import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/redux-store'

export type PostType = {
  id: number
  message: string
  likeCount: number
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type ProfilePhoto = {
  small: string | null
  large: string | null
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: ProfilePhoto
}

//==== user reduser

export type UserType = {
  id: number
  name: string
  status: string
  photos: ProfilePhoto
  followed: boolean
}

//==== Message

export type DialogType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type MyCastomThunk<ActionType extends Action> = ThunkAction<
  // Promise<void>,
  void,
  AppStateType,
  any,
  ActionType
>
