import React from 'react'
import './SignUp.css'
import { Formik } from 'formik'
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup'

const FormikSignup = (props) => {
    const history = useHistory();
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', phoneNumber: '', address: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert('Login Sucess');
                    history.push('/');
                    window.location.reload();
                    setSubmitting(false);
                }, 400);

            }}

            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('Enter First Name'),

                lastName: Yup.string()
                    .required('Enter Last Name'),

                email: Yup.string()
                    .email()
                    .required("Required"),

                password: Yup.string()
                    .required('no password provided')
                    .min(8, "password is too short - should be eight charcters long")
                    .matches(/(?=.*[0-9])/, 'password should contain number'),

                phoneNumber: Yup.string()
                    .required('Enter Phone Number'),

                address: Yup.string()
                    .required('Enter Address')
            })}
        >
            {/* {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props; */}
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <div>
                    <h1 className='Formik-h1'>SignUp</h1>
                    <form className='form' onSubmit={handleSubmit}>


                        <div className='row'>
                            <label>First Name
                                    <span className='form-required'> *</span>

                            </label>
                            <div className='formik_row1 col-sm-6'>
                                <input type='text' className={errors.firstName && touched.firstName && 'error'} value={values.firstName} onChange={handleChange} onBlur={handleBlur} id='firstName' placeholder='First name' aria-label='First name' />
                                <div className='formik_error'>
                                    {errors.firstName && touched.firstName && errors.firstName}
                                </div>
                            </div>
                            <label>Last Name
                                    <span className='form-required'> *</span>

                            </label>
                            <div className='formik_row1  col-sm-6'>

                                <input type='text' className={errors.lastName && touched.lastName && 'error'} value={values.lastName} onChange={handleChange} onBlur={handleBlur} id='lastName' placeholder='Last name' aria-label='Last name' />
                                <div className='formik_error'>
                                    {errors.lastName && touched.lastName && errors.lastName}
                                </div>
                            </div>


                            <label>
                                Email Id
                                    <span className='form-required'> *</span>
                            </label>
                            <div >
                                <input type='text' className={errors.email && touched.email && 'error'} onChange={handleChange} onBlur={handleBlur} value={values.email} id='email' placeholder='name@example.com' aria-label='email id' />
                                <div className='formik_error'>
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>


                            <label>
                                Password
                                    <span className='form-required'> *</span>
                            </label>
                            <div className='col'>
                                <input type='password' className={errors.password && touched.password && 'error'} onChange={handleChange} onBlur={handleBlur} value={values.password} id='password' placeholder='Password' aria-label='password' />
                                <div className='formik_error'>
                                    {errors.password && touched.password && errors.password}
                                </div>
                            </div>


                            <label>
                                Phone Number
                                    <span className='form-required'> *</span>
                            </label>
                            <div className='formik_row2'>
                                <input type='text' className={errors.phoneNumber && touched.phoneNumber && 'error'} onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} id='phoneNumber' placeholder='Phone Number' />
                                <div className='formik_error'>
                                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                </div>
                            </div>


                            <label>Address
                                    <span className='form-required'> *</span>
                            </label>
                            <div className='formik_row2'>
                                <textarea className={errors.address && touched.address && 'error'} onChange={handleChange} onBlur={handleBlur} value={values.address} id='address' placeholder='Address' aria-label='Address' />
                                <div className='formik_error'>
                                    {errors.address && touched.address && errors.address}
                                </div>
                            </div>

                            <div className='submit-btn'>
                                <button type='submit' className='btn btn-primary' disabled={isSubmitting} >Submit</button>
                            </div>


                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}
export default FormikSignup