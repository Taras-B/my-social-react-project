import { profileAPI } from '../api/profileAPI'
// import { userAPI } from '../api/userAPI'
import { stopSubmit } from 'redux-form'
import { PostType, ProfileType, ProfilePhoto, MyCastomThunk } from '../types/types'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 10 },
    { id: 2, message: 'It is my first props', likeCount: 23 },
    { id: 3, message: 'It the end?', likeCount: 70 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
}

type InitialStateProfileType = typeof initialState

const profileReducer = (state = initialState, action: ActionType): InitialStateProfileType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        message: action.newPostText,
        likeCount: 2,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p) => p.id !== action.postId) }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status }
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
    }
    default:
      return state
  }
}

type ActionType =
  | AddPostActionType
  | SetUserProfileActionType
  | AddStatusActionType
  | DeletePostActionType
  | SavePhotoActionType

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => {
  return { type: ADD_POST, newPostText }
}

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
  return { type: SET_USER_PROFILE, profile }
}

type AddStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}

export const setStatus = (status: string): AddStatusActionType => {
  return { type: SET_USER_STATUS, status }
}

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): DeletePostActionType => {
  return { type: DELETE_POST, postId }
}

type SavePhotoActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: ProfilePhoto
}

export const savePhotoSuccess = (photos: ProfilePhoto): SavePhotoActionType => {
  return { type: SAVE_PHOTO_SUCCESS, photos }
}

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
export type ThunkType = MyCastomThunk<ActionType>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId!))
  } else {
    // dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    let wrongNetwork = data.messages[0]
      .slice(data.messages[0].indexOf('>') + 1, data.messages[0].indexOf(')'))
      .toLocaleLowerCase()
    dispatch(
      //@ts-ignore
      stopSubmit('edit-profile', {
        contacts: { [wrongNetwork]: data.messages[0] },
      })
    )
    return Promise.reject(data.messages[0])
  }
}

export default profileReducer
