import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ServicesCard
                icons={<BiCodeAlt />}
                title="Web Development"
                subTitle="Build professional websites with high performance and great user experience."
            />
            <ServicesCard
                icons={<SiAntdesign />}
                title="Web Design"
                subTitle="Create modern, creative, and user-friendly designs for all screen sizes."
            />
            <ServicesCard
                icons={<FaWordpress />}
                title="WordPress"
                subTitle="Customize themes, optimize speed, and enhance security for WordPress sites."
            />
            <ServicesCard
                icons={<FaAppStoreIos />}
                title="SEO"
                subTitle="Improve search rankings, boost traffic, and optimize content for SEO success."
            />
        </div>
    );
};

export default MyServices;
