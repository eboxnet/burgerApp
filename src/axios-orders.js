import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-6d1f2-default-rtdb.firebaseio.com/",
});

export default instance;
