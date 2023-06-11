import {instance} from './baseFetch.js'



export const listOrderSales = async (token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get('/orderSales/orders', {headers});
    return res;
}

export const getOneOrderSales = async (id)=>{
    // const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get(`/orderSales/order/${id}`);
    return res;

}