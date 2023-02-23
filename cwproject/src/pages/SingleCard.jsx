import { Box, Img, Text } from "@chakra-ui/react";
export default function SingleCard({
  api_featured_image,
  brand,
  category,
  description,
  id,
  name,
  price,
  price_sign,
}) {
  return (
    <Box
      key={id}
      w="96%"
      textAlign="center"
    //   padding="20px"
      backgroundColor="white"
      boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      pb="20px"
    >
      <Img src={api_featured_image} w="100%" h="300px" pb="10px"></Img>
      <h2>{name}</h2>
      {/* <h2>{brand}</h2> */}
      <Text mt="10px" mb="10px">{`${description.substring(0, 30)}...`}</Text>
      <h2>
        {price_sign}
        {price}
      </h2>
    </Box>
  );
}
