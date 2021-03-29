/* eslint-disable react/prop-types */
import React from 'react';
// import ContentTypePage from '../ContentTypePage/ContentTypePage';

const ContentTypeCard = ({ contentType, showContentFields }) => (
  <div>
    <button type="button" onClick={() => showContentFields(contentType.name)}>{contentType.name}</button>
  </div>
);
export default ContentTypeCard;
