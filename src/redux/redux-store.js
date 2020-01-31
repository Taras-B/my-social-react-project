import { createStore, combineReducers, compose } from "redux";
import profileReducer from "./profile-reducer";
import massegesReducer from "./masseges-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    massegesPage: massegesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));



window.store = store // можна дивится який сторе в консолі хрома

export default store;