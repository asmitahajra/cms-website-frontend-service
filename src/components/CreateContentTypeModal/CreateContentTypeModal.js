/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CreateContentTypeModal.scss';

const CreateContentTypeModal = ({ show, handleClose, addNewContentType }) => {
  // const [value, setValue] = useState({ value: '' });
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    // setValue({ value: event.target.value });
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('done');
    // alert(`A name was submitted: ${value}`);
    event.preventDefault();
    addNewContentType(value);
    handleClose();
  };

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Create a New Content Type</p>
        <p>Name of the content type</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <button type="button" onClick={() => handleClose()}>
          Close
        </button>
      </section>
    </div>
  );
};

export default CreateContentTypeModal;
