import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Grid, Box } from "@chakra-ui/react";
import Heading from "./Heading";
export default function Makeup() {
  let [data, setData] = useState([]);

  let getData = async () => {
    let fetchData = await axios.get(
      `https://cyan-fancy-gopher.cyclic.app/beautyProducts`
    );
    setData(fetchData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  let handleShow = (id) => {
    alert(id);
  };

  let cardData = data.map((el) => {
    return <SingleCard {...el} handleShow={handleShow} />;
  });
  return (
    <>
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
    </>
  );
}
