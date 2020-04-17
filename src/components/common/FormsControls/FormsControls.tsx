import React from 'react'
import styles from './FormContol.module.css'
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form'
import { TextField, Checkbox } from '@material-ui/core'
import { FieldValidatorT } from '../../../utils/validators/validators'

type FormControlType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      {hasError && <span className={styles.error}>{error}</span>}
    </div>
  )
}

interface IPropsInput {
  type: string
}

export const Input: React.FC<WrappedFieldProps & IPropsInput> = (props) => {
  //debugger
  //   const { input, meta, child, ...restProps } = props
  const { input, meta, type, ...restProps } = props
  return (
    <FormControl {...props}>
      {' '}
      {type === 'checkbox' ? (
        <Checkbox {...input} {...restProps} />
      ) : (
        <TextField {...input} {...restProps} />
      )}{' '}
    </FormControl>
  )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  //   const { input, meta, child, ...restProps } = props
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      {' '}
      <TextField {...input} {...restProps} />{' '}
    </FormControl>
  )
}

export function createField<FormKeysProps extends string>(
  placeholder: string | undefined,
  name: FormKeysProps,
  validators: Array<FieldValidatorT>,
  component: React.FC<WrappedFieldProps & IPropsInput>,
  props = {},
  text = ''
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />
      <p>{text}</p>
    </div>
  )
}
