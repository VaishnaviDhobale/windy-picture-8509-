import { useParams,Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import SingleCard from "./SingleCard";
import { AiTwotoneHeart } from "react-icons/ai";
import { Box, Button, Grid, Img, Text,Spinner } from "@chakra-ui/react";
export default function AllDetails() {
  let id = useParams("id").id;
  let [data, setData] = useState([]);
  let [loading,setLoading] = useState(false)
  let fetchData = async () => {
    setLoading(true)
    let fetchData = await axios.get(
      `https://cyan-fancy-gopher.cyclic.app/beautyProducts/${id}`
    );
    setData(fetchData.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading){
    return <Spinner />
  }
  return (
    <Box p="20px">
      <Grid templateColumns="30% 1fr" gap="30px">
        <Img src={data.api_featured_image} w="350px"></Img>
        <Box>
          <Box>
            <h1>{data.name}</h1>

            <Box display="flex" mb="20px" mt="20px">
              <h1>{Math.floor(Math.random() * 10000)}</h1>
              <h2
                style={{
                  position: "relative",
                  bottom: "-10px",
                  marginLeft: "10px",
                }}
              >
                <AiTwotoneHeart color="pink" w="200px" />
              </h2>
            </Box>

            <Text fontSize="30px">₹{Math.floor(data?.price * 50)}</Text>

            <Text>(MRP incl. of all taxes)</Text>
          </Box>
          <Button
            p="10px 20px"
            bgColor="black"
            color="white"
            mt="20px"
            mb="20px"
            cursor="pointer"
          >
           <Link to={`/cart/${data.id}`} style={{
            textDecoration:"none",
            color: "white"
           }}> ADD TO BAG</Link>
          </Button>

          <Text>
            You will receive cashback worth ₹90 as myglammPOINTS on this
            purchase
          </Text>

          <Box mt="20px">
            <h3>Tell Me More</h3>
            <Text>{data.description}</Text>
          </Box>

          <Box mt="20px">
            <h3>Benefits</h3>
            <Text>
              {data?.tag_list?.map((el) => {
                return <li>{el}</li>;
              })}
            </Text>
          </Box>

          <Box display="flex"  mt="20px" mb="40px">
            <h3>Net Weight:</h3>
            <Text position="relative" top="2px" ml="10px">
              {Math.floor(Math.random() * 100)}
              ml
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
