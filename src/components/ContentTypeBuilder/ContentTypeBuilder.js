/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ContentTypeList from '../ContentTypeList/ContentTypeList';
import ContentTypePage from '../ContentTypePage/ContentTypePage';
import CreateContentTypeModal from '../CreateContentTypeModal/CreateContentTypeModal';

const ContentTypeBuilder = ({
  allContentTypes, showContentFields, selectedContent, addNewContentType, updateFields,
}) => {
  // const abc = JSON.stringify(allContentTypes);
  const [showState, setShowState] = useState(false);

  const showModal = () => {
    setShowState(true);
  };

  const hideModal = () => {
    setShowState(false);
  };

  return (
    <div>
      <h1>
        Content Types
      </h1>
      <br />
      <br />
      <CreateContentTypeModal
        show={showState}
        handleClose={hideModal}
        addNewContentType={addNewContentType}
      >
        <p>Modal</p>
      </CreateContentTypeModal>
      <button type="button" onClick={showModal}>+ New Type</button>
      <div>
        <ContentTypeList
          allContentTypes={allContentTypes}
          showContentFields={showContentFields}
        />
      </div>
      <div>
        <ContentTypePage selectedContent={selectedContent} updateFields={updateFields} />
      </div>
    </div>
  );
};
export default ContentTypeBuilder;
