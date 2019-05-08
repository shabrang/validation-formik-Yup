import React, { Component } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class Main extends Component {

  validation = () => {
    return Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(5,"your password is more than 5 character").required('Required')
    })
  }

  render () {
    return (
      <div>
        <Formik

          initialValues={{ email: '', password: '' }}
          validationSchema={this.validation()}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }

          }
        >

          {(props) => {
            const { handleSubmit, isSubmitting } = props

            return (
              <form onSubmit={handleSubmit}>
                <Field type='email' name='email'/>
                <ErrorMessage name="email"/>
                <Field type="password" name="password"/>
                <ErrorMessage name="password"/>
                <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>
            )
          }
          }
        </Formik>
      </div>
    )
  }
}

export default Main