import React from 'react';
import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/Preloader';

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    } 
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile} />
            <MyPostsContainer photo={props.profile.photos.small} />
        </div>
    )
}

export default Profile;