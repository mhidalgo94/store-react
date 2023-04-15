import { instance } from "./baseFetch";

export const getAllUsers = async ()=>{
    const res = await instance.get('/user/allUsers')
    return res;
}

export const getOneUser = async (id)=>{
    const res = await instance.get(`/user/${id}`)
    return res;
}

export const updateUserClient = async (formData, token)=>{
    const headers = {Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data'}

    const res = await instance.put(`/user/update`,formData,{headers});
    return res
}

export const createUserClient = async (values)=>{
    const res = await instance.post('/user/addUser',{data:values});
    return res;
}


export const verifyUserClient = async (code)=>{
    const res = await instance.post('/user/verifyCode',{data:code});
    return res;
}

export const resendCode = async (email)=>{
    const res = await instance.post('/user/resendCode',{data:email});
    return res
}

// Other fetch about data user.
export const getAddresses = async (token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get('/addresses/allAddresses',{headers});
    return res
}

export const newAddress = async (formData, token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.post('/addresses/addAddress',formData,{headers});
    return res

}

export const getOneAddress = async (id, token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.get(`/addresses/${id}`,{headers});
    return res

}

export const updateAddress = async (id, formData,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.put(`/addresses/${id}`,formData,{headers});
    return res

}

export const deleteAddres = async (id,token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.delete(`/addresses/${id}`,{headers});
    return res
}