/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateInstanceModal from '../CreateInstanceModal/CreateInstanceModal';
import CollectionTypeField from '../CollectionTypeField/CollectionTypeField';

const CollectionTypes = ({ allCollections, selectedCollection, createTheInstance }) => {
  const fieldsToEnter = selectedCollection[0].fields;
  let initialValues = {};

  for (let index = 0; index < fieldsToEnter.length; index++) {
    initialValues[fieldsToEnter[index]] = '';
  }

  console.log('initial values');
  console.log(initialValues);
  const dynamicFormFields = fieldsToEnter.map((field) => ({
    label: field,
    name: field,
  }));
  console.log('dynamic form fields');
  console.log(dynamicFormFields);
  const abc = JSON.stringify(selectedCollection);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  //   const [showState, setShowState] = useState(false);

  //   const showModal = () => {
  //     setShowState(true);
  //   };

  //   const hideModal = () => {
  //     setShowState(false);
  //   };
  return (
    <div>
      <br />
      <br />
      {/* <CreateInstanceModal
        show={showState}
        handleClose={hideModal}
      >
        <p>Modal</p>
      </CreateInstanceModal>
      <button type="button" onClick={showModal}>Add a New Entry</button> */}
      <button type="button" onClick={setModalIsOpenToTrue}>Add a New Entry</button>

      <Modal isOpen={modalIsOpen}>
        <button type="button" onClick={setModalIsOpenToFalse}>x</button>
        <CreateInstanceModal
          dynamicFormFields={dynamicFormFields}
          initialValues={initialValues}
          createTheInstance={createTheInstance}
          selectedCollection={selectedCollection}
        />
      </Modal>

      { selectedCollection[0].instances !== null
        ? (
          <div>
            Hello
            {selectedCollection[0].instances.map((eachInstance) => (
              <React.Fragment key={eachInstance}>
                <CollectionTypeField eachInstance={eachInstance} />
              </React.Fragment>
            ))}
          </div>
        )
        : <div>No fields</div>}

    </div>
  );

//   return (
//     <div>
//       {abc}
//       CollectionTypes
//     </div>
//   );
};
export default CollectionTypes;
