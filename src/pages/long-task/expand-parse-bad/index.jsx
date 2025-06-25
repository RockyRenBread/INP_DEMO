import { useState } from "react";

const getRandomList = (length) => {
  return Array.from({ length }, () => {
    return {
      content: Math.floor(Math.random() * 100),
    };
  });
};

const randomListStr = JSON.stringify(getRandomList(3000));

const View = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(null);

  const toggleOpen = () => {
    const targetIsOpen = !isOpen;
    setIsOpen(targetIsOpen);

    if (targetIsOpen && !list) {
      // 这里是个长任务
      const newList = JSON.parse(randomListStr);
      setList(newList || null);
    }
  };

  const finalList = isOpen ? list : [];

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? "收缩" : "展开"}</button>
      <ul>
        {finalList?.map((item, idx) => (
          <li key={idx}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default View;
