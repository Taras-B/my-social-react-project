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

export default appReducer