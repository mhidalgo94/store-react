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

export const useCartState = create((set,get)=>({
    products:[],
    newProduct:{},
    // For products
    setNewProduct(item,quantity){
        set( state =>({
            ...state,
            newProduct:{...item,quantity,priceXquantity: (item.price * quantity)},
        }))
    },
    addProduct:  ()=>{
            try{
                set( state =>({
                products : addCart(state.products, state.newProduct),
            }));
                return true
            }catch(e){
                return e.message 
            }
    },
    updateMountProductCart(idItem,quantity){
        set(state =>{
            const item = state.products.find(item => item.id === idItem);
            item.quantity = quantity;
            item.priceXquantity = item.price * item.quantity

        return [...state.products]
        })
    },
    removeForIdProducts(idItem){
        set(state =>{
            const items = state.products.filter(item => item.id !== idItem);
            return {...state, products:items}
        })
    },
    
    // Subtotal pay
    getSubtotal : ()=>{
        const {products} = get();
        const subtotal = products.reduce((sum,value)=> sum + value.priceXquantity, 0);
        return subtotal;

    },
    // Tax pay
    getTax:()=>{
        const {getSubtotal} = get();
        const tax = (parseFloat(getSubtotal()) * parseInt(7)) / 100;
        return tax;
    },
}))

