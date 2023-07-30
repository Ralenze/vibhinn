const Card = (props) => {
  return (
    <div
      className={
        "cursor-pointer relative w-[12em] h-[16em] md:w-[18em] md:h-[24em] rounded-3xl border-[1px] border-solid border-black overflow-clip hover:scale-110 transition duration-300 hover:shadow-2xl mt-5  md:mt-10"
      }
    >
      <a href={props.href} target={props.target}>
        <div
          className={"absolute w-full h-full"}
          href={props.href}
          target={props.target}
        >
          <img
            href={props.href}
            target={props.target}
            src={props.imagesrc}
            className={
              "relative rounded-t-1xl bg-cover h-4/5 w-full object-cover"
            }
          />
        </div>
        <div
          href={props.href}
          target={props.target}
          className={
            " absolute bottom-0 w-full h-1/5 bg-secondary bg-opacity-70 text-text font-exo flex lg:text-xl justify-center place-items-center "
          }
        >
          {props.text}
        </div>
      </a>
    </div>
  );
};
export default Card;
