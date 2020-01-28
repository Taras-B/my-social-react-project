import {
    userAPI
} from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: true
                //         }
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                //  state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: false
                //         }
                //     }
                //     return u;
                // })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.following ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;

    }

}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_COUNT,
        count: totalUsersCount
    }
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};
export const toggleFollowProgress = (following, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        following,
        userId
    }
};


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   
        dispatch(toggleFollowProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowProgress(false, userId))
}
export const follow = (userId) => {
    return (dispatch) => {
        // dispatch(toggleFollowProgress(true, userId))
        // let response = await userAPI.follow(userId)
        // if (response.data.resultCode === 0) {
        //     dispatch(followSuccess(userId))
        // }
        // dispatch(toggleFollowProgress(false, userId))

        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        // dispatch(toggleFollowProgress(true, userId))
        // let response = await userAPI.unfollow(userId)
        // if (response.data.resultCode === 0) {
        //     dispatch(unfollowSuccess(userId))
        // }
        // dispatch(toggleFollowProgress(false, userId))

        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)

    }
}

export default usersReducer;