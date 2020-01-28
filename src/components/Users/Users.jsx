import React from 'react'

// import style from './users.module.css'
// import userPhoto from '../../assets/ava-img.jpg'
// import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
// import * as axios from 'axios';
// import { userAPI } from '../../api/api';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, unfollow, follow, followingInProgress, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} 
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize} 
                        onPageChanged={onPageChanged} />

            <div>
                {users.map(u => <User user={u} 
                                      followingInProgress={followingInProgress} 
                                      key={u.id}
                                      unfollow={unfollow}
                                      follow={follow} />)}
            </div>
        {/* //     <div key={u.id}/>
        //         <span>
        //             <div>
        //                 <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photoj" className={style.usersPhoto} /></NavLink></div>
        //             <div>
        //                 {u.followed
        //                     ? <button disabled={props.followingInProgress.some(id => id === u.id)}
        //                         onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
        //                     : < button disabled={props.followingInProgress.some(id => id === u.id)}
        //                         onClick={() => {
        //                             props.follow(u.id)
        //                         }} >Follow</button>}
        //             </div>
        //         </span>
        //         <span>
        //             <span>
        //                 <div>{u.name}</div>
        //                 <div>{u.status}</div>
        //             </span>
        //             <div>{"u.location.city"}</div>
        //             <div>{"u.location.country"}</div>
        //             <span>

        //             </span>
        //         </span>
        //     </div>)} */}
         </div>
    )
}

export default Users
