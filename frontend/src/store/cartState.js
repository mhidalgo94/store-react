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
    amount: 0,
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
                amount:state.getSubtotal(),
                }));
                set(state=>({...state, amount: state.getSubtotal() }));
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
            
            set(state=>({...state, amount: state.getSubtotal() }));
        return [...state.products]
        })
    },
    removeForIdProducts(idItem){
        set(state =>{
            const items = state.products.filter(item => item.id !== idItem);
            return {...state, products:items}
        })
        set(state=>({...state, amount: state.getSubtotal() }));
    },
    // Subtotal pay
    getSubtotal : ()=>{
        const {products} = get();
        // const subtotal = products.reduce((sum,value)=> sum + value.priceXquantity, 0);
        let total = 0;
        for (const product of products) {
            const { quantity, price } = product;
            const productTotal = quantity * parseFloat(price);
            total += productTotal;
        }
        return parseFloat(total).toFixed(2);

    },
    // Tax pay
    getTax:()=>{
        const {getSubtotal} = get();
        const tax = parseFloat(getSubtotal() * parseInt(7) / 100).toFixed(2);
        return tax;
    },
    clearCart : ()=>{
        set(state=>({...state, products: [], newProduct:{}, amount:0}))
    },
    }),
    {
        name:'products-cart '
    }
))

