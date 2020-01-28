import React from 'react'
import { connect } from 'react-redux'
import {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleFollowProgress,
    getUsers
} from '../../redux/users-reducer'

import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import { compose } from 'redux'
import {
    getUsersS,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgres
} from '../../redux/users-selectors'
// import { withAuthRedirect } from '../hoc/withAuthRedirect'
// import { userAPI } from '../../api/api'


class UsersContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true)

        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
            
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)

        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersS(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgres(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: getUsersS(state),
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowProgress,
//     getUsers
// })(UsersContainer)

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowProgress,
        getUsers
    })
)(UsersContainer)
