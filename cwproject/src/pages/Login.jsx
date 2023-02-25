import { Box, Input, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../componants/Auth";
export default function Login() {
  let {loginUser,authData} = useContext(AuthContext);
  let signupData = JSON.parse(window.localStorage.getItem("signupdata"));
  let email = useRef("");
  let pass = useRef("");


  let handleLogin = (e) => {
    e.preventDefault()
    for(let i=0;i<signupData.length;i++){
      if(signupData[i].email===email.current.value){
        if(signupData[i].password ===pass.current.value){
          loginUser(signupData[i].name);
          alert("Login")
          break
        }else{
          alert("Wrong Password")
          break
        }
      }else{
        alert("Wrong Email")
        break
      }
    }
  }
  if(authData.isAuth){
    return <Navigate to="/" />
  }
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ width: "100px" }}>Login</h1>
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
        <form>
          <Input
            type="text"
            w="94%"
            p="10px"
            outline="none"
            placeholder="Enter Email"
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
            onClick={handleLogin}
          />
        </form>
        <Text mt="20px">
          Don't have account? <Link to="/signup">Sign Up</Link>
        </Text>
      </Box>
    </>
  );
}
