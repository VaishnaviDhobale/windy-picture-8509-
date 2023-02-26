import { Box, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function SingleCard({
  api_featured_image,
  brand,
  category,
  description,
  id,
  name,
  price,
  price_sign,
}) 
{
  let style={}
  return (
    <Link to={`/alldetails/${id}`} style={{textDecoration: "none", color:"black"}}>
      <Box
        key={id}
        w="96%"
        textAlign="center"
        //   padding="20px"
        backgroundColor="white"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        pb="20px"
        cursor="pointer"
        style={style}
        onMouseEnter={style["border"]="2px solid black"}
        onMouseLeave={style["border"] = "none"}
      >
        <Img src={api_featured_image} w="100%" h="300px" pb="10px"></Img>
        <h2>{name}</h2>
        {/* <h2>{brand}</h2> */}
        {description ? (
          <Text mt="10px" mb="10px">{`${description.substring(
            0,
            30
          )}...`}</Text>
        ) : null}
        <h2>
          {price_sign}
          {price==0.0 ? `${(Math.floor(Math.random()*100)+1)}.0` : price}
        </h2>
      </Box>
    </Link>
  );
}
