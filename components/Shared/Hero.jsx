import Image from "next/image";
import React from "react";
import img from "../../assets/nav_background.jpg";

const Hero = () => {
  return (
    <div className="flex mx-10 my-10">
      {/* <Image src={img} width={600} height={500} className=" " /> */}
      <div className=" flex flex-col mx-28 items-center">
        <h1 className="text-5xl text-center">CropIntel</h1>

        <p className="text-xl my-10 w-full">
          CROPINTEL's main aim is to help farmers identify the most suitable
          crop for their land to get maximum output.
        </p>
      </div>
    </div>
  );
};

export default Hero;
