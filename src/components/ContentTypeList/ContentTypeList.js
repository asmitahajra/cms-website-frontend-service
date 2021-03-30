/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';

const ContentTypeList = ({ allContentTypes, showContentFields }) => (
  <div>

    {allContentTypes.map((contentType) => (
      <ContentTypeCard
        key={contentType.id}
        contentType={contentType}
        showContentFields={showContentFields}
      />
    ))}
  </div>
);
export default ContentTypeList;
