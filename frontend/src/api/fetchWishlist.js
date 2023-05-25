import {instance} from './baseFetch.js'



export const addRemoveWishList = async (ProductId,token)=>{
    const headers = { Authorization: `Bearer ${token}`};
    const res = await instance.post(`/wishList/addWishList`,{ProductId},{ headers } );
    return res;
}

export const wishListUser = async (token)=>{
    const headers = { Authorization: `Bearer ${token}`};
    const res = await instance.get(`/wishList/UserWishList`,{ headers } );
    return res;

}