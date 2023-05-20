import { instance } from "./baseFetch";


export const addReviews = async (formData, token)=>{
    const headers = {Authorization: `Bearer ${token}`};
    const res = await instance.post('/reviews/addReview', formData, {headers});
    return res;
}


export const getReviews = async (id)=>{
    const res = await instance.get(`/reviews/published/${id}`);
    return res;
}