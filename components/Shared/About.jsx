import React from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className=" flex flex-col items-center mx-10 my-10">
      <h2 className="text-4xl text-center">Our Objective</h2>

      <p className="text-xl w-1/2 text-center my-5">
        Our objective is to improve crop yeild while reducing cost, enhancing
        decision making, mitigating risk all in order to have an economic impact
        by increasing quality of life of farmers.
      </p>

      <Button variant="outline">Read More</Button>
    </div>
  );
};

export default About;
