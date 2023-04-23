import {  Navigate,Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material'

import storeTheme from "../../themes/storeTheme.js";
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import SnackBarAlert from "../SnackBar/SnackBar.jsx";
import { userState } from "../../store/userState";


const LayoutManager = ({authRequired,roles,toRedirect})=>{

    const {isAuth,user} = userState();
    if(authRequired && isAuth === false){
        return <Navigate to={toRedirect} />
    }

    if(!roles.includes(user.role)){
        return <Navigate to={toRedirect} />
    }

    return (
        <ThemeProvider theme={storeTheme}>
            <CssBaseline />
            <NavBar />
            <Box style={{backgroundColor:'#F6F9FC', paddingBottom:'10px'}}>
                <Outlet />
            </Box>
            <Footer />
            <SnackBarAlert />
        </ThemeProvider>
    )
}

export default LayoutManager;