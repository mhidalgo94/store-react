import { Box, Container, Paper, Typography, Grid} from "@mui/material"

function BasePage({children,title,BtnHead}) {
  return (
    <Container>
      <Box sx={{p:3}}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item >
            {BtnHead}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{mx:3, mt:1}}>
        <Paper sx={{p:2}}>
         {children}
      </Paper>
      </Box>

    </Container>
  )
}


export default BasePage;
