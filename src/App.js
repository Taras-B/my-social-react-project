import React from 'react';
import {Grid} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom';

import 'typeface-roboto';
import './App.css';
// import {Grid} from '@material-ui/core'

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

  catchAllUnhandledErrors = (reason, promise) => {
    console.log('object')
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  } 

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)

  }
  render() {
    if(!this.props.initialized) return <Preloader /> // зробити загрузку по середині, + класів,css
    return (
      
      <Grid container className='app-wrapper'>
        <Grid item xs={12}><HeaderContainer /></Grid>
        <Grid item sm={3} xs={12}>
        	<Navbar />
        </Grid>
        <Grid item sm={9} xs={12}>
          <div className='app-wrapper-content'>
            <Switch>
              <Redirect exact from="/" to="/profile" />
              <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/login' component={Login} />
              <Route path='*' render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </Grid>
      </Grid>
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
  return <HashRouter>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </HashRouter>

}

export default MainApp
