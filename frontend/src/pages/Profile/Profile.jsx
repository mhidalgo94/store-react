import { Container } from "@mui/material"
import HeadProfile from "./HeadProfile"


export default function Profile({children}) {
  return (
    <>
        <HeadProfile />
        <Container>
            {children}
        </Container>
    </>
  )
}
