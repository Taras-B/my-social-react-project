import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';

import style from './ProfileInfo.module.css';
import { Button } from '@material-ui/core';



const ProfileDataForm = ({ handleSubmit, profile, error }) => {

    return <form onSubmit={handleSubmit}>
        <div><Button variant="contained"
            size="small"
            type='submit'>Save</Button></div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>My name: </b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>My professional skills: </b>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About me: </b>
            {createField("About me", "aboutMe", [], Textarea)}

        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key.toLocaleLowerCase(), [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux