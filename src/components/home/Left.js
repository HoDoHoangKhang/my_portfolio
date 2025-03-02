import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
      words: ["Web Developer", "Front End Developer"],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 20,
      delaySpeed: 2000,
  });
  return (
      <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
          <div className="w-full h-3/5">
              <img
                  className="w-full h-full object-cover rounded-2xl"
                  src='./image/avt-3d.png'
                  loading="priority"
                  alt="bannerImage"
              />
          </div>
          <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
              <div className="flex flex-col items-center gap-2 py-10">
                  <h1 className="text-textColor text-4xl font-semibold">
                      Hoang Khang
                  </h1>
                  <p className="text-base text-designColor tracking-wide">
                      {text}
                      <Cursor cursorBlinking="false" cursorStyle="|" />
                  </p>
                  <div className="flex justify-center gap-2 mt-2">
                      <a
                          href="https://github.com/HoDoHoangKhang"
                          target="_blank"
                      >
                          <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                              <FaGithub />
                          </span>
                      </a>
                      <a
                          href="https://www.linkedin.com/in/h%E1%BB%93-%C4%91%E1%BB%97-ho%C3%A0ng-khang-undefined-6951592a9/"
                          target="_blank"
                      >
                          <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                              <FaLinkedin />
                          </span>
                      </a>
                      <a
                          href="https://www.youtube.com/@changkhohoccode"
                          target="_blank"
                      >
                          <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                              <SiYoutubemusic />
                          </span>
                      </a>
                      <a
                          href="https://www.facebook.com/profile.php?id=100087457788400"
                          target="_blank"
                      >
                          <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                              <BsFacebook />
                          </span>
                      </a>
                  </div>
              </div>
              <div className="flex h-14">
                  <a
                      href="my-cv"
                      target="_blank"
                      className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
                      rel="noreferrer"
                  >
                      <button className="w-full h-full flex justify-center items-center gap-2">
                          Download CV <BsCloudLightningFill />
                      </button>
                  </a>
                  <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
                      Contact me <FiSend />
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Left;
