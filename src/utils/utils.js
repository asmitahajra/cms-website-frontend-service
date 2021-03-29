/* eslint-disable import/prefer-default-export */
export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return `Bearer ${token}`;
};
