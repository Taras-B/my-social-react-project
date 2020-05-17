import { profileAPI } from '../api/profileAPI'
// import { userAPI } from '../api/userAPI'
import { stopSubmit } from 'redux-form'
import { PostType, ProfileType, ProfilePhoto, MyCastomThunk } from '../types/types'
import { InferActionsTypes } from './redux-store'

// const ADD_POST = 'SN/PROFILE/ADD-POST'
// const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE'
// const SET_USER_STATUS = 'SN/PROFILE/SET_USER_STATUS'
// const DELETE_POST = 'SN/PROFILE/DELETE_POST'
// const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS'

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

type ActionsType = InferActionsTypes<typeof actions>

const profileReducer = (state = initialState, action: ActionsType): InitialStateProfileType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD-POST': {
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
    case 'SN/PROFILE/DELETE_POST': {
      return { ...state, posts: state.posts.filter((p) => p.id !== action.postId) }
    }
    case 'SN/PROFILE/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SN/PROFILE/SET_USER_STATUS': {
      return { ...state, status: action.status }
    }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
    }
    default:
      return state
  }
}

export const actions = {
  addPost: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) =>
    ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_USER_STATUS', status } as const),
  deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
  savePhotoSuccess: (photos: ProfilePhoto) =>
    ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),
}

//   Thunks

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
export type ThunkType = MyCastomThunk<ActionsType>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId))
    } else {
      throw new Error(`UserId can't be null`)
    }
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
