import axios from "axios";

const instance = axios.create({
    baseURL:"https://tap-backend-final-1-t0ve.onrender.com/api",
    responseType:'json',
    withCredentials:true,

});

export default instance;