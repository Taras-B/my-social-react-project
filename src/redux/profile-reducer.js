import { userAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 10},
        {id: 2, message: 'It is my first props', likeCount: 23},
        {id: 3, message: 'It the end?', likeCount: 70}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().toString(),
                message: action.newPostText,
                likeCount: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST: {
            return {...state,
                    posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: { 
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: { 
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;

    }

}

export const addPostActionCreator = (newPostText) => {
    return { type: ADD_POST,
        newPostText
    }
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};
export const setStatus = (status) => {
    return {type: SET_USER_STATUS, status}
};

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
};

export const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
};

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId) 
            dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId 
    let response = await profileAPI.saveProfile(profile)
            if (response.data.resultCode === 0) {
               dispatch(getUserProfile(userId))
            } else {
                // dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
                let wrongNetwork = response.data.messages[0]
                    .slice(
                        response.data.messages[0].indexOf(">") + 1,
                        response.data.messages[0].indexOf(")")
                    )
                    .toLocaleLowerCase();
                dispatch(
                    stopSubmit("edit-profile", {
                        contacts: { [wrongNetwork]: response.data.messages[0] }
                    })
                );
                return Promise.reject(response.data.messages[0])
            }
}

export default profileReducer;