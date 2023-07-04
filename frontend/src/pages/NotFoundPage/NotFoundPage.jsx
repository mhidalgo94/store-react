import { Box, Typography } from "@mui/material";

export default function NotFoundPage() {
    return (
        <Box sx={{width:'100%', minHeight:'200px', textAlign:'center', p:2}}>
          <Typography variant="h2">404 - Page Not Found</Typography>
          <Typography variant="body1">The page you are looking for does not exist.</Typography>
        </Box>
      );
};
