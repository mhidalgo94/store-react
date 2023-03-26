import { create } from 'zustand'; 
import { persist} from 'zustand/middleware'


export const userState = create(persist((set,get)=>({
    user:{},
    isAuth:false,
    setLogout:()=>set(state=>({...state,isAuth:false})),
    setLogin:(user)=>set(state=>({...state,isAuth:true,user}))
    }),
    {
        name:'user-profile'
    }
))