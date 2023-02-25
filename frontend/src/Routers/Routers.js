import { createBrowserRouter } from "react-router-dom";
import LayoutStore from "../components/Base/LayoutStore";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from '../pages/Product/Product';

import ProfileBase from "../pages/Profile/ProfileBase";
import { 
    Orders, 
    Order,
    ProfileInfo,
    EditProfile,
    Addresses,
    NewAddress,
    EditAddress,
    WishList,
    PayMethods,
    NewPayMethod, 
    EditPayMethod

} from "../pages/Profile/pages/index";


const Routers = createBrowserRouter([
    {
        path:'/',
        element: <LayoutStore />,
        children: [
            { path:'', element: <Home/>,},
            { path:'/shop/products', element: <Products /> },
            { path:'/shop/product/:id', element: <Product /> },

        ]
    },
    {
        path:'/account',
        element: <LayoutStore>
                </LayoutStore>,
        children: [
            { path:'profile', element: <ProfileBase /> },
            { path:'profile/orders', element: <Orders /> },
            { path:'profile/order/:id', element: <Order /> },
            { path:'profile/wishlist', element: <WishList /> },
            { path:'profile/profile-info', element: <ProfileInfo /> },
            { path:'profile/profile-edit', element: <EditProfile /> },
            { path:'profile/addresses', element: <Addresses /> },
            { path:'profile/address-new', element: <NewAddress /> },
            { path:'profile/address-edit/:id', element: <EditAddress /> },
            { path:'profile/pay-methods', element: <PayMethods /> },
            { path:'profile/pay-methods-new', element: <NewPayMethod /> },
            { path:'profile/pay-methods-edit/:id', element: <EditPayMethod /> },
        ]
    }

])


export default Routers;