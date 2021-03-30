/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import CollectionTypesList from '../CollectionTypeList/CollectionTypeList';

const NavBar = ({ allContentTypes, showSelectedCollection }) => (
  <div data-testid="navbar" className="navbar">
    <div className="header">
      <h1>CMS+</h1>
    </div>
    <div className="collectiontypes">
      <Link className="collectiontypes" to="/collectiontypes"><b>CollectionTypes</b></Link>
    </div>
    <div className="collectiontypelist">
      <CollectionTypesList
        allContentTypes={allContentTypes}
        showSelectedCollection={showSelectedCollection}
      />
    </div>
    <div className="contenttypebuilder">
      <Link className="eshopper" to="/contenttypebuilder"><b>Content Type Builder</b></Link>
    </div>
  </div>
);

// Card.propTypes = {
//   word: PropTypes.string.isRequired,
//   sentence: PropTypes.string.isRequired,
// };

export default NavBar;
