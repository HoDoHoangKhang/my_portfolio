import React from "react";
import { img1, img2, img3, img4, img5, img6 } from "../../assets";

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
                        image={img1}
                    />
                    <ProjectsCard
                        title="Blog Marketing"
                        category="Website"
                        image={img2}
                    />
                    <ProjectsCard
                        title="Portfolio"
                        category="Website"
                        image={img3}
                    />
                </div>
                <div className="px-6">
                    <ProjectsCard
                        title="E-Commerce"
                        category="Website"
                        image={img4}
                    />
                    <ProjectsCard
                        title="Portfolio"
                        category="Website"
                        image={img5}
                    />
                    <ProjectsCard
                        title="ERP Langding"
                        category="Website"
                        image={img6}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
