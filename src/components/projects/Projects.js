import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
      <div>
          <Title title="Recent" subTitle="Projects" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
              <div className="px-6">
                  <ProjectsCard
                      title="Sport Store"
                      category="Website"
                      image="/image/1.png"
                  />
                  <ProjectsCard
                      title="Blog Marketing"
                      category="Website"
                      image="/image/2.png"
                  />
                  <ProjectsCard
                      title="Portfolio"
                      category="Website"
                      image="/image/3.png"
                  />
              </div>
              <div className="px-6">
                  <ProjectsCard
                      title="E-Commerce"
                      category="Website"
                      image="/image/4.png"
                  />
                  <ProjectsCard
                      title="Portfolio"
                      category="Website"
                      image="/image/5.png"
                  />
                  <ProjectsCard
                      title="ERP Langding"
                      category="Website"
                      image="/image/6.png"
                  />
              </div>
          </div>
      </div>
  );
};

export default Projects;
