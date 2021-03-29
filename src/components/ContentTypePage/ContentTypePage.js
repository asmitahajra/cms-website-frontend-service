/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ContentTypePage = ({ selectedContent }) => {
  const abc = JSON.stringify(selectedContent);
  return (
    <div>
      <button type="button">Add another field</button>
      selected Page
      {abc}
    </div>
  );
};
export default ContentTypePage;
