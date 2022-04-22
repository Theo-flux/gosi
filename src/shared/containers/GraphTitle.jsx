import { useState } from "react";

function GraphTitle({ title, handleThis }) {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      onClick={() => {
        handleThis();
        setRotate((prev) => !prev);
      }}
      className="cursor-pointer flex justify-between items-center mb-2"
    >
      <p className="text-sm md:text-md font-bold">{title}</p>
      <i
        className={`text-2xl ri-arrow-down-s-fill ${
          rotate ? "rotate-180" : ""
        }`}
      ></i>
    </div>
  );
}

export default GraphTitle;
