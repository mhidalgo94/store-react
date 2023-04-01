import { instance } from "./baseFetch";

export const getAllUsers = async ()=>{
    const res = await instance.get('/user/allUsers')
    return res;
}

export const getOneUser = async (id)=>{
    const res = await instance.get(`/user/${id}`)
    return res;
}

export const updateUserClient = async (id,headers)=>{
    const res = await instance.put(`/user/update/${id}`,{headers});
    return res
}

export const createUserClient = async (values)=>{
    const res = await instance.post('/user/addUser',{data:values});
    return res;
}


export const verifyUserClient = async (code)=>{
    const res = await instance.post('/user/verifyCode',{data:code})
    return res;
}

export const resendCode = async (email)=>{
    const res = await instance.post('/user/resendCode',{data:email})
    return res
}
