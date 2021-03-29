import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './LandingPage.scss';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
// import axios from 'axios';
import registerValidation from './registerValidation';
import loginValidation from './loginValidation';
import apiUtil from '../../utils/api';

const LandingPage = () => {
  const history = useHistory();
  // const [successInRegister, setSuccessRegister] = useState('');
  const [errorInRegister, setErrorRegister] = useState('');
  const [errorInLogin, setErrorLogin] = useState('');
  const submitted = false;
  // let successMessage;
  // const [name, setName] = useState('');
  // useEffect(async () => {
  //   // const registerUser = await axios.post(
  //   //   'http://localhost:7000/register',
  //   //   {
  //   //     username: 'billy',
  //   //     password: 'xyz',
  //   //     user_details: { ttt: 'abc' },
  //   //   },
  //   // );
  //   // console.log(registerUser);
  //   const body = {
  //     username: 'iiiii',
  //     password: 'xyz',
  //   };
  //   try {
  //     const jwtTokenData = await apiUtil.getJwtToken(body);
  //     if (jwtTokenData) {
  //       localStorage.setItem(
  //         'token',
  //         jwtTokenData.data.token,
  //       );
  //     }
  //     console.log(jwtTokenData);
  //   } catch (e) {
  //     console.log('this is error');
  //   }
  //   // const jwtTokenData = await apiUtil.getJwtToken(body);
  //   successMessage = await apiUtil.getSuccessMessage();
  //   console.log(successMessage.data);
  //   // setName(successMessage.data);
  //   // console.log(successMessage.data.message);
  // }, []);

  const onRegister = async (fields) => {
    const body = {
      username: fields.username,
      password: fields.password,
      user_details: {
        email: fields.email,
        phone: fields.phone,
        address: fields.address,
      },
    };
    console.log('this is bod');
    console.log(body);

    try {
      const registeredUser = await apiUtil.registerAUser(body);
      console.log(registeredUser);
      setErrorRegister('Successfuly registered! Please re-enter details to login');
      // history.push('/home');
    } catch (err) {
      setErrorRegister(err.message);
      console.log('this is message');
      console.log(err.message);
    }

    // console.log('here');
    // console.log(fields);
    // console.log('registered');
  };

  const onLogin = async (fields) => {
    const body = {
      username: fields.username,
      password: fields.password,
    };
    try {
      const jwtTokenData = await apiUtil.loginAUser(body);
      if (jwtTokenData) {
        localStorage.setItem(
          'token',
          jwtTokenData.data.token,
        );
      }
      history.push('/home');
    } catch (err) {
      setErrorLogin(err.message);
    }
    console.log('logged in');
  };

  // let successMessage;
  // const getJwtTokenFunction = async ({ body }) => {
  //   try {
  //     const jwtTokenData = await apiUtil.getJwtToken(body);
  //     console.log('printing response for jwt');
  //     console.log(jwtTokenData);
  //     if (jwtTokenData) {
  //       localStorage.setItem(
  //         'token',
  //         jwtTokenData.data.jwtToken,
  //       );
  //     }
  //   } catch (e) {
  //     console.log('this is error');
  //   }

  //   successMessage = await apiUtil.getSuccessMessage();
  // };

  // getJwtTokenFunction(body);
  return (
    <div>
      {!submitted ? (
        <div className="checkout-form">
          <h1>
            {/* Form */}
          </h1>
          <p className="header">Register a new User!</p>
          <Formik
            className="checkout-form"
            initialValues={{
              username: '',
              password: '',
              email: '',
              phone: '',
              address: '',
            }}
            validationSchema={registerValidation}
            onSubmit={(fields) => {
              console.log(fields);
              onRegister(fields);
            }}
          >

            <Form className="form">
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />

              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />

              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />

              <Field name="phone" type="number" placeholder="Phone number" />
              <ErrorMessage
                name="phone"
                component="div"
                className="invalid-feedback"
              />

              <Field name="address" type="text" placeholder="Address" />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
              <br />
              <div className="submit-button">
                <br />
                <button
                  type="submit"
                  data-testid="submit-button"
                  // eslint-disable-next-line max-len
                  // disabled={!Formik.isValid || (Object.keys(Formik.touched).length === 0 && Formik.touched.constructor === Object)} // eslint-disable-next-line max-len
                  // onClick={() => { onRegister(); }}
                >
                  Submit

                </button>
              </div>

            </Form>
          </Formik>
          {errorInRegister === '' ? null : <div>{ errorInRegister }</div>}
          {/* {successInRegister === '' ? null : <div>{ errorInRegister }</div>} */}

          <br />
          <p className="header">Login if existing user!</p>
          <Formik
            className="checkout-form"
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={loginValidation}
            onSubmit={(fields) => {
              console.log(fields);
              onLogin(fields);
            }}
          >
            <Form className="form">
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />

              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
              <br />
              <div className="submit-button">
                <button
                  type="submit"
                  data-testid="submit-button"
                >
                  Submit

                </button>
              </div>

            </Form>
          </Formik>
          {errorInLogin === '' ? null : <div>{ errorInLogin }</div>}
        </div>
      ) : (
        <>
          <p>
            Your items will be sent to you!
          </p>
        </>
      )}
    </div>
  );
  // return (
  //   <div data-testid="landing-page" className="landing-page">
  //     <div className="container">
  //       <h3>daily vocab!</h3>
  //       <p>learn a new  word everyday!</p>
  //       {/* {`hi ${name}`} */}
  //       {/* <Link to="/home"><button type="button">Get Started</button></Link> */}
  //       {/* <button type="button" onClick={() => history.push('/home')}>Get Started</button> */}
  //     </div>
  //   </div>
  // );
};
export default LandingPage;
