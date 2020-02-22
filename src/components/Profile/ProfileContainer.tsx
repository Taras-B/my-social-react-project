import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from '../../redux/profile-reducer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { ProfileType } from '../../types/types'

type MapStatePropsType = {
  profile: ProfileType
  status: string
  autorizedUserId: number | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
}

type PropsType = RouteComponentProps<{ userId: any }> & MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = this.props.autorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType, prevState: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile!,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
  }),
  withRouter
)(ProfileContainer)
