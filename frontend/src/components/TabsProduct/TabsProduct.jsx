import {useState} from 'react';
import { Box,Tab } from "@mui/material";
import {TabContext, TabList, TabPanel } from '@mui/lab'
import Comment from '../Comment/Comment';

export default function TabsProduct() {
    const [value, setValue] = useState('0');

    const styleTab = {
        textTransform:'capitalize',
        fontWeight:'bold',
    }

  return (
    <>
        <TabContext value={value} >
            <Box sx={{borderBottom:1,borderColor:'divider'}}>
                <TabList aria-label='tabs-product' onChange={(event, newValue)=> setValue(newValue)} >
                    <Tab label='Specification' value='0' sx={styleTab} />
                    <Tab label='Review' value='1' sx={styleTab} />
                </TabList>
            </Box>
            <TabPanel value='0'>
                Specification:
            </TabPanel>
            <TabPanel value='1'>
                <Comment />
            </TabPanel>

        </TabContext>
    </>
  )
}
