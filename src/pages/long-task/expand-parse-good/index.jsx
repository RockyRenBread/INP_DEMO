import { useState } from "react";
import { getRandomList } from "../../../utils";

const randomListStr = JSON.stringify(getRandomList(999999));

const View = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const targetIsOpen = !isOpen;

    setIsOpen(targetIsOpen);

    if (targetIsOpen) {
      setTimeout(() => {
        // 这是个长任务，延迟操作
        const newList = JSON.parse(randomListStr);
        console.log("newList---", newList);
      }, 0);
    }
  };

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? "收缩" : "展开"}</button>
    </div>
  );
};

export default View;
