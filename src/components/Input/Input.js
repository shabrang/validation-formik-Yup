import { ErrorMessage, Field } from 'formik'
import React, { Fragment } from 'react'

export const Input = (props) => {
  const { name, ...rest } = props

  return (
    <Fragment>
      <Field {...rest} name={name}/>
      <ErrorMessage name={name} component='div'/>
    </Fragment>
  )
}