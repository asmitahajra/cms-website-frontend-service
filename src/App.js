/* eslint-disable no-unused-vars */
import './App.css';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// import Utils from './utils/localStorageUtils';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { getAuthToken } from './utils/utils';
import ContentTypeBuilder from './components/ContentTypeBuilder/ContentTypeBuilder';
import apiUtils from './utils/api';

// import Home from './components/Home/Home';
// import AddWord from './components/AddWord/AddWord';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const abc = 1;
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [allContentTypes, setAllContentTypes] = useState([]);

  // const [vocab, setVocab] = useState([]);

  // useEffect(() => {
  //   const localStorageData = Utils.getWordsFromLocalStorage('vocab');
  //   if (localStorageData) { setVocab(localStorageData); }
  // }, []);

  const setStatus = async () => {
    setLoggedInStatus(true);
    const fetchedContentTypes = await apiUtils.getAllContentTypes();
    const allContentTypesObjects = fetchedContentTypes.allContentTypes;
    console.log('these are ');
    console.log(allContentTypesObjects);
    setAllContentTypes(allContentTypesObjects);
  };

  const [contentTypes, setContentTypes] = useState([{ name: 'C1', fields: { name: 'abc', revenue: 'abc' } }, { name: 'C2', fields: { name: 'abc', contact: 'abc' } }]);

  const [selectedContent, setSelectedContent] = useState({ name: 'C1', fields: { name: 'abc', revenue: 'abc' } });

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

  const showContentFields = (name) => {
    const result = contentTypes.filter((obj) => obj.name === name);
    setSelectedContent(result);
  };

  const addNewContentType = async (name) => {
    console.log('content added');
    console.log(name);
    const createdContentType = await apiUtils.createContentType(name);
    console.log('gotten value');
    console.log(createdContentType.createdContentType);

    const newContentObject = {
      name,
      fields: {},
    };
    const newContentTypes = contentTypes;
    newContentTypes.push(newContentObject);
    setContentTypes(newContentTypes);

    const result = contentTypes.filter((obj) => obj.name === name);
    setSelectedContent(result);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      console.log('here');
      setLoggedInStatus(true);
    }
  }, []);

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
        {loggedInStatus ? <div><NavBar /></div> : null}
        <Switch>
          <Route path="/contenttypebuilder">
            <ContentTypeBuilder
              contentTypes={contentTypes}
              showContentFields={showContentFields}
              selectedContent={selectedContent}
              addNewContentType={addNewContentType}
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
