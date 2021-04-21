import axios from "axios";

const instance = axios.create({
    baseURL:"https://backend-tinde.herokuapp.com",
});

export default instance;
