import {  Navigate,Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material'

import storeTheme from "../../themes/storeTheme.js";
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import SnackBarAlert from "../SnackBar/SnackBar.jsx";
import { userState } from "../../store/userState";


const LayoutStore = ({authRequired,toRedirect})=>{

    const {isAuth} = userState();
    if(authRequired && isAuth === false){
        return <Navigate to={toRedirect} />
    }

    return (
        <div>
            <ThemeProvider theme={storeTheme}>
                <CssBaseline />
                <NavBar />
                <Box style={{backgroundColor:'#F6F9FC', paddingBottom:'10px'}}>
                    <Outlet />
                </Box>
                <Footer />
                <SnackBarAlert />
            </ThemeProvider>
        </div>
    )
}

export default LayoutStore;