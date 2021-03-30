/* eslint-disable react/prop-types */
import React from 'react';
// import ContentTypePage from '../ContentTypePage/ContentTypePage';
import './ContentTypeCard.scss';

const ContentTypeCard = ({ contentType, showContentFields }) => (
  <div className="contenttypebutton">
    <button type="button" onClick={() => showContentFields(contentType.id)}>{contentType.name}</button>
  </div>
);
export default ContentTypeCard;
