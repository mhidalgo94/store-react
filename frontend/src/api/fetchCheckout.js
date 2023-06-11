import {instance} from './baseFetch.js'


export const addCheckout = async (formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.post('/checkout/addCheckout', formData,{headers})
    return res;
}

