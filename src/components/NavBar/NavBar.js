/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import CollectionTypesList from '../CollectionTypeList/CollectionTypeList';

const NavBar = ({ allContentTypes, showSelectedCollection }) => (
  <div data-testid="navbar">
    <Link className="eshopper" to="/collectiontypes"><b>CollectionTypes</b></Link>
    <br />
    <CollectionTypesList
      allContentTypes={allContentTypes}
      showSelectedCollection={showSelectedCollection}
    />
    <Link className="eshopper" to="/contenttypebuilder"><b>Content Type Builder</b></Link>
  </div>
);

// Card.propTypes = {
//   word: PropTypes.string.isRequired,
//   sentence: PropTypes.string.isRequired,
// };

export default NavBar;
