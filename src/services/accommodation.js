import axios from '../utils/request';

const getExampleService = () => {
  return axios.get('/cho-o');
}

const getAllAccommodation = () =>{
  return axios.get('/cho-o/get-all');
}

const postUpdateAccommodation = (p) => {
  console.log(p)
  return axios.put('/cho-o', p);
}

const createAccomadation = (data) => {
  console.log(data)
  return axios.post('/cho-o/create', data);
}

export { getExampleService, getAllAccommodation, createAccomadation ,postUpdateAccommodation};
