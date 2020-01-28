import React, { Component } from 'react'
import Profile from './Profile'
// import * as axios from 'axios'
import { connect } from 'react-redux'

import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
// import { userAPI } from '../../api/api'


class ProfileContainer extends Component {

    componentDidMount() {
        // debugger 
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.autorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }

    render() {
        

        return (
            <div>
                < Profile { ...this.props } 
                    profile={ this.props.profile } 
                    status={ this.props.status }
                    updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)