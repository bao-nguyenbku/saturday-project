import axios from "../utils/request";

export const getExampleService = () => {
  return axios.get("/cho-o");
};

export const getAllAccomodations = () => {
  return axios.get("/cho-o/get-all");
};
