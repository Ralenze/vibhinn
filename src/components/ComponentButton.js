const ComponentButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "relative h-24 w-72 md:h-32 md:w-96 border-2 transition duration-500 border-gray-300 bg-black opacity-80 hover:bg-blue-700 hover:opacity-100 rounded-3xl my-6 " +
        props.extraStyle
      }
    >
      {props.children}
    </button>
  );
};
export default ComponentButton;
