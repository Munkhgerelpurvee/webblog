import React from "react";
import { images } from "./constants";
import left from "/public/left.svg";
import right from "/public/right.svg";
import Image from "next/image";


const Description = ({ clickNext, clickPrev }) => {
  return (
   
          <div className="bottom-0  mt-3  mb-6 w-full flex justify-center items-center">
            <div
              className="bottom-0 cursor-pointer "
              onClick={clickPrev}
            >
              <Image src={left} alt="left" />
            </div>

            <div
              className="bottom-0 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="right" />
            </div>
          </div>
      
    
  
  );
};

export default Description;