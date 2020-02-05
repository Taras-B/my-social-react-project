import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends Component {
    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.autorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        

        return (
            <div>
                < Profile { ...this.props } 
                    isOwner={!this.props.match.params.userId}
                    profile={ this.props.profile } 
                    status={ this.props.status }
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)
