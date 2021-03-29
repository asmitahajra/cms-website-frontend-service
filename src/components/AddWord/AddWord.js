/* eslint-disable max-len */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
// import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import Validation from './WordValidation';

// import axios from 'axios';
// import './Checkout.scss';
// import apiUtil from '../../utils/api';

const AddWord = ({ addNewVocab }) => {
  const history = useHistory();

  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      {!submitted ? (
        <div className="checkout-form">
          <h1>
            {/* Form */}
          </h1>
          <p className="header">Please fill the details!</p>
          <Formik
            className="checkout-form"
            initialValues={{
              word: '',
              sentence: '',
              id: uuidv4(),
            }}
            validationSchema={Validation}
            onSubmit={(fields) => {
              addNewVocab(fields);
              setSubmitted(true);
              history.push('/home');
              // console.log(fields);
            }}
          >

            <Form className="form">
              <Field name="word" type="text" placeholder="Enter Word" />
              <ErrorMessage
                name="word"
                component="div"
                className="invalid-feedback"
              />

              <Field name="sentence" type="text" placeholder="Enter sentence" />
              <ErrorMessage
                name="sentence"
                component="div"
                className="invalid-feedback"
              />
              <br />

              <div className="submit-button">
                {/* <button type="submit" data-testid="submit-button" onClick={() => { postCartData(); }}>Submit</button> */}
                <button type="submit" data-testid="submit-button">Submit</button>
              </div>

            </Form>
          </Formik>
        </div>
      ) : (
        <>
          <p>
            Your word is added
          </p>
          <Link to="/home">Go Back</Link>
        </>
      )}
    </div>
  );
};

// const productShape = PropTypes.shape({
//   id: PropTypes.number,
//   name: PropTypes.string,
//   price: PropTypes.number,
//   count: PropTypes.number,
//   quantity: PropTypes.number,
//   category: PropTypes.string,
//   src: PropTypes.string,
// });

// Checkout.propTypes = {
//   cartItems: PropTypes.objectOf(PropTypes.arrayOf(productShape)).isRequired,
//   onCheckout: PropTypes.func.isRequired,
// };

export default AddWord;
