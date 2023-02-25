import {
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../componants/Auth";


export default function SignUp() {
  let { signupData, signUp } = useContext(AuthContext);
  let name = useRef("");
  let email = useRef("");
  let pass = useRef("");
  let [status, setStatus]  =useState(true)

  let handleSihnUp = (e) => {
    e.preventDefault();
    setStatus(true)
   for(let i=0; i<signupData.length;i++){
     if (signupData[i].email === email.current.value) {
      setStatus(false);
      alert("OOP!, You are alredy Our User");
      return 0
     }
   }
    if(status){
      let signupObj = {
        name: name.current.value,
        email: email.current.value,
        password: pass.current.value,
      };
      signUp(signupObj)
    }
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ width: "150px" }}>Sign Up</h1>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        w="400px"
        m="auto"
        textAlign="center"
        p="30px"
        mt="50px"
        mb="40px"
      >
        <form onSubmit={handleSihnUp}>
          <Input
            type="text"
            w="94%"
            p="10px"
            outline="none"
            placeholder="Enter Name"
            mb="20px"
            //  value=""
            ref={name}
          />
          <Input
            type="text"
            w="94%"
            p="10px"
            outline="none"
            placeholder="Enter Email"
            // value=""
            ref={email}
          />
          <br />
          <Input
            type="password"
            w="94%"
            p="10px"
            outline="none"
            mt="20px"
            mb="20px"
            placeholder="Enter Password"
            ref={pass}
          />
          <br />
          <Input
            type="submit"
            p="10px"
            cursor="pointer"
            backgroundColor="pink"
            border="none"
            onClick={handleSihnUp}
          />
        </form>
        <Text mt="20px">
          Have account? <Link to="/login">Login</Link>
        </Text>
      </Box>
    </>
  );
}
