import { useState } from "react";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai"
export default function ImageSlider({ linkArr,h }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let slideStyles = {
    width: "100%",
    height: h,
    borderRadious: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${linkArr[currentIndex].url})`,
  };


  
  let mainStyle = {
    height: "100%",
    position: "relative",
  };

  let leftStyle = {
    position : "absolute",
    top :`calc(${h}/2)`,
    transform : "translate(0, -50%)",
    left : "32px",
    fontSize : "45px",
    color : "#fff",
    zIndex : 1,
    cursor : "pointer"
  }

  let RightStyle = {
    position : "absolute",
    top :`calc(${h}/2)`,
    transform : "translate(0, -50%)",
    right : "32px",
    fontSize : "45px",
    color : "#fff",
    zIndex : 1,
    cursor : "pointer"
  }

  let goPrev = () =>{
    let isFirstIndex = currentIndex ===0;
    let newIndex = isFirstIndex ? linkArr.length-1  : currentIndex-1;
    setCurrentIndex(newIndex) 
  }

  let goNext = () => {
    let isLastIndex = currentIndex===linkArr.length-1;
    let newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <div style={mainStyle}>
        <div style={leftStyle} onClick = {goPrev}><AiOutlineDoubleLeft /></div>
        <div style={slideStyles}></div>
        <div style={RightStyle} onClick = {goNext}><AiOutlineDoubleRight /></div>
      </div>
    </>
  );
}
