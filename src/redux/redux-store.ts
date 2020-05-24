import { createStore, combineReducers, compose } from 'redux'
import profileReducer from './profile-reducer'
import massegesReducer from './masseges-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  massegesPage: massegesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

type RootReducerType = typeof rootReducer

// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
//   PropertiesTypes<T>
// >
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U }
  ? U
  : never

export type AppStateType = ReturnType<RootReducerType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

//window.store = store // можна дивится який сторе в консолі хрома

export default store
