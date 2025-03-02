import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <div className="w-full grid grid-cols-9 px-6">
            <div className="col-span-9 md:col-span-4">
                <ResumeTitle title="Experience" icon={<MdWork />} />
                <ResumeCard
                    badge="2024-Now"
                    title="Freelancer Wordpress"
                    subTitle="American Study"
                    des="Developed portfolio websites for students applying to universities
                        Designed and customized websites using WordPress and Elementor based on student requirements"
                />
                <ResumeCard
                    badge="6-9/2024"
                    title="Freelancer Wordpress"
                    subTitle="TADA Labs"
                    des=" Worked with WordPress and Elementor to create demo interfaces for clients
                          Designed and customized the company’s website interface"
                />
            </div>
            <div className="w-full h-full hidden lgl:flex justify-center items-center">
                <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
            </div>
            <div className="col-span-9 md:col-span-4">
                <ResumeTitle title="Education" icon={<GiGraduateCap />} />
                <ResumeCard
                    badge=""
                    title="Sai Gon University"
                    subTitle="Software Engineering"
                    des="Focused on software development, algorithms, and web technologies. Gained hands-on experience with various programming languages and frameworks."
                />
                <ResumeCard
                    badge="2018 - 2021"
                    title="Vinh Binh High School"
                    subTitle="Student"
                    des="Built a strong foundation in mathematics and computer science. Actively participated in academic and extracurricular activities."
                />
            </div>
        </div>
    );
};

export default Education;
