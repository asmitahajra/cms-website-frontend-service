/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ContentTypeList from '../ContentTypeList/ContentTypeList';
import ContentTypePage from '../ContentTypePage/ContentTypePage';
import CreateContentTypeModal from '../CreateContentTypeModal/CreateContentTypeModal';

const ContentTypeBuilder = ({
  contentTypes, showContentFields, selectedContent, addNewContentType,
}) => {
  const [showState, setShowState] = useState(false);

  const showModal = () => {
    setShowState(true);
  };

  const hideModal = () => {
    setShowState(false);
  };
  return (
    <div>
      <CreateContentTypeModal
        show={showState}
        handleClose={hideModal}
        addNewContentType={addNewContentType}
      >
        <p>Modal</p>
      </CreateContentTypeModal>
      <button type="button" onClick={showModal}>New Type</button>
      <h1>
        Content Types
        <div>
          <ContentTypeList contentTypes={contentTypes} showContentFields={showContentFields} />
        </div>
        <div>
          <ContentTypePage selectedContent={selectedContent} />
        </div>
      </h1>
    </div>
  );
};
export default ContentTypeBuilder;
