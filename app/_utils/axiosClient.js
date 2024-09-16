const {default: axios} = require('axios');
 
 const apiUrl='http://localhost:1337/api';


const axiosClient = axios.create({
    baseURL:apiUrl,
});
export default axiosClient;