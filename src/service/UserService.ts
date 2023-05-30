import axios from "axios";

const API_BASE_URL = "http://192.168.10.179:8002/api/"; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL
});

export const registerUser = (userdata: string) => {
  // Send a POST request to the registration endpoint
  return api.post("auth/register/", userdata);
};
