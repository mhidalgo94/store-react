import {createTheme} from '@mui/material';
import { red, lightBlue, grey,blue } from '@mui/material/colors';

const storeTheme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
          // Agrega aquí tus breakpoints personalizados
          minixs: 400,
        },
    },
    palette:{
        primary: red,
        success: {
            main: '#54B435',
            light: '#82CD47',
            dark: '#379237',
        },
        error: {
            main: '#ff004d',
            light: '#ff4057',
            dark: '##dd0a35',
        },
        orange: {
            main: "#f05d23",
            light: '#f07810',
            dark: '#e94822',
        },
        warning: {
            main: '#f07810',
            light: '#ffa952',
            dark: '#f2910a',
        },
        lightBlue:{
            ...lightBlue,
            'main':lightBlue[400],
            'dark':lightBlue[800],
            contrastText:'#fff'
        },
        grey:{
            ...grey,
            'main':grey[500],
            'dark': grey[800],
            contrastText:'#fff'

        },
        myBlue:{
            main:blue[200]
        }
        
    },
    typography:{
        fontFamily:['Fira Sans', 'sans-serif'].join(',')

    },

})


export default storeTheme