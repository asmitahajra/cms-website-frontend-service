/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ContentTypeField from '../ContentTypeField/ContentTypeField';

const ContentTypePage = ({ selectedContent, updateFields }) => {
  const [showNewField, setShowNewField] = useState(false);
  const [value, setValue] = useState('');

  const showNewTextField = () => {
    setShowNewField(true);
  };

  const handleSubmit = (event) => {
    console.log('done');
    // alert(`A name was submitted: ${value}`);
    event.preventDefault();
    const oldFields = selectedContent[0].fields;
    console.log('text');
    console.log(value);
    console.log('these are old fields');
    console.log(oldFields);
    oldFields.push(value);
    console.log('this is new fields');
    console.log(oldFields);
    updateFields(oldFields, selectedContent[0].id);
    // handleClose();
    setShowNewField(false);
  };

  const editField = (oldValue, newValue) => {
    const oldFields = selectedContent[0].fields;
    const newFields = oldFields.map((x) => {
      if (x === oldValue) return newValue;
      return x;
    });
    updateFields(newFields, selectedContent[0].id);
    // will also have to update inside all instances
  };

  const handleChange = (event) => {
    // setValue({ value: event.target.value });
    setValue(event.target.value);
  // };
  };
  const abc = JSON.stringify(selectedContent[0].fields);
  console.log('abc');
  console.log(abc);
  console.log(selectedContent);

  return (
    <div>
      Hello
      {abc}
      <br />
      <br />
      <button type="button" onClick={showNewTextField}> Add another field</button>
      <div>
        {
        showNewField ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" value={value} onChange={handleChange} />
              <input type="submit" value="Submit" />
            </form>
          </div>
        ) : null
      }
      </div>
      <div>
        {selectedContent[0].fields.length === 0 ? <div>No fields</div>
          : (
            <div>
              Hello 2
              {selectedContent[0].fields.map((eachField) => (
                <React.Fragment key={eachField}>
                  <ContentTypeField eachField={eachField} editField={editField} />
                </React.Fragment>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default ContentTypePage;
