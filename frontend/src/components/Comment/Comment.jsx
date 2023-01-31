import { Stack, Avatar, Rating, Typography } from '@mui/material'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from 'react'

export default function Comment() {

    const photo = false;
    const f = new Date();
  return (
    <>
        <Stack direction='row' spacing={1} alignItems='center'>
            {photo ?
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                /> 
                :
                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
            }
            <div>
                    <Typography variant='h6'>Jhon Valerio</Typography>
                <Stack>
                    <Rating name="rate" defaultValue={2.5} />
                    <Typography variant='subtitle1'>{`${f.getMonth()+1}/${f.getDate()}/${f.getFullYear()}`}</Typography>
                </Stack>
            </div>
            
        </Stack>
    </>
  )
}
