/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import EdiText from 'react-editext';

const CollectionTypeField = ({ eachInstance }) => {
  // const [oldValue] = useState(eachField);
  // const [value, setValue] = useState(eachField);

  const handleSave = (val) => {
    console.log('old val', eachInstance);
    console.log('Edited Value -> ', val);
    // setValue(val);
    //   editField(e, val);
  };
  const abc = JSON.stringify(eachInstance);

  return (
    <div>
      {/* {eachInstance.name}
      <EdiText
        type="text"
        value={eachInstance.name}
        onSave={handleSave}
      /> */}
      {
          Object.keys(eachInstance).map((fieldType) => (
            <div>
              {fieldType !== 'uniqueId' ? (
                <div>
                  {' '}
                  {eachInstance[fieldType]}
                </div>
              ) : null}

            </div>
          ))
      }
    </div>
  );
};
export default CollectionTypeField;
