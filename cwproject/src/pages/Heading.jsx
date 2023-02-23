
export default function Heading({text,w}){
    return <h2
    style={{
      textAlign: "center",
      marginTop: "80px",
      width: {w},
      boxShadow: "rgb(254 155 155) 0px -30px 31px -32px inset",
      marginBottom : "40px"
    }}
  >
    {
        text
    }
  </h2>
}