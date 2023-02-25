import {NavLink} from "react-router-dom";
import {Grid} from "@chakra-ui/react"
export default function AllLink(){
    let linkStles = {
        textDecoration : "none",
        color : "black",
    }
    return <Grid templateColumns='repeat(9, 1fr)' gap={4} mt="30" pb="20px">
        <NavLink to = "/" style={linkStles}>HOME</NavLink>
        <NavLink to = "/makeup" style={linkStles}>MAKEUP</NavLink>
        <NavLink to = "/harecare" style={linkStles}>HAIR CARE</NavLink>
        <NavLink to = "/skincare" style={linkStles}>SKINCARE</NavLink>
        <NavLink to = "/sanitizingcare" style={linkStles}>SANITIZING CARE</NavLink>
        <NavLink to = "/collectios" style={linkStles}>COLLECTIOS</NavLink>
        <NavLink to = "/rewards" style={linkStles}>REWARDS</NavLink>
        <NavLink to = "/selflove" style={linkStles}>SELFLOVE STUDIO</NavLink>
        <NavLink to = "/offres" style={linkStles}>OFFERS</NavLink>
    </Grid>
}