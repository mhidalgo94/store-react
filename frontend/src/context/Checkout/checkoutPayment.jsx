import { createContext, useState } from "react";


export const CheckoutContext = createContext();


export function CheckoutProvider({children}){
    const [valuesCheckout, setValuesCheckout] = useState(null);

    return (
        <CheckoutContext.Provider value={{valuesCheckout,setValuesCheckout}}>
            {children}
        </CheckoutContext.Provider>
    )

}