import { createBrowserRouter } from "react-router-dom";
import LayoutStore from "../components/Base/LayoutStore";
import LayoutManger from "../components/Base/LayoutManger";

import Home from "../pages/Home/Home";
import ProductsProvider from "../pages/Products/ProductsProvider";
import Product from '../pages/Product/Product';
import PageCheckOut from "../pages/Checkout/PageCheckout";
import CartShopPage from "../pages/CartShop/CartShopPage";

import ProfileBase from "../pages/Profile/ProfileBase";
import LoginPage from "../pages/Login/LoginPage";
import SignIn from "../pages/Login/SignIn";
import VerifyCodePage from "../pages/Login/VerifyCode/VerifyCodePage";
import ResendCodePage from "../pages/Login/ResendCodeVerifyUser/ResendCodeVerifyUser";
import SuccessPaymentPage from '../pages/Payment/SuccessPaymentPage';
import VerifyEmail from "../pages/Login/ChangePassword/VerifyEmail";
import ChangePassword from "../pages/Login/ChangePassword/ChangePassword";

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
    NewPayMethod

} from "../pages/Profile/pages/index";
import { ProductsPage, AddProduct,EditProduct, AddNewCategory,ListOrdersPage } from "../pages/Manage";
import OrderPagePublic from "../pages/OrderPublic/OrderPagePublic";




const Routers = createBrowserRouter([
    {
        path:'/',
        element: <LayoutStore authRequired={false} />,
        children: [
            { path:'', element: <Home/>,},
            { path:'/shop/products', element: <ProductsProvider /> },
            { path:'/shop/product/:id', element: <Product /> },
            { path:'/checkout-alternative', element: <PageCheckOut /> },
            { path:'/cart-shop', element: <CartShopPage /> },
            { path:'/login', element: <LoginPage /> },
            { path:'/sign-in', element: <SignIn /> },
            { path:'/resendCode', element: <ResendCodePage /> },
            { path:'/verify-code', element: <VerifyCodePage /> },
            { path:'/verify-email', element: <VerifyEmail /> },
            { path:'/change-password/:id', element: <ChangePassword /> },
            { path:'/payment-succeeded', element: <SuccessPaymentPage /> },
            { path:'/order-sales/:id', element: <OrderPagePublic /> },

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
            { path:'profile/pay-methods-add', element: <NewPayMethod /> },
        ]
    },
    {
        path:'/manage',
        element: <LayoutManger authRequired={true} roles={['admin','moderator']} toRedirect='/login' />,
        children: [
            { path:'list-products', element: <ProductsPage /> },
            { path:'add-product', element: <AddProduct /> },
            { path:'edit-product/:id', element: <EditProduct /> },
            { path:'add-category', element: <AddNewCategory /> },
            { path:'list-orders', element: <ListOrdersPage /> },
        ]
    },


])


export default Routers;