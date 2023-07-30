import { useState, useEffect, useRef, PureComponent } from "react";
import Button from "../components/Button";
import TextTyper from "../components/TextTyper";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  const navigate = useNavigate();

  const mainPage = () => {
    console.log("made it");
    navigate("/main");
  };
  const aboutPage = () => {
    navigate("/about");
  };
  const [textToRender, setText] = useState(0);
  useEffect(() => {
    setTimeout(() => setText(textToRender + 1), 700);
  }, []);

  const randomArr = ["", "Test ", "placeholder"];
  const [addit, setAddit] = useState(false);
  const access = useRef(null);
  setTimeout(() => {
    setAddit(true);
  }, 150);
  if (addit) {
    setTimeout(() => {
      access.current.className =
        "flex absolute bg-black transition ease-in-out duration-250 h-full w-full sm:flex-col md:flex-row focus:outline-none";
    }, 150);
  }
  return (
    <>
      <div
        ref={access}
        tabIndex={-1}
        className={
          "flex absolute bg-blue-50 transition ease-in-out duration-500 h-full w-full sm:flex-col md:flex-row focus:outline-none"
        }
        onKeyPress={(e) => {
          setText(textToRender + 1);
          console.log("keyPressed");
        }}
      >
        <div className={"relative h-full w-1/2 flex "}>
          <TextTyper
            className={"relative top-64 left-24 h-3/5"}
            index={textToRender}
            interval={10}
            Markup={"code"}
          />
        </div>
        <div
          className={
            "relative h-full w-1/2 text-center flex flex-col justify-center space-y-2"
          }
        >
          <h2 className={"relative text-xl animate-fadeIn h-10 text-white"}>
            Press any key to continue...
          </h2>
          {addit ? (
            <Button
              styles={"transition duration-250 relative place-self-center"}
              onClick={mainPage}
              href={"/home"}
              callbackFunc={() => {
                console.log("clicked!");
              }}
            >
              Test
            </Button>
          ) : null}
          <img></img>
        </div>
      </div>
    </>
  );
}
