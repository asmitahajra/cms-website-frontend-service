/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';
import './ContentTypeList.scss';

const ContentTypeList = ({ allContentTypes, showContentFields }) => (
  <div className="contenttypelist">
    {allContentTypes.map((contentType) => (
      <ContentTypeCard
        className="contenttypecard"
        key={contentType.id}
        contentType={contentType}
        showContentFields={showContentFields}
      />
    ))}
  </div>
);
export default ContentTypeList;
