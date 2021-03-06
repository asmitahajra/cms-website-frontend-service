/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import ContentTypeList from '../ContentTypeList/ContentTypeList';
import ContentTypePage from '../ContentTypePage/ContentTypePage';
import CreateContentTypeModal from '../CreateContentTypeModal/CreateContentTypeModal';
import './ContentTypeBuilder.scss';

const ContentTypeBuilder = ({
  allContentTypes, showContentFields,
  selectedContent, addNewContentType, updateFields, updateFieldsAndInstances, deleteField,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="contenttypebuilder">
      <div className="header">
        <h1>
          Content Types
        </h1>

      </div>
      <br />
      <br />

      <button type="button" className="new-type-button" onClick={setModalIsOpenToTrue}>+ New Type</button>
      <Modal isOpen={modalIsOpen}>
        <button type="button" onClick={setModalIsOpenToFalse}>x</button>
        {/* <CreateInstanceModal
          dynamicFormFields={dynamicFormFields}
          initialValues={initialValues}
          createTheInstance={createTheInstance}
          selectedCollection={selectedCollection}
        /> */}
        <CreateContentTypeModal addNewContentType={addNewContentType} />
      </Modal>

      <div className="abc">
        <div className="contenttypelist">
          <ContentTypeList
            allContentTypes={allContentTypes}
            showContentFields={showContentFields}
          />
        </div>
        <div>
          <ContentTypePage
            selectedContent={selectedContent}
            updateFields={updateFields}
            updateFieldsAndInstances={updateFieldsAndInstances}
            deleteField={deleteField}
          />
        </div>

      </div>

    </div>
  );
};
export default ContentTypeBuilder;
