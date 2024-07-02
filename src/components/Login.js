import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Login() {
    return (
        <div>
            <Formik>
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" >
                        Submit
                    </button>
                </Form>
            </Formik>

        </div>
    )
}
