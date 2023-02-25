import { Container } from "@mui/material"
import HeadProfile from "./HeadProfile"


export default function ProfileBase({children}) {
  return (
    <>
        <HeadProfile />
        <Container>
            {children}
        </Container>
    </>
  )
}
