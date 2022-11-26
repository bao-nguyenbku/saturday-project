import axios from '../utils/request';

const getExampleService = () => {
  return axios.get('/cho-o');
}

const getAllAccommodation = () =>{
  return axios.get('/cho-o/get-all');
}
const deleteAccommodationById = (id) => {
  return axios.delete('/ch-o', id);
}
const createAccomadation = (data) => {
  return axios.post('/cho-o/create', data);
}

export { getExampleService, getAllAccommodation, createAccomadation, deleteAccommodationById };