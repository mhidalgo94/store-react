import {createTheme} from '@mui/material';
import { red, lightBlue, grey } from '@mui/material/colors';

const storeTheme = createTheme({
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
        lightBlue,
        grey,
        
    },
})


export default storeTheme