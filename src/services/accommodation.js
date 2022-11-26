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
  const config = {
    method: 'post',
    url: 'https://cnpm-nang-cao-app.herokuapp.com/cho-o',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  }
  return axios(config);
}
export { getExampleService, getAllAccommodation ,postUpdateAccommodation, createAccomadation};
