import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

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
                id: 5,
                message: action.newPostText,
                likeCount: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
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

export default profileReducer;