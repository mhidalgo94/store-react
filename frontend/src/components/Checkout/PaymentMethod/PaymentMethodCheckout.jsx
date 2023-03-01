import {useState} from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import {Box, Typography,FormControl, TextField, Stack, Paper, Grid, Select, MenuItem,InputLabel, Button} from '@mui/material';


export default function PaymentMethodCheckout() {
  const monthsOfYear = [
    { name: 'January', number: 1 },
    { name: 'February', number: 2 },
    { name: 'March', number: 3 },
    { name: 'April', number: 4 },
    { name: 'May', number: 5 },
    { name: 'June', number: 6 },
    { name: 'July', number: 7 },
    { name: 'August', number: 8 },
    { name: 'September', number: 9 },
    { name: 'October', number: 10 },
    { name: 'November', number: 11 },
    { name: 'December', number: 12 }
  ];
  // Expiration Month
  const [exMonth, setExMonth] = useState('');
  // Expiration Year
  const [exYear, setExYear] = useState('');
  
  
  // Obtenemos el año actual
  const currentYear = new Date().getFullYear();
  // Creamos un array para almacenar los años
  const years = [];
  // Agregamos el año actual
  years.push(currentYear);
  // Agregamos los 10 años posteriores al actual
  for (let i = 1; i <= 10; i++) {
    years.push(currentYear + i);
  }


  return (
    <Paper sx={{p:3}}>
      <Stack direction='row' alignItems='center' spacing={1}>
        <PaymentIcon color='primary' />
        <Typography variant='h5'>Payment Details</Typography>
      </Stack>
      <Box component='form' sx={{mt:2}}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <TextField fullWidth type='text' size='small' required label='Enter your name' />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField fullWidth type='text' size='small' required label='Enter your card number' />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Expire Card Month</InputLabel>
              <Select
                labelId='select-label'
                fullWidth
                size='small'
                value={exMonth}
                onChange={(e)=> setExMonth(e.target.value)}
                label="Expire Card Month"
                required
                >
                    <MenuItem  value=''><em>None</em></MenuItem>
                {monthsOfYear.map((value,index)=>{
                  return (
                    <MenuItem key={index} value={value.number}>{value.name}</MenuItem>
                    )
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label2">Expire Card Year</InputLabel>
              <Select
                labelId='select-label2'
                fullWidth
                size='small'
                value={exYear}
                onChange={(e)=> setExYear(e.target.value)}
                label="Expire Card Year"
                required
                >
                    <MenuItem  value=''><em>None</em></MenuItem>
                {years.map((value,index)=>{
                  return (
                    <MenuItem key={index} value={value}>{value}</MenuItem>
                    )
                  })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sm={4} xs={12}>
            <TextField fullWidth type='text' size='small' required label='CVC' />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{mt:3}}>
        <Button color='primary' variant='contained' fullWidth>Place Order</Button>
      </Box>
    </Paper>
    
  )
}
