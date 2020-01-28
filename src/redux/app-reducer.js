// import { authAPI } from "../api/api"
// import { stopSubmit } from "redux-form"
import {getAuthUserData} from './auth-reducer'

const INITIALIZADE_SUCCESS = 'INITIALIZADE_SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZADE_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZADE_SUCCESS,
    
})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())

    })
}

// export const getAuthUserData = () =>  (dispatch) => {
//     authAPI.getMe().then(response => {
//         if(response.data.resultCode === 0) {
//             let {id, login, email} = response.data.data
//             dispatch(setAuthUserData(id, email, login, true))
//         }
    
//     })
// }

// export const login = (email, password, rememberMe) => (dispatch) => {
//     authAPI.login(email, password, rememberMe).then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(getAuthUserData())
//         } else {
//             let message = response.data.resultCode > 0 ? response.data.messages[0] : 'SomeMessages'
//             dispatch(stopSubmit("login", {_error: message}))
//         }
//     })
// }
// export const logout = () => (dispatch) => {
//     authAPI.logout().then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setAuthUserData(null, null, null, false))
//         }
//     })
// }

export default appReducer