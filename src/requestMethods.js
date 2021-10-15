import axios from "axios";
import {store} from "./redux/store"

const BASE_URL = "http://localhost:5000/api/";
const checkToken = store.getState().user.currentUser;
const TOKEN = checkToken==null ? "sample" : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
