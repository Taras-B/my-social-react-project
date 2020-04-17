import React from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

import style from './../common/FormsControls/FormContol.module.css'
import { Grid, Typography, Button } from '@material-ui/core'
import { AppStateType } from '../../redux/redux-store'

interface IProps {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataValT, IProps> & IProps> = ({
  handleSubmit,
  error,
  captchaUrl
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input, {
        variant: 'outlined',
        size: 'small',
        color: 'secondary'
      })}
      {createField<LoginFormValuesTypeKeys>('Pasword', 'password', [required], Input, {
        type: 'password',
        variant: 'outlined',
        size: 'small',
        color: 'secondary',
        margin: 'normal'
      })}
      {createField<LoginFormValuesTypeKeys>(
        undefined,
        'rememberMe',
        [],
        Input,
        { type: 'checkbox' },
        'remember me'
      )}
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl &&
        createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input)}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormDataValT, IProps>({
  form: 'login'
})(LoginForm)

type MapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchToPropsT = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormDataValT = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormDataValT, string>

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsT> = (props) => {
  const onSubmit = (formData: LoginFormDataValT) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) return <Redirect to={'/profile'} />

  return (
    <div style={{ textAlign: 'center' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">Login</Typography>
          <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </Grid>
        <Grid item xs>
          <Typography variant="h6">Дані щоб зайти в тестовий аккаунт:</Typography>
          <Typography variant="h6">
            Email:{' '}
            <Typography variant="subtitle1" display="inline">
              free@samuraijs.com
            </Typography>
          </Typography>
          <Typography variant="h6">
            Password:{' '}
            <Typography variant="subtitle1" display="inline">
              free
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
