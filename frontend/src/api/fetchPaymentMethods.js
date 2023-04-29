import { instance } from "./baseFetch";


export const addPaymentMethods = async (formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.post('/paymentMethods/addPaymentMethods', formData, {headers});
    return res;
}

export const getAllPaymentMethods = async (token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get('/paymentMethods/allPaymentMethods', {headers});
    return res;
}

export const getOnePaymentMethods = async (token,id) =>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get(`/paymentMethods/${id}`, {headers});
    return res;
}

export const updatePaymentMethods = async ( formData,id , token) =>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.put(`/paymentMethods/${id}`,formData, {headers});
    return res;
}

export const deletePaymentMethods = async (id,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.delete(`/paymentMethods/${id}`, {headers});
    return res;
}

