import {  Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'

import storeTheme from "../../themes/storeTheme.js";
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import SnackBarAlert from "../SnackBar/SnackBar.jsx";


const LayoutStore = ()=>{
    return (
        <div>
            <ThemeProvider theme={storeTheme}>
                <CssBaseline />
                <NavBar />
                <div style={{backgroundColor:'#F6F9FC', paddingBottom:'10px'}}>
                    <Outlet />
                </div>
                <Footer />
                <SnackBarAlert />
            </ThemeProvider>
        </div>
    )
}

export default LayoutStore;