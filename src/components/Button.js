import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDown,
  faCoffee,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
const Button = ({ styles, href, callbackFunc, children, ...buttonProps }) => {
  let buttonAccess = useRef(null);

  return (
    <button
      ref={buttonAccess}
      className={
        "text-text border-text border-solid border-2 rounded-lg h-12 w-36 transition duration-500 hover:bg-secondary hover:bg-opacity-100" +
        " " +
        styles
      }
      href={href}
      onClick={callbackFunc}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
export default Button;
