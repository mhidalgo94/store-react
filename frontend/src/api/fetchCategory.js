import { instance } from "./baseFetch";


export const addCategory = async (formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.post('/category/addCategory', formData, {headers});
    return res;
}

export const getAllCategories = async (token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get('/category/allCategories', {headers});
    return res;
}

export const deleteCategory = async (id,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.delete(`/category/${id}`, {headers});
    return res;
}

