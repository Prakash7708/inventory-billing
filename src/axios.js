import axios from "axios";

let instance=axios.create({
    // baseURL:"http://localhost:3001"
    // baseURL:"https://inventrybilling-backend.herokuapp.com/"
    baseURL:"https://inventry-server.onrender.com"
})

export default instance;