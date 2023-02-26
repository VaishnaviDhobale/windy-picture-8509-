import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Grid, Box, Spinner } from "@chakra-ui/react";
import Heading from "./Heading";
export default function Makeup() {
  let [data, setData] = useState([]);
  let [loading,setLoading] = useState(false)


  let getData = async () => {
    setLoading(true)
    let fetchData = await axios.get(
      `https://cyan-fancy-gopher.cyclic.app/beautyProducts`
    );
    setData(fetchData.data);
    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);


  let cardData = data.map((el) => {
    return <SingleCard {...el} />;
  });

  if(loading){
    return <h1><Spinner ml="20px" w="20px" h="20px" />Loading...</h1>
  }
  return (
    <Box p="30px">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading text="MAKEUP" w="110px" />
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap="20px">
        {cardData}
      </Grid>
    </Box>
  );
}
