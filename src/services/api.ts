import axios from 'axios';

const URL = "http://192.168.0.4:8000/";
const URLTESTE = "https://jsonplaceholder.typicode.com/"

const ApiClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default ApiClient;
