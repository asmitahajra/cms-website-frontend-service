/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route,
  useHistory,
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';

import { getAuthToken } from './utils/utils';
import ContentTypeBuilder from './components/ContentTypeBuilder/ContentTypeBuilder';
import CollectionTypes from './components/CollectionTypes/CollectionTypes';
import apiUtils from './utils/api';

const _ = require('lodash');

const App = () => {
  const abc = 1;
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [allContentTypes, setAllContentTypes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedContent, setSelectedContent] = useState([{ id: 0, fields: [], instances: [] }]);
  const [allContent, setAllContent] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(
    [{ id: 0, fields: [], instances: null }],
  );

  const setStatus = async () => {
    setLoggedInStatus(true);

    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are 1');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);
    console.log('old content');
    console.log(allContentTypes);
    setLoaded(true);
  };

  const editTheInstance = async (previousInstance, values, colId, instId) => {
    console.log('to edit');
    console.log(previousInstance, values, colId, instId);
    const newObject = _.cloneDeep(values);
    newObject.uniqueId = instId;
    console.log('new object');
    console.log(newObject);
    console.log('edit it');

    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are 7');
    console.log(allContentTypesObjects);

    const objectIndex = allContentTypesObjects.findIndex((e) => e.id === colId);
    // this is index of content

    console.log(objectIndex);

    const newAllContent = _.cloneDeep(allContentTypesObjects);

    const oldObject = newAllContent[objectIndex];
    // this is object
    console.log('oldobject', oldObject);

    const oldArrayOfObjects = oldObject.instances;
    console.log('oldinstances', oldArrayOfObjects);

    const instanceIndex = oldArrayOfObjects.findIndex((e) => e.uniqueId === instId);
    console.log('instanceIndex', instanceIndex);
    oldArrayOfObjects[instanceIndex] = newObject;

    console.log('updatedInstance', oldArrayOfObjects);

    const editedInstance = await apiUtils.editInstance(oldArrayOfObjects, colId);

    console.log(editedInstance);

    const fetchedContentTypes2 = await apiUtils.getAllContentTypes();
    const allContentTypesObjects2 = fetchedContentTypes2.allContentTypes;
    console.log('these are 8');
    console.log(allContentTypesObjects2);

    const resultCollection = allContentTypesObjects2.filter(
      (obj) => obj.id === colId,
    );
    console.log('this is selected collectionnnnnnn');
    console.log(resultCollection);
    setSelectedCollection(resultCollection);
  };

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
    console.log('these are 2');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);

    // console.log(id);
  };

  const updateFieldsAndInstances = async (newFields, id, oldvalue, newValue) => {
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are 7');
    console.log(allContentTypesObjects);

    console.log(newFields);
    console.log('my id');
    console.log(id);
    console.log(oldvalue);
    console.log(newValue);
    let i;

    const getOldObject = allContentTypes.find((e) => e.id === id);
    const getOldInstance = getOldObject.instances;
    console.log('old instance');
    console.log(getOldInstance);

    // console.log(newFields);
    if (getOldInstance !== null) {
      const newInstances = _.cloneDeep(getOldInstance);
      for (i = 0; i < newInstances.length; i++) {
        newInstances[i][newValue] = newInstances[i][oldvalue];
        delete newInstances[i][oldvalue];
      }
      console.log('updated instances');
      console.log(newInstances);
      console.log('new fields');
      console.log(newFields);
      const updatedFieldsAndInstances = await apiUtils.updateFieldsAndInstances(
        newFields, newInstances, id,
      );
      console.log(updatedFieldsAndInstances);
      const fetchedAgain = await apiUtils.getAllContentTypes();
      const allObjects = fetchedAgain.allContentTypes;
      console.log('these are 3');
      console.log(allObjects);
      setAllContentTypes(allObjects);

      const resultCollection = allObjects.filter(
        (obj) => obj.id === id,
      );
      console.log('this is selected collectionnnnnnn');
      console.log(resultCollection);
      setSelectedCollection(resultCollection);
    } else {
      const updatedField = await apiUtils.updateField(newFields, id);
      console.log('updatedField');
      console.log(updatedField);
      const fetchedAgain = await apiUtils.getAllContentTypes();
      const allObjects = fetchedAgain.allContentTypes;
      console.log('these are 3');
      console.log(allObjects);
      setAllContentTypes(allObjects);
      const resultCollection = allObjects.filter(
        (obj) => obj.id === id,
      );
      console.log('this is selected collectionnnnnnn');
      console.log(resultCollection);
      setSelectedCollection(resultCollection);
    }
  };

  // change
  const showContentFields = async (id) => {
    const resultContent = allContentTypes.filter((obj) => obj.id === id);
    console.log('this is selected');
    console.log(resultContent);
    setSelectedContent(resultContent);
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are 4');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);
    console.log();
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
    console.log('these are 5');
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
    console.log('these are 6');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);

    const resultCollection = allContentTypesObjects.filter(
      (obj) => obj.id === selectedCollectionId,
    );
    console.log('this is selected collectionnnnnnn');
    console.log(resultCollection);
    setSelectedCollection(resultCollection);
  };

  const deleteField = async (id, fieldName) => {
    console.log('id and fieldname');
    console.log(id);
    console.log(fieldName);
    const newAllContent = _.cloneDeep(allContentTypes);
    console.log(newAllContent);

    const objectIndex = newAllContent.findIndex((e) => e.id === id);
    // this is index of content
    console.log(objectIndex);

    const oldObject = newAllContent[objectIndex];
    // this is object
    console.log('oldobject', oldObject);

    let oldArrayOfObjects = oldObject.fields;
    console.log('oldFields', oldArrayOfObjects);

    oldArrayOfObjects = oldArrayOfObjects.filter((e) => e !== fieldName);
    console.log('updated fields');

    const oldInstances = oldObject.instances;
    if (oldInstances !== null) {
      // update fields and instances
      oldInstances.forEach((v) => { delete v[fieldName]; });

      console.log('new instances and new fields');
      console.log(oldArrayOfObjects);
      console.log(oldInstances);
      const deletedObjects = await apiUtils.updateFieldsAndInstances(
        oldArrayOfObjects, oldInstances, id,
      );
      const fetchedAgain = await apiUtils.getAllContentTypes();
      const allObjects = fetchedAgain.allContentTypes;
      console.log('these are 3');
      console.log(allObjects);
      setAllContentTypes(allObjects);
      const resultCollection = allObjects.filter(
        (obj) => obj.id === id,
      );
      console.log('this is selected collectionnnnnnn');
      console.log(resultCollection);
      setSelectedCollection(resultCollection);
      setSelectedContent(resultCollection);
    } else {
      const deletedObjects = await apiUtils.updateField(oldArrayOfObjects, id);
      const fetchedContentTypes = await apiUtils.getAllContentTypes();
      const allContentTypesObjects = fetchedContentTypes.allContentTypes;
      console.log('these are 2');
      console.log(allContentTypesObjects);
      setAllContentTypes(allContentTypesObjects);
      // update fields only
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
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
              updateFieldsAndInstances={updateFieldsAndInstances}
              deleteField={deleteField}
            />
          </Route>
          <Route path="/collectiontypes">
            <CollectionTypes
              allCollections={allContentTypes}
              selectedCollection={selectedCollection}
              createTheInstance={createTheInstance}
              editTheInstance={editTheInstance}
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
