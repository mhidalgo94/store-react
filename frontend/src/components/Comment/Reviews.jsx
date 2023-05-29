import { Avatar,Box , Container, Stack , Rating, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from '@mui/icons-material/Edit';
import { userState } from '../../store/userState';


export default function Reviews({values}) {
    const {user} = userState();
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
                <Stack sx={{width:'100%'}}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h6'>{values.user.firstName} {values.user.lastName}</Typography>
                        {user?.email === values.user.email &&
                            <Box>
                                <IconButton size='small'>
                                    <EditIcon  sx={{fontSize:'20px'}} color="grey"/>
                                </IconButton>
                            </Box>
                        }
                    </Stack>
                    <Stack direction='row' spacing={1} alignItems='center' gap={1}>
                        <Rating name="rate" value={values.rate} precision={0.5} readOnly />
                        <Typography variant='body2' color="grey">{values.createdAt}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant='body1' pl={4} mt={2}>{values.body}</Typography>
           
    </Container>
  )
}
