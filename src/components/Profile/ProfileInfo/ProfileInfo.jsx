import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader'
// import ProfileStatus from './ProfileStatus' 
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={s.profileInfo}>
            {/* <div>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="NBature"/>
            </div> */}
            <div>
                <div className={s.imgWidth}><img src={props.profile.photos.small} alt="vxc" /></div>
                <h2>ava + description</h2>
                <ProfileStatusWithHooks status={props.status }
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;