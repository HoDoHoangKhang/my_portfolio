import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const designs = [
    {
        id: 1,
        content: "Adobe XD",
        color: "text-[#470137]",
        bg: "bg-[#EEEBF2]",
        icon: "/image/adobe_xd.png",
    },
    {
        id: 2,
        content: "Figma",
        color: "text-[#F24E1E]",
        bg: "bg-[#F7EFF1]",
        icon: "/image/figma.png",
    },
];
const technicals = [
    {
        id: 1,
        content: "HTML 5",
        color: "text-[#E6613F]",
        bg: "bg-[#F6EEF1]",
        icon: "/image/html.png",
    },
    {
        id: 2,
        content: "CSS",
        color: "text-[#1F62AE]",
        bg: "bg-[#ECF0F8]",
        icon: "/image/css.png",
    },
    {
        id: 3,
        content: "Javascript",
        color: "text-[#7B6F22]",
        bg: "bg-[#F7F6F3]",
        icon: "/image/js.png",
    },
    {
        id: 4,
        content: "JQuery",
        color: "text-[#0868AC]",
        bg: "bg-[#EBF0F8]",
        icon: "/image/jquery.png",
    },
    {
        id: 5,
        content: "React",
        color: "text-[#31BFE5]",
        bg: "bg-[#EFF6FC]",
        icon: "/image/react.png",
    },
    {
        id: 6,
        content: "Redux",
        color: "text-[#764ABC]",
        bg: "bg-[#F1EEF9]",
        icon: "/image/redux.png",
    },
    {
        id: 7,
        content: "Next JS",
        color: "text-[black]",
        bg: "bg-[#EBEBEF]",
        icon: "/image/nextjs 1.png",
    },
    {
        id: 8,
        content: "Firebase",
        color: "text-[#F57F17]",
        bg: "bg-[#F7F1F1]",
        icon: "/image/firebase.png",
    },
    {
        id: 9,
        content: "SASS",
        color: "text-[#CF649A]",
        bg: "bg-[#F5F0F7]",
        icon: "/image/sass.png",
    },
    {
        id: 10,
        content: "Bootstrap",
        color: "text-[#7952B3]",
        bg: "bg-[#f1eff8]",
        icon: "/image/bootstrap.png",
    },
    {
        id: 11,
        content: "Tailwind CSS",
        color: "text-[#1CAFBB]",
        bg: "bg-[#ECF3F9]",
        icon: "/image/tailwindcss.png",
    },
    {
        id: 12,
        content: "Material UI",
        color: "text-[#0081CB]",
        bg: "bg-[#EBF1FA]",
        icon: "/image/semantic.png",
    },
    {
        id: 13,
        content: "Semantic UI",
        color: "text-[#34BDB2]",
        bg: "bg-[#EDF4F8]",
        icon: "/image/material-ui.png",
    },
    {
        id: 14,
        content: "Style Components",
        color: "text-[#994C7B]",
        bg: "bg-[#F7F1F9]",
        icon: "/image/style-component.png",
    },
    {
        id: 15,
        content: "GraphQL",
        color: "text-[#E10098]",
        bg: "bg-[#F6EBF7]",
        icon: "/image/graphql.png",
    },
];

const tools = [
    {
        id: 1,
        content: "VS Code",
        color: "text-[#006EB1]",
        bg: "bg-[#EBF1FA]",
        icon: "/image/vscode.png",
    },
    {
        id: 2,
        content: "Figma",
        color: "text-[#F24E1E]",
        bg: "bg-[#F6EEF1]",
        icon: "/image/gitlab.png",
    },
    {
        id: 3,
        content: "Github",
        color: "text-[#293F4D]",
        bg: "bg-[#EBEDF2]",
        icon: "/image/github.png",
    },
    {
        id: 4,
        content: "Notion",
        color: "text-[#000000]",
        bg: "bg-[#ebebef]",
        icon: "/image/notion.avif",
    },
    {
        id: 5,
        content: "Figma",
        color: "text-[#FF6C37]",
        bg: "bg-[#f7f0f2]",
        icon: "/image/postman.png",
    },
];
const Skills = () => {
  return (
      <div className="w-full px-6 text-[14px]">
          <div className="col-span-9 md:col-span-4">
              <div className="text-[#6D6D6D] mb-6">
                  <h2 className="font-semibold text-[18px] mb-4">
                      DESIGN TOOL
                  </h2>
                  <div className="flex gap-4 text-[#6D6D6D] flex-wrap w-[100%]">
                      {designs.map((design) => (
                          <div
                              key={design.id}
                              className={`inline-flex items-center gap-3 py-3 px-5 rounded-md ${design.bg}`}
                          >
                              <img
                                  className="w-[30px] h-[30px] object-contain"
                                  src={design.icon}
                                  alt=""
                              />
                              <span className={`${design.color}`}>
                                  {design.content}
                              </span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="text-[#6D6D6D] mb-6">
                  <h2 className="font-semibold text-[18px] mb-4">
                      TECKNICAL I USE
                  </h2>
                  <div className="flex gap-4 text-[#6D6D6D] flex-wrap w-[100%]">
                      {technicals.map((technical) => (
                          <div
                              key={technical.id}
                              className={`inline-flex items-center gap-3 py-3 px-5 rounded-md ${technical.bg}`}
                          >
                              <img
                                  className="w-[30px] h-[30px] object-contain"
                                  src={technical.icon}
                                  alt=""
                              />
                              <span className={`${technical.color}`}>
                                  {technical.content}
                              </span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="text-[#6D6D6D] mb-6">
                  <h2 className="font-semibold text-[18px] mb-4">
                      DEVELOPMENT & PRODUCTIVITY TOOLS I USE
                  </h2>
                  <div className="flex gap-4 text-[#6D6D6D] flex-wrap w-[100%]">
                      {tools.map((tool) => (
                          <div
                              key={tool.id}
                              className={`inline-flex items-center gap-3 py-3 px-5 rounded-md ${tool.bg}`}
                          >
                              <img
                                  className="w-[30px] h-[30px] object-contain"
                                  src={tool.icon}
                                  alt=""
                              />
                              <span className={`${tool.color}`}>
                                  {tool.content}
                              </span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Skills;
