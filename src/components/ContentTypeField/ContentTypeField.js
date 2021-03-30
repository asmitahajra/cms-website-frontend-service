/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import EdiText from 'react-editext';

const ContentTypeField = ({ eachField, editField }) => {
  // const [oldValue] = useState(eachField);
  // const [value, setValue] = useState(eachField);

  const handleSave = (val) => {
    console.log('old val', eachField);
    console.log('Edited Value -> ', val);
    // setValue(val);
    editField(eachField, val);
  };

  return (
    <div>
      hey
      <EdiText
        type="text"
        value={eachField}
        onSave={handleSave}
      />
    </div>
  );
};
export default ContentTypeField;
