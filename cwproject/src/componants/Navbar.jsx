import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Img,
  Grid,
  Box,
} from "@chakra-ui/react";
import {SearchIcon } from "@chakra-ui/icons";
import AllRoutes from "./AllRoutes";
import AllLink from "./AllLinks";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import ReactLogo from "../imges/logo.png"


export default function Navbar() {
  return (
    <div>
      <Grid templateColumns="20% 55% 10% 1fr" gap={4} mt="40">
        <Img mt="15px" src={ReactLogo} w = "200px" h="60px" position="relative" bottom="15px" alt="Here is logo"></Img>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray" p="5px" pt="19" pl="20px" />}
            />
            <Input
              type="search"
              placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc"
              p="17"
              pl="50"
              w="600px"
              style={{
                color: "gray",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              }}
            />
          </InputGroup>
        </Stack>
        <Box mt="20px">
          <AiFillMedicineBox  cursor="pointer"/>
        </Box>
        <Box textAlign="left" mt="20px">
          <FaUser cursor="pointer" />
        </Box>
      </Grid>
      <AllLink />
      <AllRoutes />
    </div>
  );
}
