import { UserType } from './../types/types'
import { userAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'
import { Dispatch } from 'redux'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>
}

type InitialUserStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionType): InitialUserStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.following
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      }
    default:
      return state
  }
}

type ActionType =
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType
  | ToggleFollowProgressActionType

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return {
    type: FOLLOW,
    userId
  }
}

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
  return {
    type: UNFOLLOW,
    userId
  }
}

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {
    type: SET_USERS,
    users
  }
}

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_COUNT
  count: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
  return {
    type: SET_TOTAL_COUNT,
    count: totalUsersCount
  }
}

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

type ToggleFollowProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  following: boolean
  userId: number
}

export const toggleFollowProgress = (
  following: boolean,
  userId: number
): ToggleFollowProgressActionType => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    following,
    userId
  }
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

export const followUnfollowFlow = async (
  dispatch: Dispatch<ActionType>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType
) => {
  dispatch(toggleFollowProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
  }
}

export default usersReducer
