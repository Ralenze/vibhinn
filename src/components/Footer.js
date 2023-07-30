import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // import your icons
import { useNavigate } from "react-router-dom";

import {
  faAngleDoubleDown,
  faAngleDown,
  faCoffee,
  faArrowLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const navigate = useNavigate();
  const mainPage = () => {
    console.log("made it");
    navigate("/main");
  };
  return (
    <div
      className={
        "flex text-text place-items-center bg-opacity-50 md:bg-opacity-100 w-full h-24 bg-secondary fixed lg:absolute bottom-0"
      }
    >
      <div className={"hidden relative md:block left-10 font-exo"}>
        Copyright © 2023
      </div>
      <div
        className={
          "absolute md:right-0 w-full md:w-1/2 flex divide-x-2 justify-around place-items-center "
        }
      >
        {console.log(windowSize.current[0])}
        {windowSize.current[0] > 600 ? (
          <div className={"hidden md:flex w-36 place-items-center"}></div>
        ) : (
          <div className={"w-1/4 flex justify-center"} onClick={mainPage}>
            <FontAwesomeIcon
              className={
                "hover:scale-110 hover:text-accent transition duration-300 "
              }
              size="3x"
              icon={faHouse}
            ></FontAwesomeIcon>
          </div>
        )}
        <div className={"w-1/4 flex justify-center"}>
          <a
            href="https://discord.com/users/318080214431170560"
            target="_blank"
          >
            <FontAwesomeIcon
              className={
                "hover:scale-110 hover:text-accent transition duration-300 "
              }
              size="3x"
              icon={faDiscord}
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className={"w-1/4 flex justify-center "}>
          <a href="https://www.instagram.com/ralenz.e/" target="_blank">
            <FontAwesomeIcon
              size="3x"
              icon={faInstagram}
              className={
                "hover:scale-110 hover:text-accent transition duration-300"
              }
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className={"w-1/4 flex justify-center"}>
          <a href="https://github.com/Ralenze/vibhinn" target="_blank">
            <FontAwesomeIcon
              size="3x"
              className={
                "hover:scale-110 hover:text-accent transition duration-300"
              }
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
