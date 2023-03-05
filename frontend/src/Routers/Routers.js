import { createBrowserRouter } from "react-router-dom";
import LayoutStore from "../components/Base/LayoutStore";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from '../pages/Product/Product';
import PageCheckoutAlternative1 from "../pages/Checkout/CheckoutAlternative_1";
import CartShopPage from "../pages/CartShop/CartShopPage";

import ProfileBase from "../pages/Profile/ProfileBase";
import LoginPage from "../pages/Login/LoginPage";
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
import VerifyCodePage from "../pages/Login/VerifyCode/VerifyCodePage";


const Routers = createBrowserRouter([
    {
        path:'/',
        element: <LayoutStore authRequired={false} />,
        children: [
            { path:'', element: <Home/>,},
            { path:'/shop/products', element: <Products /> },
            { path:'/shop/product/:id', element: <Product /> },
            { path:'/checkout-alternative', element: <PageCheckoutAlternative1 /> },
            { path:'/cart-shop', element: <CartShopPage /> },
            { path:'/login', element: <LoginPage /> },
            { path:'/verify-code', element: <VerifyCodePage /> },

        ]
    },
    {
        path:'/account',
        element: <LayoutStore authRequired={true} toRedirect='/login' />,
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
            { path:'/pay-methods-new', element: <NewPayMethod /> },
            { path:'/pay-methods-edit/:id', element: <EditPayMethod /> },

        ]
    }

])


export default Routers;