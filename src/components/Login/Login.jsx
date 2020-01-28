import React from 'react'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

import style from './../common/FormsControls/FormContol.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}
                {createField("Pasword", "password", [required], Input)}
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {/* <div>
                <Field placeholder={"Email"} validate={[required]} name={'email'} component={Input} />
            </div>
            <div>

                 <Field placeholder={"Pasword"} validate={[required]} name={'password'} component={Input} /> 
            </div>
            <div>
                <Field type={"checkbox"} validate={[required]} name={'rememberMe'} component={Input} /> remember me
            </div> */}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }

    if (props.isAuth) return <Redirect to={"/profile"} />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
