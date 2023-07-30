import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ComponentButton from "../components/ComponentButton";
const Main = () => {
  const navigate = useNavigate();
  const mainPage = () => {
    console.log("made it");
    navigate("/project");
  };
  const aboutPage = () => {
    console.log("made it");
    navigate("/about");
  };
  // STYLES to avoid duplication
  const buttonStyle = "text-white text-4xl ";
  let changeImagePos = useRef(null);
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      changeImagePos.current.style.backgroundPositionX =
        -event.clientX / 4 + "px";
      changeImagePos.current.style.backgroundPositionY =
        -event.clientY / 10 + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className={
          "absolute flex  h-fit min-h-screen w-screen bg-black test flex-col lg:flex-row place-items-center justify-around lg:justify-normal"
        }
      >
        <div
          ref={changeImagePos}
          className="absolute h-full w-full opacity-30 bg-cover bg-night-sky "
        />
        <div
          className={
            "flex flex-col relative h-1/2 lg:h-full w-full lg:w-1/2  place-items-center justify-center "
          }
        >
          <div
            className={
              "relative h-48 w-48 border-solid border-2 rounded-full border-gray-200 "
            }
          ></div>
          <div className={"text-white py-10 text-center"}>
            <h1 className={"text-4xl"}> Vibhinn Gautam </h1>
            <h2 className={"text-2xl hidden md:block"}>
              {" "}
              Computer Science Student at UWaterloo
            </h2>
            <div className={"flex"}></div>
          </div>
        </div>
        <div
          className={
            "flex flex-col relative h-1/2 lg:h-full w-full lg:w-1/2  place-items-center justify-center "
          }
        >
          <ComponentButton extraStyle={buttonStyle} onClick={aboutPage}>
            ABOUT
          </ComponentButton>
          <ComponentButton extraStyle={buttonStyle} onClick={mainPage}>
            PROJECTS
          </ComponentButton>
          <ComponentButton extraStyle={buttonStyle + " mb-0"}>
            CONTACT
          </ComponentButton>
        </div>
      </div>
    </>
  );
};
export default Main;
