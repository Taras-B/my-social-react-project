import React from 'react'

import style from './users.module.css'

import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, unfollow, follow, followingInProgress, ...props }) => {
    return (
        <div className={style.userPage}>
            <div className={style.paginator}>
                <Paginator currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged} />
            </div>

            <div className={style.users}>
                {users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollow}
                    follow={follow} />)}
            </div>
        </div>
    )
}

export default Users
