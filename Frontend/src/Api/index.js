import axios from "axios";
const BaseUrl = "http://localhost:3000/api";

const data = localStorage.getItem("data");
const parsedData = JSON.parse(data); 
const token = parsedData?.token;
let config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
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
