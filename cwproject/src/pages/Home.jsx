import { Img, Box, Grid,AspectRatio } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import UpTextImg from "./UpTextImg";
import Heading from "./Heading";
import CircularGrid from "./CircularGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
export default function Home() {
  let [data, setData] = useState([]);
  let linkArr = [
    {
      url: "https://files.myglamm.com/site-images/original/MM1920-x-527_1.jpg",
      title: "img1",
    },
    {
      url: "https://files.myglamm.com/site-images/original/SF1920x527_1.jpg",
      title: "img2",
    },
    {
      url: "https://files.myglamm.com/site-images/original/ss1920x527_1.jpg",
      title: "img3",
    },
    {
      url: "https://files.myglamm.com/site-images/original/SF1920x527_1.jpg",
      title: "img4",
    },
  ];

  let smallImg = [
    {
      url: "https://files.myglamm.com/site-images/original/CRED-Pay-3360x279_11.png",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Copy-of-simpl-3360x279_1.png",
    },
    {
      url: "https://files.myglamm.com/site-images/original/AU-3360x279_4.png",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Mobikwik-3360x279_3.png",
    },
  ];

  let circular = [
    {
      url: "https://files.myglamm.com/site-images/original/SKin-1-2.png",
      text: "Skin",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Lips-3.png",
      text: "Lips",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg",
      text: "Hare",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Eyes-4.png",
      text: "Eyes",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Face-5.png",
      text: "Face",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Nails-1.png",
      text: "Nails",
    },
    {
      url: "https://files.myglamm.com/site-images/original/App-PersonalCare_2.png",
      text: "Sanitizing Care",
    },
    {
      url: "https://files.myglamm.com/site-images/original/Bath.png",
      text: "Bath & Body",
    },
  ];

  let containerStyle = {
    width: "100%",
    height: "350px",
    margin: "0 auto",
    paddingTop: "30px",
  };

  let fetchLimitedData = async () => {
    let fetchData = await axios.get(
      `https://cyan-fancy-gopher.cyclic.app/beautyProducts?_limit=${4}`
    );
    setData(fetchData.data);
  };

  useEffect(() => {
    fetchLimitedData();
  }, []);

  let cardData = data.map((el) => {
    return <SingleCard {...el} />;
  });

  return (
    <div style={{ backgroundColor: "rgb(244,244,244)" }}>
      <Img
        src={`https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif`}
        w="100vw"
      ></Img>
      <Box style={containerStyle}>
        <ImageSlider linkArr={linkArr} h="100%" />
      </Box>
      <Img
        src={`https://files.myglamm.com/site-images/original/2240x614-Buy-1-get-1-lipstick.gif`}
        w="100vw"
        pt="60px"
      ></Img>
      <Img
        src={`https://files.myglamm.com/site-images/original/LIT2240x614.jpg`}
        w="100vw"
        pt="20px"
      ></Img>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading text="IN THE SPOTLIGHT" w="250px" />
        <Grid templateColumns="repeat(3, 1fr)" gap="30px">
          <UpTextImg
            img={
              "https://files.myglamm.com/site-images/original/ITS3-700x488_1.jpg"
            }
            text="POPxo Sheet Mask"
          />
          <UpTextImg
            img={
              "https://files.myglamm.com/site-images/original/MM700X488_4.jpg"
            }
            text="Manish Malhotra Strobing Cream"
          />
          <UpTextImg
            img={
              "https://files.myglamm.com/site-images/original/Chisel700x488.gif"
            }
            text="Chisel It Contour Kit"
          />
        </Grid>
      </Box>
      <Img
        src="https://files.myglamm.com/site-images/original/Sleek3-2240x614.jpg"
        w="100%"
      ></Img>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading text="LATEST GLAMM LAUNCHES" w="300px" />
        <Grid templateColumns="repeat(4, 1fr)" gap="30px">
          <UpTextImg
            img="https://files.myglamm.com/site-images/original/xoxo700x488_1.jpg"
            text="XOXO Range"
          />
          <UpTextImg
            img="https://files.myglamm.com/site-images/original/TI700x488.jpg"
            text="Tresure It Range"
          />
          <UpTextImg
            img="https://files.myglamm.com/site-images/original/TR700x488.gif"
            text="POPxo Range"
          />
          <UpTextImg
            img="https://files.myglamm.com/site-images/original/Latest-Glamm-Launches-700x488.jpg"
            text="Pricision Eyebrow Definer"
          />
        </Grid>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-70px",
        }}
      >
        <Heading text="SHOP FROM CATEGORIES" w="300px" />
        <Grid templateColumns="repeat(9, 1fr)" gap="30px">
          {circular.map((el) => {
            return <CircularGrid {...el} radius="50%" />;
          })}
        </Grid>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading text="BESTSELLERS" w="200px" />
        <Grid templateColumns="repeat(4, 1fr)" gap="20px">
          {cardData}
        </Grid>
      </Box>

      <Box style={containerStyle}>
        <ImageSlider linkArr={smallImg} h="100px" />
      </Box>
      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/manual/pk44204430_0.mp4"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
}
