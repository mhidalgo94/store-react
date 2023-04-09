import axios from 'axios';

const instance = axios.create({
        baseURL:`${process.env.REACT_APP_HOST_BASE_URL}/api` ,
})


// instance.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//     console.log('Error:',error)
    
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });

export {instance};

