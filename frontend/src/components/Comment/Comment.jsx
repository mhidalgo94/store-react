import {useState} from 'react';
import { Stack, Avatar, Rating, Typography } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from 'react'
import { Container } from '@mui/system';

export default function Comment() {
    const [rate,setRate] = useState(3.5)
    const photo = false;
    const f = new Date();

    const changeRate = (event,newValue)=>{
        console.log(newValue)
        setRate(newValue);
    }

  return (
    <Container>
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
            <Stack>
                    <Typography variant='h6'>Jhon Valerio</Typography>
                <Stack direction='row' spacing={1} alignItems='center' gap={1}>
                    <Rating name="rate" defaultValue={rate} value={rate} onChange={changeRate} precision={0.5} />
                    <Typography variant='body1' fontWeight='bold'>{rate}</Typography>
                    <Typography variant='subtitle1'>{`${f.getMonth()+1}/${f.getDate()}/${f.getFullYear()}`}</Typography>
                </Stack>
            </Stack>
        </Stack>

        <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores aspernatur ea suscipit minus eum explicabo culpa quam debitis? Autem quam enim harum, quasi atque quo nihil non excepturi laudantium.</Typography>
    </Container>
  )
}
