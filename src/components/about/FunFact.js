import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
      <div className="px-0 grid grid-cols-3 md:grid-cols-3 pb-10">
          <FunFactCard icon={<BsTrophyFill />} des="2 Awards Won" />
          <FunFactCard icon={<SiAntdesign />} des="4 Finished Projects" />
          <FunFactCard icon={<BiCodeAlt />} des="Over 2,000 hours of coding" />
      </div>
  );
};

export default FunFact;
