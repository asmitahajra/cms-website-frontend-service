/* eslint-disable no-unused-vars */
import './App.css';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route,
  useHistory,
} from 'react-router-dom';

// import Utils from './utils/localStorageUtils';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { getAuthToken } from './utils/utils';
import ContentTypeBuilder from './components/ContentTypeBuilder/ContentTypeBuilder';
import CollectionTypes from './components/CollectionTypes/CollectionTypes';
import apiUtils from './utils/api';

// import Home from './components/Home/Home';
// import AddWord from './components/AddWord/AddWord';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const abc = 1;
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  // const [allCollections, setAllCollections] = useState([]);
  const [allContentTypes, setAllContentTypes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedContent, setSelectedContent] = useState([{ id: 0, fields: [], instances: [] }]);
  const [allContent, setAllContent] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(
    { id: 0, fields: [], instances: {} },
  );

  const setStatus = async () => {
    setLoggedInStatus(true);
    // const fetchedCollections = await apiUtils.getAllCollections();
    // const allCollectionObjects = fetchedCollections.allCollections;
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);
    console.log('old content');
    console.log(allContentTypes);
    setLoaded(true);
    // setSelectedContent(allContentTypes[0]);
  };

  // useEffect(async () => {
  //   const allContentTypes = await apiUtils.getAllContentTypes();
  //   // const itemsObjects = await apiUtil.getItems();

  //   // const items = await axios.get('/items');
  //   // console.log({ items });
  //   // const itemsObjects = items.data.data;
  //   // const newItemsObjects = itemsObjects.map((eachProduct) =>  {
  //   //   ...eachProduct,
  //   //   count: eachProduct.count + 1,
  //   // });

  //   // setProducts(itemsObjects);
  //   // const filterProducts = groupByCategory(itemsObjects);
  //   // setIsLoaded(true);
  //   // setFilteredProducts(filterProducts);
  // }, []);
  const showSelectedCollection = async (id) => {
    const resultCollection = allContentTypes.filter((obj) => obj.id === id);
    console.log('this is selected collection');
    console.log(resultCollection);
    setSelectedCollection(resultCollection);
  };

  const updateFields = async (newFields, id) => {
    const updatedField = await apiUtils.updateField(newFields, id);

    console.log(updatedField);
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);

    // console.log(id);
  };

  // change
  const showContentFields = async (id) => {
    const resultContent = allContentTypes.filter((obj) => obj.id === id);
    console.log('this is selected');
    setSelectedContent(resultContent);
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);
  };

  const addNewContentType = async (name) => {
    console.log('content added');
    console.log(name);
    const createdContentType = await apiUtils.createContentType(name);
    console.log('gotten value');
    const newCreatedContentType = createdContentType.createdContentType;
    const newCreatedContentTypeId = newCreatedContentType.id;
    console.log('this is content to be added');
    console.log(newCreatedContentType);
    console.log(newCreatedContentTypeId);

    // now we again get all the content types
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);

    console.log('new content 1');
    console.log(allContentTypes);

    // change next
    // const resultContent = allContentTypes.filter((obj) => obj.id === newCreatedContentTypeId);
    console.log('new content selected');
    console.log(newCreatedContentType);
    setSelectedContent([newCreatedContentType]);
    console.log('yeah');
    console.log(selectedContent);
  };

  const createTheInstance = async (newInstances, selectedCollectionId, uniqueId) => {
    console.log('will create this');
    console.log(newInstances);
    console.log(selectedCollectionId);
    console.log(uniqueId);
    const createdInstance = await apiUtils.createAnInstance(
      newInstances, selectedCollectionId, uniqueId,
    );
    console.log('createdInstance');
    console.log(createdInstance);

    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);

    const resultCollection = allContentTypesObjects.filter(
      (obj) => obj.id === selectedCollectionId,
    );
    console.log('this is selected collectionnnnnnn');
    console.log(resultCollection);
    setSelectedCollection(resultCollection);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   if (token) {
  //     console.log('here');
  //     setLoggedInStatus(true);
  //   }
  // }, []);

  // const addNewVocab = (newVocab) => {
  //   console.log('now we gotta add this');
  //   console.log({ newVocab });
  //   const newVocabitems = [...vocab, newVocab];
  //   setVocab(newVocabitems);
  //   // console.log('new', newVocabitems);
  //   // setVocab(newVocabitems);
  // };

  // do conditionally render NavBar
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        {loggedInStatus ? (
          <div>
            <NavBar
              allContentTypes={allContentTypes}
              showSelectedCollection={showSelectedCollection}
            />
          </div>
        ) : null}
        <Switch>
          <Route path="/contenttypebuilder">
            <ContentTypeBuilder
              allContentTypes={allContentTypes}
              showContentFields={showContentFields}
              selectedContent={selectedContent}
              addNewContentType={addNewContentType}
              updateFields={updateFields}
            />
          </Route>
          <Route path="/collectiontypes">
            <CollectionTypes
              allCollections={allContentTypes}
              selectedCollection={selectedCollection}
              createTheInstance={createTheInstance}
            />
          </Route>
          <Route path="/" exact>
            <LandingPage setStatus={setStatus} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
