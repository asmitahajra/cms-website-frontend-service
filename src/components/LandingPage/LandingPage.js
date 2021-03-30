/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './LandingPage.scss';
import { useHistory } from 'react-router-dom';

import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import loginValidation from './loginValidation';
import apiUtil from '../../utils/api';

const LandingPage = ({ setStatus }) => {
  const history = useHistory();

  const [errorInLogin, setErrorLogin] = useState('');
  const submitted = false;

  // const onRegister = async (fields) => {
  //   const body = {
  //     username: fields.username,
  //     password: fields.password,
  //     user_details: {
  //       email: fields.email,
  //       phone: fields.phone,
  //       address: fields.address,
  //     },
  //   };
  //   console.log('this is bod');
  //   console.log(body);

  //   try {
  //     const registeredUser = await apiUtil.registerAUser(body);
  //     console.log(registeredUser);
  //     setErrorRegister('Successfuly registered! Please re-enter details to login');
  //     // history.push('/home');
  //   } catch (err) {
  //     setErrorRegister(err.message);
  //     console.log('this is message');
  //     console.log(err.message);
  //   }

  //   // console.log('here');
  //   // console.log(fields);
  //   // console.log('registered');
  // };

  const onLogin = async (fields) => {
    const body = {
      emailid: fields.emailid,
      password: fields.password,
    };
    try {
      const jwtTokenData = await apiUtil.loginAUser(body);
      if (jwtTokenData) {
        localStorage.setItem(
          'token',
          jwtTokenData.data.token,
        );
        setStatus();
      }
      history.push('/contenttypebuilder');
    } catch (err) {
      setErrorLogin(err.message);
    }
    console.log('logged in');
  };

  return (
    <div className="login-form">
      {!submitted ? (
        <div className="checkout-form">
          <br />
          <p className="header"><strong>Login to your CMS+ account!</strong></p>
          <Formik
            className="checkout-form"
            initialValues={{
              emailid: '',
              password: '',
            }}
            validationSchema={loginValidation}
            onSubmit={(fields) => {
              console.log(fields);
              onLogin(fields);
            }}
          >
            <Form className="form-login">
              <p>Email</p>
              <Field name="emailid" type="text" placeholder="" className="email-box" />
              <ErrorMessage
                name="emailid"
                component="div"
                className="invalid-feedback"
              />
              <br />
              <br />
              <p>Password</p>
              <Field name="password" type="text" placeholder="" className="password-box" />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
              <br />
              <br />
              <div className="submit-button">
                <button
                  type="submit"
                  data-testid="submit-button"
                  className="login-button"
                >
                  <p>
                    Login
                  </p>
                </button>
              </div>

            </Form>
          </Formik>
          <br />
          {errorInLogin === '' ? null : <div>{ errorInLogin }</div>}
          <p>Forgot password?</p>
        </div>
      ) : (
        <>
          <p>
            Your items will be sent to you!
          </p>
        </>
      )}

      {/* <img
        alt="logo1"
        src="..assets/undraw-upload-re-pasx.png"
        srcSet="img/undraw-upload-re-pasx@2x.png 2x,
             img/undraw-upload-re-pasx@3x.png 3x"
        className="undraw_Upload_re_pasx"
      />

      <img
        alt="logo2"
        src="..assets/undraw-upload-re-pasx.svg"
        className="undraw_Upload_re_pasx"
      /> */}
    </div>
  );
};
export default LandingPage;
