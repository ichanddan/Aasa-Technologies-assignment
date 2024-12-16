import axios from "axios";
const BaseUrl = "http://localhost:3000/api";

const { token } = localStorage.getItem("data");
let config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const handelSignup = async (values) => {
  const res = await axios.post(`${BaseUrl}/auth/signup`, values);
  return res;
};
export const handelLogin = async (values) => {
  const res = await axios.post(`${BaseUrl}/auth/login`, values);
  return res;
};
export const handelSearchCity = async (values) => {
  const res = await axios.post(`${BaseUrl}/wether/search`, values, config);
  return res;
};
