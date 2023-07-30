import { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faAngleDoubleDown,
  faAngleDown,
  faCoffee,
  faArrowLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import Footer from "../components/Footer";
import Button from "../components/Button";
const Project = () => {
  const navigate = useNavigate();

  const [changeOverflow, updateChangeOverflow] = useState(false);
  let gallery = useRef(null);
  let initial = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const galleryStyles =
    "relative h-screen w-screen transition duration-1000 bg-background bg-opacity-100 text-center ";
  const initialStyles =
    "h-screen transition duration-1000 relative w-screen cursor-default bg-[url(./images/nightsky.jpg)] bg-no-repeat bg-cover text-white text-[10rem] ";
  const mainPage = () => {
    console.log("made it");
    navigate("/main");
  };
  const [moveDown, setMoveDown] = useState(false);
  let sum = 0;
  let transitionUponMoveDown =
    " transition duration-[4000ms] " + (moveDown ? "opacity-100" : "opacity-0");
  useEffect(() => {
    initial.current.addEventListener("wheel", handleProjectWheel, false);
    if (windowSize.current[0] > 1024) {
      gallery.current.addEventListener("wheel", handleCardScrollWheel, false);
    }
  }, []);
  const handleProjectWheel = (e) => {
    if (e.deltaY > 20) {
      /* 
      If we scroll down with a certain force (to avoid light movements), then we want to go down to
      gallery with a nice transition
      */
      if (windowSize.current[0] > 1024) {
        gallery.current.className = galleryStyles + " -translate-y-full";
        initial.current.className = initialStyles + "-translate-y-full";
      }
      setMoveDown(true);
    }
  };
  const handleScrollClick = () => {
    if (windowSize.current[0] > 1024) {
      gallery.current.className = galleryStyles + " -translate-y-full";
      initial.current.className = initialStyles + "-translate-y-full";
    } else gallery.current.scrollIntoView({ behavior: "smooth" });

    setMoveDown(true);
  };
  const handleCardScrollWheel = (e) => {
    if (e.deltaY < -20) {
      if (windowSize.current[0] > 1024) {
        gallery.current.className = galleryStyles;
        initial.current.className += initialStyles;
      }
      setMoveDown(false);
    }
  };
  return (
    <div className={" h-screen w-screen bg-background lg:overflow-hidden "}>
      <div ref={initial} className={initialStyles}>
        <Button
          onClick={mainPage}
          styles={
            "relative hidden md:block h-16 duration-200 top-8 left-6 w-56 font-mono text-xl hover:bg-slate-400 hover:bg-opacity-30"
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} /> return{" "}
          <FontAwesomeIcon icon={faHouse} />
        </Button>
        <h1
          className={
            "absolute top-0 left-0 ml-20 mt-80 md:ml-40 md:mt-80 text-text text-[4rem] md:text-[8rem] lg:mt-40 lg:ml-80 lg:text-[12rem] font-exo"
          }
        >
          PRO
        </h1>
        <h1
          className={
            "absolute bottom-0 right-10 text-right text-text text-[4rem] md:text-[8rem] mb-80 md:mr-20 md:mb-80 lg:mb-40 lg:mr-60 lg:text-[12rem] font-exo"
          }
        >
          JECTS
        </h1>
        <div
          className={
            " flex justify-center place-items-center transition-all duration-500 hover:text-accent cursor-pointer absolute bottom-0 w-full h-48 text-center text-[2rem] font-mono text-primary opacity-50 hover:opacity-100 bg-gradient-to-t from-indigo-800 bg-size-200"
          }
          onClick={handleScrollClick}
        >
          <FontAwesomeIcon className={"mx-10"} icon={faAngleDoubleDown} />
          scroll down
          <FontAwesomeIcon className={"mx-10"} icon={faAngleDoubleDown} />
        </div>
      </div>
      <div ref={gallery} className={galleryStyles}>
        <div
          className={
            " hidden lg:block isolate filter z-10 first-letter:z-10 md:z-0" +
            transitionUponMoveDown
          }
        >
          <div
            className={
              " filter animate-blob blur-xl absolute top-[20%] opacity-60 left-1/3 w-24 h-24 lg:w-96 lg:h-96 bg-[#ffd1dd] rounded-full mix-blend-multiply ease-in-out"
            }
          ></div>
          <div
            className={
              "filter animate-blob blur-xl absolute opacity-60 top-[20%] right-1/4 w-24 h-24 lg:w-96 lg:h-96 bg-[#85e3ff] rounded-full mix-blend-multiply animation-delay-2000 ease-in-out"
            }
          ></div>
          <div
            className={
              "z-10 filter animate-blob blur-xl opacity-60 absolute top-[25%] lg:top-[35%] right-1/3 w-24 h-24 lg:w-96 lg:h-96 bg-[#ffe18f] rounded-full mix-blend-multiply animation-delay-4000 ease-in-out"
            }
          ></div>
        </div>
        <h1
          className={
            "absolute text-white top-[15%] w-full text-4xl justify-self-center font-exo text-center z-10 md:z-0" +
            transitionUponMoveDown
          }
        >
          PREVIOUS AND UPCOMING PROJECTS
        </h1>
        <div
          className={
            "z-0 top-1/4 lg:top-0 flex flex-col lg:flex-row relative h-full w-full justify-evenly place-items-center bg-bottom  bg-background md:bg-secondary lg:bg-transparent py-32"
          }
        >
          <Card
            text={"SustainHacks"}
            imagesrc={"/images/Sustainhacks.png"}
            href={"https://devpost.com/software/waste-less-64mrqy"}
            target={"_blank"}
          />
          <Card
            text={"BCJCA Website"}
            imagesrc={"/images/bcjca.webp"}
            href={"https://www.bcjca.ca"}
            target={"_blank"}
          />
          <Card
            text={"UPCOMING: Mobile App"}
            imagesrc={"/images/nightsky.jpeg"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Project;

/*


*/

/* <div className={" isolate filter " + transitionUponMoveDown}>
          <div
            className={
              " filter animate-blob blur-xl absolute top-[20%] opacity-60 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply ease-in-out"
            }
          ></div>
          <div
            className={
              "filter animate-blob blur-xl absolute opacity-60 top-[20%] right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply animation-delay-2000 ease-in-out"
            }
          ></div>
          <div
            className={
              "filter animate-blob blur-xl opacity-60 absolute top-[35%] right-1/3 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply animation-delay-4000 ease-in-out"
            }
          ></div>
        </div>
        */
