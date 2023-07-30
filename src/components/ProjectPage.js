import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDown,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Project from "../routes/Project";

const ProjectPage = (props) => {
  return (
    <div
      ref={props.ref}
      className={
        "h-screen transition duration-1000 relative w-screen cursor-default bg-[url(./images/nightsky.jpg)] bg-no-repeat bg-cover text-white text-[10rem]"
      }
    >
      <h1
        className={
          "absolute top-0 left-0 ml-20 mt-80 lg:ml-80 lg:mt-40 text-gray-300 text-[4rem] lg:text-[12rem] font-exo"
        }
      >
        PRO
      </h1>
      <h1
        className={
          "absolute bottom-0 right-10 text-right text-gray-300 text-[4rem] lg:text-[12rem] mb-80 lg:mr-80 lg:mb-40 font-exo"
        }
      >
        JECTS
      </h1>
      <div
        className={
          " flex justify-center place-items-center transition-all duration-500 hover:text-teal-200 cursor-pointer absolute bottom-0 w-full h-48 text-center text-[2rem] font-mono text-white opacity-50 hover:opacity-100 bg-gradient-to-t from-indigo-800 bg-size-200"
        }
        onClick={props.handleScrollClick}
      >
        <FontAwesomeIcon className={"mx-10"} icon={faAngleDoubleDown} />
        scroll down
        <FontAwesomeIcon className={"mx-10"} icon={faAngleDoubleDown} />
      </div>
    </div>
  );
};
export default ProjectPage;
