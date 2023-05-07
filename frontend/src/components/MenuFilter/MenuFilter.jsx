import {Paper, Box } from "@mui/material";
import "./FilterMenu.scss";

export default function MenuFiler({children}) {

  return (
    <Paper elevation={1}>
      <Box sx={{p:2}}>
          {children}
      </Box>
    </Paper>
  );
}
