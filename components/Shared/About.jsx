import React from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className=" flex flex-col items-center mx-10 my-10">
      <h2 className="text-4xl text-center">Our Story</h2>

      <p className="text-xl w-1/2 text-center my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi
        laboriosam eaque! Porro suscipit repudiandae enim fuga omnis optio
        dolore dolorem praesentium? Eaque, earum esse quae perferendis
        consequatur voluptatum dolor .....
      </p>

      <Button variant="outline">Read More</Button>
    </div>
  );
};

export default About;
