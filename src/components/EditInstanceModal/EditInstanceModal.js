/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './EditInstanceModal.scss';
import { DynamicForm } from 'formik-dynamic-forms';
import * as Yup from 'yup';

const { v4: uuidv4 } = require('uuid');

// import 'formik-dynamic-forms/dist/index.css';

const EditInstanceModal = ({
  eachInstance, dynamicFormFields, initialValues, editTheInstance, collectionId, instanceId,
}) => {
// const CreateInstanceModal = () => {
  const fields = dynamicFormFields;
  const initial = initialValues;

  const onSubmit = (values) => {
    // console.log(values);
    // const uniqueId = uuidv4();
    // const valuesWithUniqueId = values;
    // valuesWithUniqueId.uniqueId = uniqueId;
    // console.log('final value');
    // console.log(valuesWithUniqueId);
    // console.log('selected collection id');
    // const selectedCollectionId = selectedCollection[0].id;
    // console.log(selectedCollectionId);

    // let oldInstances = selectedCollection[0].instances;
    // console.log('oldInstances');
    // console.log(oldInstances);
    // if (oldInstances === null) {
    //   oldInstances = [valuesWithUniqueId];
    // } else {
    //   oldInstances.push(valuesWithUniqueId);
    // }
    // console.log('new instances');
    // console.log(oldInstances);
    console.log(values);
    editTheInstance(eachInstance, values, collectionId, instanceId);

    // createTheInstance(oldInstances, selectedCollectionId, uniqueId);
  };

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
          buttonText="Add"
        />
        <br />
      </section>
    </div>
  );
};

export default EditInstanceModal;
