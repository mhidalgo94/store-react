import CartItems from './CartItems';
import { useCartState } from '../../../store/cartState';

export default function CartCheckout() {
    const {products,updateMountProductCart, removeForIdProducts} = useCartState();
    
  return (
    <>
        {products.map((item,index)=>{
            return <CartItems key={index} item={item} update={updateMountProductCart} remove={removeForIdProducts}/>
        })}
    </>
  )
}
