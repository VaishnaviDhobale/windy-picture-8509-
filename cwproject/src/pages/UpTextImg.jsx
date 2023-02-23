import { Img } from "@chakra-ui/react";
export default function UpTextImg({ img, text }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Img src={img} w="100%"></Img>
      <h3
        style={{
          textAlign: "center",
          width: "100%",
          position: "relative",
          bottom: "60px",
          color: "black",
          backgroundColor: "white",
          opacity: "0.7",
          padding: "20px"
        }}
      >
        {text}
      </h3>
    </div>
  );
}
