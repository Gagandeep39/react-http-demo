import axios from 'axios';
// Creating an Instance of Axios with different value
// This Instace can be imported an used if required
// This will override the default values
// Can be given any name
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

});
// Header associated with instance
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FOR INSTANCE';
// Import name and this name need not be same
export default instance;
