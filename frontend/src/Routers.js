import { createBrowserRouter, Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from './pages/Product/Product';
import storeTheme from "./themes/storeTheme";


const LayoutStore = ()=>{
    return (
        <div>
            <ThemeProvider theme={storeTheme}>
                <CssBaseline />
                <NavBar />
                <div style={{backgroundColor:'#F6F9FC'}}>
                    <Outlet />
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    )
}


const Routers = createBrowserRouter([
    {
        path:'/',
        element: <LayoutStore />,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/shop/products',
                element: <Products />
            },
            {
                path:'/shop/product/:id',
                element: <Product />
            },

        ]
    }

])


export default Routers;