/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import EdiText from 'react-editext';
import './CollectionTypeField.scss';
import Modal from 'react-modal';
import { each } from 'lodash';
import EditInstanceModal from '../EditInstanceModal/EditInstanceModal';

const CollectionTypeField = ({
  eachInstance, editTheInstance, collectionId,
  dynamicFormFields, initialValues, deleteTheInstance,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const handleEditInstance = (uniqueId, collId) => {
    setModalIsOpenToTrue();
    editTheInstance(uniqueId, collId);
  };
  const handleSave = (val) => {
    console.log('old val', eachInstance);
    console.log('Edited Value -> ', val);
    // setValue(val);
    //   editField(e, val);
  };
  const abc = JSON.stringify(eachInstance);

  return (
    <div className="field-instances">
      {
          Object.keys(eachInstance).map((fieldType) => (
            <div key={fieldType} className="instance-parent">
              {fieldType !== 'uniqueId' ? (
                <div className="child">
                  {eachInstance[fieldType]}
                  {' '}
                  <span />
                  {' '}
                </div>
              ) : null}
            </div>
          ))
      }
      <Modal isOpen={modalIsOpen}>
        <button type="button" onClick={setModalIsOpenToFalse}>x</button>
        <EditInstanceModal
          key={eachInstance.uniqueI}
          eachInstance={eachInstance}
          dynamicFormFields={dynamicFormFields}
          initialValues={initialValues}
          editTheInstance={editTheInstance}
          collectionId={collectionId}
          instanceId={eachInstance.uniqueId}
        />
      </Modal>
      <button type="button" className="newEntry" onClick={setModalIsOpenToTrue}>Edit</button>
      <button type="button" className="new-Entry" onClick={() => deleteTheInstance(eachInstance, collectionId)}>Delete</button>

    </div>
  );
};
export default CollectionTypeField;
