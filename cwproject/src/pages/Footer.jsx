import { Box, Grid, Text, Img} from "@chakra-ui/react";
import ReactLogo from "../imges/logo.png"
export default function Footer(){
    return <>
        <Box mt="100px" display="flex" flexDirection="column" alignItems="center" cursor="pointer">
            <Grid templateColumns="repeat(8, 1fr)" gap="30px">
                <Box>
                    <Text><b>Nails</b></Text>
                    <Text>Nail Polish</Text>
                    <Text>Matte Nail polish</Text>
                    <Text>Nail Lacquer</Text>
                </Box>
                <Box>
                    <Text><b>Eyes</b></Text>
                    <Text>Eyes Shadow</Text>
                    <Text>Eyeliner</Text>
                    <Text>Eyesbrows</Text>
                    <Text>Glitter</Text>
                    <Text>Mascara</Text>
                    <Text>Kajal</Text>
                </Box>
                <Box>
                    <Text><b>Haircare</b></Text>
                    <Text>Shampoo</Text>
                    <Text>Conditioner</Text>
                    <Text>Hair oil</Text>
                    <Text>Serum</Text>
                    <Text>Hair Mask</Text>
                    <Text>Combos</Text>
                </Box>
                <Box>
                    <Text><b>Product</b></Text>
                    <Text>Overview</Text>
                    <Text>Features</Text>
                    <Text>Tutorials</Text>
                    <Text>Pricing</Text>
                    <Text>Releases</Text>
                    <Text>Info</Text>
                </Box>
                <Box>
                    <Text><b>Company</b></Text>
                    <Text>About Us</Text>
                    <Text>Press</Text>
                    <Text>Careers</Text>
                    <Text>Contact Us</Text>
                    <Text>About Us</Text>
                    <Text>Partners</Text>
                </Box>
                <Box>
                    <Text><b>Legal</b></Text>
                    <Text>Cookies Policy</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Services</Text>
                    <Text>Law Enfoecement</Text>
                    <Text>Status</Text>
                </Box>
                <Box>
                    <Text><b>Follow Us</b></Text>
                    <Text>Facebook</Text>
                    <Text>Twitter</Text>
                    <Text>Dribbble</Text>
                    <Text>Instagram</Text>
                    <Text>Linkedin</Text>
                </Box>
                <Box>
                    <Text><b>SelfLove Studio</b></Text>
                    <Text>Style</Text>
                    <Text>Lifestyle</Text>
                    <Text>Trend</Text>
                    <Text>Tips</Text>
                    <Text>Beauty</Text>
                </Box>
            </Grid>
            <Box display="flex" flexDirection="column" alignItems="center" mt="40px" mb="70px">
                <Box>
                    <Img w="200px" src={ReactLogo}></Img>
                </Box>
                <Text>
                  © 2022 Chakra Templates. All rights reserved
                </Text>
            </Box>
        </Box>
    </>
}