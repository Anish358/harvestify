import Image from "next/image";
import React from "react";
import img from "../../assets/nav_background.jpg";

const Hero = () => {
  return (
    <div className="flex mx-10 my-10">
      <Image src={img} width={600} height={500} className=" " />
      <div className=" flex flex-col mx-5 items-center">
        <h1 className="text-5xl text-center">Harvestify</h1>

        <p className="text-xl my-10 w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          distinctio maxime deleniti doloremque asperiores quibusdam vero, harum
          amet quas earum! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Deleniti, cupiditate.
        </p>
      </div>
    </div>
  );
};

export default Hero;
