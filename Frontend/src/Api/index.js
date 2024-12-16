import axios from "axios";
const BaseUrl = "http://localhost:3000/api";

export const handelSignup = async (values) => {
  const res = await axios.post(`${BaseUrl}/auth/signup`, values);
  return res;
};
export const handelLogin = async (values) => {
  const res = await axios.post(`${BaseUrl}/auth/login`, values);
  return res;
};

