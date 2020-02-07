import React, { useState } from 'react';

import s from './ProfileInfo.module.css';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/ava-img.jpg'
import ProfileDataFormRedux from './ProfileDataForm';
import { Grid, Typography, Button } from '@material-ui/core';


const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile }) => {
    let [editMode, setEditMode] = useState(false)

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
            <Grid container>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <div className={s.imgWidth}><img src={profile.photos.large || userPhoto} alt="vxc" />
                            {isOwner && <Button
                                variant="contained"
                                component="label"
                                size="small"
                            >Upload File <input type={"file"} style={{ display: 'none' }} onChange={onPhotoSelected} /></Button>}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        {editMode ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                            : <ProfileData profile={profile}
                                isOwner={isOwner}
                                goToEditMode={() => setEditMode(true)} />}
                    </Grid>
                </Grid>
                    <Grid>
                        <Typography variant="subtitle1">Status:</Typography>
                        <ProfileStatusWithHooks status={status }
                            updateStatus={updateStatus} />
                    </Grid>
            </Grid>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><Button variant="contained" size='small' onClick={goToEditMode}>Edit</Button></div>}
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