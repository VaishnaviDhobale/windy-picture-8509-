import { Img, Box, Grid, Text, AspectRatio} from "@chakra-ui/react";
// import { AiOutlineTwitter,AiOutlineFacebook, AiOutlineLinkedin} from "react-icons/ai"
import ImageSlider from "./ImageSlider";
import UpTextImg from "./UpTextImg";
import Heading from "./Heading";
import CircularGrid from "./CircularGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Videos from "./Videos";
import Footer from "./Footer";


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

  let videoArr = [
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/manual/pk44204430_0.mp4",
      title: "video1",
    },
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/manual/pk44204429_0.mp4",
      title: "video2",
    },
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/instagram-business/17954370218299731_0.mp4",
      title: "video3",
    },
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/instagram-business/17855935937886556_0.mp4",
      title: "video4",
    },
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/instagram-business/17923110941664208_0.mp4",
      title: "video5",
    },
    {
      url: "https://m.photoslurp.com/pslurpmedia.s3.amazonaws.com/instagram-business/18060822622374383_0.mp4",
      title: "video6",
    },
  ];

  let containerStyle = {
    width: "100%",
    height: "350px",
    margin: "0 auto",
    paddingTop: "30px",
  };

  let containerStyle2 = {
    width: "100%",
    height: "100px",
    margin: "0 auto",
    paddingTop: "50px",
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

      <Box style={containerStyle2}>
        <ImageSlider linkArr={smallImg} h="100px" />
      </Box>

      <Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading text="WATCH LOVE SHOP" W="20px" />
          <Text>Upload your favorite makeup looks on instagtam with</Text>
          <Text>
            <span style={{ color: "pink", fontSize: "20px" }}>#selfLove</span>{" "}
            for a chance to featured!
          </Text>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap="30px" mt="40px">
          {videoArr.map((el) => {
            return <Videos {...el} />;
          })}
        </Grid>
      </Box>

      <Img
        src="https://files.myglamm.com/site-images/original/RE2240x614_2.jpg"
        w="100vw"
        mt="60px"
      ></Img>
      <Img
        src="https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png"
        w="100vw"
        mt="40px"
      ></Img>
      <Img
        src="https://files.myglamm.com/site-images/original/Row-43-Disclaimer-Strip-3360x220.png"
        w="100vw"
        mt="30px"
      ></Img>

      <AspectRatio maxW="100vw" h="550px" ratio={1} mt="40px">
        <iframe
          title="test"
          src="https://www.youtube.com/embed/GdcxfyKNiDg?autoplay=1&controls=0&&showinfo=0&loop=1&mute=1"
          allowAutoPlay
          allowFullScreen
        />
      </AspectRatio>


      {/* footer */}
      <Footer />
    </div>
  );
}
