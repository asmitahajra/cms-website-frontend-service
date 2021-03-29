/* eslint-disable react/prop-types */
import React from 'react';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';

const ContentTypeList = ({ contentTypes, showContentFields }) => (
  <div>
    {contentTypes.map((contentType) => (
      <ContentTypeCard
        key={contentType.name}
        contentType={contentType}
        showContentFields={showContentFields}
      />
    ))}
  </div>
);
export default ContentTypeList;
