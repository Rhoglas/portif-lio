import { HiBarsArrowUp, HiOutlineBarsArrowDown } from "react-icons/hi2";

const ScrollBtn = () => {
  return (
    <div className="scrollPage">
      <a href="#top" className="scroll">
        <div>
          <HiBarsArrowUp size={"2rem"} />
        </div>
      </a>
      <a href="#bottom" className="scroll">
        <div>
          <HiOutlineBarsArrowDown size={"2rem"} />
        </div>
      </a>
    </div>
  );
};

export default ScrollBtn;
