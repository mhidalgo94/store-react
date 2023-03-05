import { create } from 'zustand'; 
import { persist} from 'zustand/middleware'


export const userState = create(persist((set,get)=>({
    user:{
        id:4,
        UUid: 'f43f-4f-2f2-f2f2',
        name:'Mario',
        permissions:['client'],
        rols:['admin'],

    },
    isAuth:false,
    setLogout:()=>set(state=>({...state,isAuth:false})),
    setLogin:()=>set(state=>({...state,isAuth:true}))
    }),
    {
        name:'user-profile'
    }
))