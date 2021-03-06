/* eslint-disable consistent-return */
// const getWordsFromLocalStorage = (key) => {
//   const value = localStorage.getItem(key);
//   let wordList = [];
//   try {
//     const parsedJSON = JSON.parse(value);
//     if (Array.isArray(parsedJSON)) {
//       wordList = parsedJSON;
//     }
//   } catch (e) {
//     wordList = [];
//   }
//   return wordList;
// };

// const saveWordToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// export default { getWordsFromLocalStorage, saveWordToLocalStorage };

import axios from 'axios';
import { getAuthToken } from './utils';

const getJwtToken = async (body) => {
  try {
    // const jwtToken = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/login`,
    //   {
    //     code,
    //   },
    // );
    const jwtToken = await axios.post(
      'http://localhost:7000/login', body,

    );
    return jwtToken;
  } catch (error) {
    throw new Error('unable to get jwtToken');
  }
};
// const getSuccessMessage = async (url, config = { headers: { Authorization: '' } }) => {
//   const accessToken = getAuthToken();
//   const successMessage = await axios.get('http://localhost:3000/test', { headers: { Authorization: accessToken } });
//   return successMessage;
// };

// const getSuccessMessage = async () => {
//   const accessToken = getAuthToken();
//   const successMessage = await axios.get('http://localhost:3000/test', { headers: { Authorization: accessToken } });
//   return successMessage;
// };

// eslint-disable-next-line consistent-return
const registerAUser = async (body) => {
  // const accessToken = getAuthToken();
  try {
    const registeredUser = await axios.post('http://localhost:7000/register', body);
    return registeredUser;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error('User exists');
    }
  }
};

const loginAUser = async (body) => {
  try {
    const jwtToken = await axios.post('http://localhost:7000/login', body);
    return jwtToken;
  } catch (error) {
    if (error.response.status === 401) { throw new Error('Username and password do not match'); }
    throw new Error('Server error');
  }
};

const createContentType = async (name) => {
  const body = {
    name,
    fields: [],
  };
  const accessToken = getAuthToken();
  const createdContentType = await axios.post('http://localhost:3000/cms', body, { headers: { Authorization: accessToken } });
  return createdContentType.data;
};

const getAllContentTypes = async () => {
  const accessToken = getAuthToken();
  const allContentTypes = await axios.get('http://localhost:3000/cms', { headers: { Authorization: accessToken } });
  console.log(allContentTypes.data);
  return allContentTypes.data;
};

const updateField = async (newField, id) => {
  const body = {
    newField,
  };
  const accessToken = getAuthToken();

  const updatedContentType = await axios.put(`http://localhost:3000/cms/${id}`, body, { headers: { Authorization: accessToken } });
  return updatedContentType.data;
};

// eslint-disable-next-line no-unused-vars
const createAnInstance = async (newInstances, id, uniqueId) => {
  const body = {
    newInstances,
  };
  const accessToken = getAuthToken();
  const updatedContentType = await axios.patch(`http://localhost:3000/cms/instance/${id}`, body, { headers: { Authorization: accessToken } });
  return updatedContentType.data;
};

const updateFieldsAndInstances = async (newFields, newInstances, id) => {
  const body = {
    newFields,
    newInstances,
  };
  console.log('req for field instance');
  console.log(body);
  const accessToken = getAuthToken();
  const updatedContentType = await axios.post(`http://localhost:3000/cms/update/${id}`, body, { headers: { Authorization: accessToken } });
  console.log(updatedContentType.data);
};

const editInstance = async (newInstances, contentId) => {
  const body = {
    newInstances,
  };
  console.log('req for field instance');
  console.log(body);
  const accessToken = getAuthToken();
  const updatedContentType = await axios.patch(`http://localhost:3000/cms/updateinstance/${contentId}`, body, { headers: { Authorization: accessToken } });
  console.log(updatedContentType.data);
};

// const getAllCollections = async () => {
//   const accessToken = getAuthToken();
//   const allContentTypes = await axios.get('http://localhost:3000/cms/all', { headers: { Authorization: accessToken } });
//   console.log(allContentTypes.data);
//   return allContentTypes.data;
// };

// const getAllDemos = async () => {
//   const accessToken = getAuthToken();
//   const successMessage = await axios.get('http://localhost:3000/test', { headers: { Authorization: accessToken } });
//   return successMessage;
// };

// export const getData = async (url, config = { headers: { Authorization: '' } }) => {
//   const accessToken = getAuthToken();
//   const data = await axios.get(url, { headers: { Authorization: accessToken } });
//   return data.data;
// };
export default {
  getJwtToken,
  registerAUser,
  loginAUser,
  createContentType,
  getAllContentTypes,
  updateField,
  createAnInstance,
  updateFieldsAndInstances,
  editInstance,

};
