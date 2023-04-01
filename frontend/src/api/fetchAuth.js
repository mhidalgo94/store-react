import { instance } from "./baseFetch";


export const login = async (email,password)=>{
    const res = await instance.post('/login',{email,password})
    return res 

}

