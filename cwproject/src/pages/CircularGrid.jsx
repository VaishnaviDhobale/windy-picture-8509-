
import {Img} from "@chakra-ui/react"
export default function CircularGrid({url,radius,text}){
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Img src={url} borderRadius={radius} border="1px solid gray" padding="4px"></Img>
        <h4>{text}</h4>
    </div>
}