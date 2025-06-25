import { useState } from "react";
import { getRandomList } from "../../../utils";

const View = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list] = useState(getRandomList(3000));

  const finalList = isOpen ? list : [];

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "收缩" : "展开"}
      </button>
      <ul>
        {finalList.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </ul>
    </div>
  );
};

export default View;
