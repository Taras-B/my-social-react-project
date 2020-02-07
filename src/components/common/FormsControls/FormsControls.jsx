import React from 'react'
import styles from './FormContol.module.css'
import { Field } from 'redux-form'
import { TextField, Checkbox } from '@material-ui/core'


const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span className={styles.error}>{error}</span> }

        </div>
    )
}
export const Input = (props) => {
    //debugger
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> {props.type === "checkbox" ? <Checkbox {...input} {...restProps}/> : <TextField {...input} {...restProps} />} </FormControl>
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <TextField {...input} {...restProps} /> </FormControl>
}

export const createField = ( placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
                name={name}
                validate={validators} 
                component={component} 
                {...props}/><p>{text}</p> 
    </div>
)