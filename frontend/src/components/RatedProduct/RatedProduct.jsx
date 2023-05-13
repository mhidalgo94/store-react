import { Stack, Rating, Typography } from "@mui/material"

export default function RatedProduct({rating=2}) {
    // Aqui tengo que hacer fetch para rating de un product
  return (
    <Stack direction='row' spacing={1}>
        <Rating name='rating' value={rating} /> 
        <Typography variant="subtitle2">(20)</Typography>
    </Stack>
  )
}
