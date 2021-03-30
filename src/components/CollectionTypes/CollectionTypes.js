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
import './CollectionTypes.scss';

const CollectionTypes = ({
  allCollections,
  selectedCollection, createTheInstance, editTheInstance,
}) => {
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
  return (
    <div>
      <button type="button" className="newEntry" onClick={setModalIsOpenToTrue}>Add a New Entry</button>

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
          <div className="collections">
            <div>
              { selectedCollection[0].fields.map((fieldType) => (
                <div className="field-heading">
                  <div className="head">{fieldType}</div>
                </div>
              ))}
              <br />
              <br />
            </div>
            <div>
              {selectedCollection[0].instances.map((eachInstance) => (
                <React.Fragment key={eachInstance.uniqueId}>
                  <CollectionTypeField
                    eachInstance={eachInstance}
                    editTheInstance={editTheInstance}
                    collectionId={selectedCollection[0].id}
                    dynamicFormFields={dynamicFormFields}
                    initialValues={initialValues}

                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        )
        : <div>No instances</div>}

    </div>
  );
};
export default CollectionTypes;
