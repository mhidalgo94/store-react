import { useCartState } from "../../store/cartState";
import CartItems from "./CartItems/CartItems";

export default function CartShop() {

    const {products,updateMountProductCart, removeForIdProducts} = useCartState();
    
  return (
    <>
        {products.map((item,index)=>{
            return <CartItems key={index} item={item} update={updateMountProductCart} remove={removeForIdProducts}/>
        })}
    </>
  )
}
