import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
const request = axios.create({
  baseURL: "https://1488-162-12-210-2.ap.ngrok.io/",
  timeout: 5000,
});
const user = cookie.get('user');
typeof window !== 'undefined' && user ? request.defaults.headers.common['Authorization'] = user.detail.token : request.defaults.headers.common['Authorization'] = null;

export default request;