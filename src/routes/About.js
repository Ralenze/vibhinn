import Footer from "../components/Footer";
import text from "../aboutpage.txt";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  faAngleDoubleDown,
  faAngleDown,
  faCoffee,
  faArrowLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const navigate = useNavigate();

  const [abtText, setabtText] = useState("");
  let aboutText = useRef("");
  fetch(text)
    .then((res) => res.text())
    .then((text) => {
      setabtText(text.toString());
      console.log(aboutText);
    });
  const mainPage = () => {
    console.log("made it");
    navigate("/main");
  };

  return (
    // this is the main div, we place screen height and width

    <>
      <div className={"h-fit w-screen min-h-screen relative "}>
        <Button
          onClick={mainPage}
          styles={
            "absolute hidden md:block h-16 duration-200 top-8 left-6 w-56 font-mono text-text text-xl hover:bg-accent bg-secondary bg-opacity-70 z-10"
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} /> return{" "}
          <FontAwesomeIcon icon={faHouse} />
        </Button>
        <div
          className={
            "h-[40vh] w-full bg-secondary border-b border-b-text relative flex justify-center place-items-center"
          }
        >
          <div
            className={
              "text-center mx-10 hidden md:block text-[4rem] text-white"
            }
          >
            VIBHINN
          </div>
          <img
            className={
              "relative h-48 mx-10 w-48 rounded-full border-2 border-black "
            }
          ></img>
          <div
            className={
              "text-center mx-10  hidden md:block text-[4rem] text-white"
            }
          >
            GAUTAM
          </div>
        </div>
        <div
          className={
            "bg-background relative h-fit  w-screen overflow-scroll flex justify-center"
          }
        >
          <p
            className={
              " text-text px-12 md:px-32 py-10 my-[10%] md:bg-secondary md:border-2 border-t-2 border-text md:w-[70vw] bg-clip-padding text-base md:text-xl  indent-8 font-exo relative overflow-scroll whitespace-pre-wrap"
            }
          >
            {abtText}
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
