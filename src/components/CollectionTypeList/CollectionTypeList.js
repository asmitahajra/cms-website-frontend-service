/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import ContentTypePage from '../ContentTypePage/ContentTypePage';
import './CollectionTypeList.scss';
import { useHistory } from 'react-router-dom';

const CollectionTypesList = ({ allContentTypes, showSelectedCollection }) => {
  const history = useHistory();

  const tryThis = (id) => {
    showSelectedCollection(id);
    history.push('/collectiontypes');
  };
  return (
    <div className="collection-list">
      {allContentTypes.map((eachCollectionType) => (
        <div className="eachcollectiontype">
          <button type="button" onClick={() => tryThis(eachCollectionType.id)}>{eachCollectionType.name}</button>
        </div>
      ))}
    </div>
  );
};
export default CollectionTypesList;
