import { useState, useEffect } from "react";
import text from "../script.txt";
let arrText;
fetch(text)

.then((res) => res.text())
.then((text) => {
 text.toString();
  arrText= text.split("X");
 }).then( () => {console.log("made it")})
.catch((e) => console.error(e));
let grandText = ``;
let thing = false;
let printer = null;
function TextTyper({
  className,
  index = 0,
  interval = 100,
  Markup = "span"
}) {    

  const [typedText, setTypedText] = useState(``);

  const typingRender = ( updater, interval, setter, value) => {
    if(arrText){
      console.log(thing);
      updater(grandText);
      clearInterval(printer);
    text = arrText[index];
    let localTypingIndex = grandText.length;
    let localTyping = grandText;
    console.log(grandText);
    if (text) {

       
        grandText += text;
      thing = true;
       printer = setInterval(() => {

        if (localTypingIndex < grandText.length) {
          updater((localTyping += grandText[localTypingIndex]));
          localTypingIndex += 1;

        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);
          thing = false;
          //  return setter && setter(value)
        }
      }, 40);
    }
  }
};
  useEffect(() => {
    typingRender( setTypedText, interval);
  }, [index, interval]);

  //   const [showPrompt, setShowPrompt] = useState(true);
  // useEffect(() => {
  //     // Change the state every second or the time given by User.
  //     const interval = setInterval(() => {
  //       setShowPrompt((showPrompt) => !showPrompt);
  //     }, 400);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className = {"whitespace-pre-wrap font-mono text-gray-300 " + className}>
      {typedText ? typedText : ""}
      {/* <span>{showPrompt ? '_' : ' '}</span> */}
    </div>
  );
}
export default TextTyper;