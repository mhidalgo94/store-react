import axios from 'axios';

const instance = axios.create({
        baseURL:`${process.env.REACT_APP_HOST_BASE_URL}/api` ,
})


export {instance};

