import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';

// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import  {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

import Preloader from './components/common/preloader/Preloader';
import { withSuspense } from './components/hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  } 
  render() {
    if(!this.props.initialized) return <Preloader /> // зробити загрузку по середині, + класів,css
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/login' component={Login} />
        </div>
      </div>
    )
  }
}
// state={state} dispatch={store.dispatch.bind(store)} store={store}
// store={props.store}
// store={props.store} 
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
// export default App;
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App)

const MainApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </BrowserRouter>

}

export default MainApp
