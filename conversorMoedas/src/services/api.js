import axios from "axios";

// https://economia.awesomeapi.com.br/json/all

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/",   // Base URL for the API         
})

export default api;
