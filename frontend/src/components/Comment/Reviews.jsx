import { Avatar, Container,Divider, Stack , Rating, Typography } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function Reviews({values}) {
    
  return (
      <Container sx={{p:1,mt:1}}>
            <Stack direction='row' spacing={1} alignItems='center'>
            {values?.user?.image ?
                <Avatar
                alt="Remy Sharp"
                src={values?.user?.image}
                sx={{ width: 56, height: 56 }}
                /> 
                :
                <Avatar>
                <AccountCircleIcon />
                </Avatar>
            }
                <Stack>
                    <Typography variant='h6'>{values.user.firstName} {values.user.lastName}</Typography>
                    <Stack direction='row' spacing={1} alignItems='center' gap={1}>
                        <Rating name="rate" value={3.5} precision={0.5} readOnly />
                            <Typography variant='subtitle1'>{values.createdAt}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant='body1' ml={2}>{values.body}</Typography>
            <Divider sx={{my:5}}/>
    </Container>
  )
}
