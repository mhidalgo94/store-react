import { instance} from './baseFetch.js';


export const addProduct =async (formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'};
    const res = await instance.post('/products/addProduct', formData, {headers});
    return res;
}

export const getAllProducts = async (token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get('/products/allProducts', {headers});
    return res;
}

export const getPublicProducts = async (params={})=>{
    const res = await instance.get('/products', {params});
    return res;
}



export const getOneProduct = async (id,)=>{
    // const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get(`/products/${id}`);
    return res;
}

export const updateProduct = async (id,formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'};
    const res = await instance.put(`/products/${id}`,formData, {headers});
    return res;
}

export const removeProduct = async (id,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.delete(`/products/${id}`, {headers});
    return res;
}
