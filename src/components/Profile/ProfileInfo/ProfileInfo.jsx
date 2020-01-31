import React, { useState } from 'react';

import s from './ProfileInfo.module.css';

import Preloader from '../../common/preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/ava-img.jpg'
import ProfileDataFormRedux from './ProfileDataForm';


const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile }) => {
    let [editMode, setEditMode] = useState(false)
    if(!profile) {
        return <Preloader />
    } 

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
            setEditMode(false)}
        )
    }
    
    return (
        <div className={s.profileInfo}>
            {/* <div>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="NBature"/>
            </div> */}
            <div>
                <div className={s.imgWidth}><img src={profile.photos.large || userPhoto} alt="vxc" />
                    {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
                </div>
                {editMode ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                          : <ProfileData profile={profile} 
                                        isOwner={isOwner}
                                        goToEditMode={() => setEditMode(true)} />}
                <h2>ava + description</h2>
                <ProfileStatusWithHooks status={status }
                    updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>My name: </b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;