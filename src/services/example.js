import axios from '../utils/request';

const getExampleService = () => {
  return axios.get('/cho-o');
}

export { getExampleService };