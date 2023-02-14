import { create } from 'zustand'; 

const  addCart = (products, newProduct)=>{
    const item = products.find(item=> item.id === newProduct.id);

    if (item){
        item.quantity = newProduct.quantity;
        return [...products]
    }else{
        return [...products,newProduct]
    }
}

export const useCartState = create((set)=>({
    products:[],
    newProduct:{},
    setNewProduct(item,quantity){
        set( state =>({
            ...state,
            newProduct:{...item,quantity},
        }))
    },
    addProduct(){
        set( state =>({
            products : addCart(state.products, state.newProduct)
        }));
    },
    updateMountProductCart(idItem,quantity){
        set(state =>{
            const item = state.products.find(item => item.id === idItem);
            item.quantity = quantity;
        return [...state.products] 
        })
    },
    removeForIdProducts(idItem){
        set(state =>{
            const items = state.products.filter(item => item.id !== idItem);
            return {...state, products:items}
        })
    }
}))