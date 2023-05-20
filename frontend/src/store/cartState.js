import { create } from 'zustand'; 
import { persist} from 'zustand/middleware'

const  addCart = (products, newProduct)=>{
    const item = products.find(item=> parseInt(item.id) === parseInt(newProduct.id));

    if (item){
        item.quantity = newProduct.quantity || 1;
        return [...products]
    }else{
        return [...products,newProduct]
    }
}

export const useCartState = create(persist((set,get)=>({
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
            const item = state.products.find(item => parseInt(item.id) === parseInt(idItem));
            item.quantity = quantity;
            item.priceXquantity = parseFloat(item.price * item.quantity).toFixed(2)

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
    }),
    {
        name:'products-cart '
    }
))

