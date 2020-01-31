import React from 'react';
import { Route, withRouter, HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';

import Login from './components/Login/Login';
import Preloader from './components/common/preloader/Preloader';

import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';



import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store';

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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App)

const MainApp = (props) => {
  return <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </HashRouter>

}

export default MainApp
