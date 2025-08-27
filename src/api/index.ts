import axios from "axios"; 

 

const instance = axios.create({ 
    baseURL:'https://mern-travel-api-wc5l.onrender.com/api'

}) 

 export default instance