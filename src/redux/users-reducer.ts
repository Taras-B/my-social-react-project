import { UserType, MyCastomThunk } from './../types/types'
import { userAPI } from '../api/userAPI'
import { updateObjectInArray } from '../utils/object-helpers'
// import { ThunkAction } from 'redux-thunk'
import { InferActionsTypes } from './redux-store'
import { Dispatch } from 'redux'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
}

type InitialUserStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionType): InitialUserStateType => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      }
    case 'SN/USERS/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      }
    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users,
      }
    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case 'SN/USERS/SET_TOTAL_COUNT':
      return {
        ...state,
        totalUsersCount: action.count,
      }
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.following
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }
    default:
      return state
  }
}

type ActionType = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => {
    return {
      type: 'SN/USERS/SET_USERS',
      users,
    } as const
  },
  setCurrentPage: (currentPage: number) => {
    return {
      type: 'SN/USERS/SET_CURRENT_PAGE',
      currentPage,
    } as const
  },
  setTotalUsersCount: (totalUsersCount: number) => {
    return {
      type: 'SN/USERS/SET_TOTAL_COUNT',
      count: totalUsersCount,
    } as const
  },
  toggleIsFetching: (isFetching: boolean) => {
    return {
      type: 'SN/USERS/TOGGLE_IS_FETCHING',
      isFetching,
    } as const
  },
  toggleFollowProgress: (following: boolean, userId: number) => {
    return {
      type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
      following,
      userId,
    } as const
  },
}

type ThunkType = MyCastomThunk<ActionType>

// Thunks....

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))

    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

export const followUnfollowFlow = async (
  dispatch: Dispatch<ActionType>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionType
) => {
  dispatch(actions.toggleFollowProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.followSuccess)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfollowSuccess)
  }
}

export default usersReducer
