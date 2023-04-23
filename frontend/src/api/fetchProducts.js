import { instance} from './baseFetch.js';


export const addProduct =async (formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'};
    const res = await instance.post('/products/addProduct', formData, {headers});
    return res;
}

export const getAllProducts = async ()=>{
    const res = await instance.get('/products/allProducts');
    return res;
}

export const removeProduct = async (id,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.delete(`/products/${id}`, {headers});
    return res;
}