import React from "react";
import ProfileIMG from "../assets/Open-Avatar.png";

function Avtar() {
  return (
    <div className="flex justify-center items-center pt-12">
      {/* Smaller on mobile, larger on md screens and up */}
      <div className="w-32 h-32 md:w-[150px] md:h-[150px] rounded-full bg-amber-300 flex justify-center items-center">
        <img
          src={ProfileIMG}
          alt="Avatar"
          // Corresponding responsive sizes for the image itself
          className="w-20 h-20 md:w-[100px] md:h-[100px] object-cover transition-transform duration-300 hover:scale-110 hover:animate-pulse"
        />
      </div>
    </div>
  );
}

export default Avtar;
