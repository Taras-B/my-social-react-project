import React, { Component } from 'react'
import Header from './Header'

import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'

// import { authAPI } from '../../api/api'

class HeaderContainer extends Component {

    // componentDidMount() {
    //     // this.props.toggleIsFetching(true)
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
    //     // .then(response => {
    //     //     if(response.data.resultCode === 0) {
    //     //         let {id, email, login} = response.data.data
    //     //         this.props.setAuthUserData(id, email, login)
    //     //     }
    //     // })
    //     this.props.getAuthUserData()
    // } 

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { logout}) (HeaderContainer)