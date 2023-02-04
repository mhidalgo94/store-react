import { Paper, Typography } from '@mui/material'
import './ItemsCarousel.scss'

export default function ItemsCarousel({item }) {
  return (
    <div className='container-img' style={{backgroundImage:`url(${item.image})`}}>
        <Paper elevation={1} sx={{width:'250px', background:'rgba(77, 73, 73, 0.7)',borderRadius:'10px'}} className='box-text'>
            <Typography variant='h4' sx={{color:'#eeeeee'}}>{item.title}</Typography>
            <Typography variant='body1' sx={{color:'#eeeeee'}}>{item.text}</Typography>
        </Paper>
    </div>
    
  )
}
