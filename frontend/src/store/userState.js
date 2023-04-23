import { create } from 'zustand'; 
// import { persist} from 'zustand/middleware'
import jwt_decode from 'jwt-decode';


export const userState = create((set,get)=>({
    user:{},
    isAuth:false,
    token:"",
    setLogout:()=>set(state=>({isAuth:false,token:"", user:{}})),
    setLogin:(user)=>set(state=>({...state,isAuth:true,user})),
    setUser: (token)=>{
        const decode = jwt_decode(token);
        return set(state => ({...state, user: ({...decode}) , isAuth:true, token}));
    }
    })
)