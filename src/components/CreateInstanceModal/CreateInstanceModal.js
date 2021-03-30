/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CreateInstanceModal.scss';
import { DynamicForm } from 'formik-dynamic-forms';
import * as Yup from 'yup';

const { v4: uuidv4 } = require('uuid');

// import 'formik-dynamic-forms/dist/index.css';

const CreateInstanceModal = ({
  dynamicFormFields, initialValues, createTheInstance, selectedCollection,
}) => {
// const CreateInstanceModal = () => {
  const fields = dynamicFormFields;
  const initial = initialValues;
  // const fields = [
  //   {
  //     label: 'Username',
  //     name: 'name',
  //     type: 'test',
  //     placeholder: 'please enter your name',
  //   },
  //   {
  //     label: 'E-mail',
  //     name: 'email',
  //     type: 'email',
  //     placeholder: 'please enter your email',
  //   },
  //   {
  //     label: 'Password',
  //     name: 'password',
  //     type: 'password',
  //     placeholder: '********',
  //   },
  //   {
  //     label: 'Confirm Password',
  //     name: 'passwordConfirm',
  //     type: 'password',
  //     placeholder: '********',
  //   },
  //   {
  //     tag: 'dropdown',
  //     label: 'Gender',
  //     name: 'gender',
  //     options: [
  //       {
  //         value: 'M',
  //         text: 'Male',
  //       },
  //       {
  //         value: 'F',
  //         text: 'Female',
  //       },
  //     ],
  //   },
  //   {
  //     tag: 'datepicker',
  //     label: 'Birth Date',
  //     name: 'birthDate',
  //     placeholder: 'pick a date',
  //   },
  // ];

  const onSubmit = (values) => {
    console.log(values);
    const uniqueId = uuidv4();
    const valuesWithUniqueId = values;
    valuesWithUniqueId.uniqueId = uniqueId;
    console.log('final value');
    console.log(valuesWithUniqueId);
    console.log('selected collection id');
    const selectedCollectionId = selectedCollection[0].id;
    console.log(selectedCollectionId);

    let oldInstances = selectedCollection[0].instances;
    console.log('oldInstances');
    console.log(oldInstances);
    if (oldInstances === null) {
      oldInstances = [valuesWithUniqueId];
    } else {
      oldInstances.push(valuesWithUniqueId);
    }
    console.log('new instances');
    console.log(oldInstances);

    createTheInstance(oldInstances, selectedCollectionId, uniqueId);
  };

  // const initial = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   passwordConfirm: '',
  //   birthDate: '',
  // };

  return (
    <div>
      <section className="modal-main">
        <p>Create a New Content Type</p>
        <p>Name of the content type</p>
        <DynamicForm
        //   schema={signupValidationSchema}
          submit={onSubmit}
          feilds={fields}
          initialValues={initial}
          buttonText="SignUp"
        />
        <br />
      </section>
    </div>
  );
};

export default CreateInstanceModal;
