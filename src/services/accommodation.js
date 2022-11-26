import axios from '../utils/request';

const getExampleService = () => {
  return axios.get('/cho-o');
}

const getAllAccommodation = () =>{
  return axios.get('/cho-o/get-all');
}

const deleteAccommodationById = (id) => {
  return axios.delete('/cho-o', { 
    data: { id }
   });
}
const createAccomadation = (data) => {
  return axios.post('/cho-o/create', data);
}


const getAccommodation = (id) =>{
  return axios.get(`/cho-o/${id}`);
}

const postUpdateAccommodation = (p) => {
  console.log(p)
  return axios.put('/cho-o', p);
}

export { getExampleService, getAllAccommodation, getAccommodation ,postUpdateAccommodation, createAccomadation, deleteAccommodationById};

