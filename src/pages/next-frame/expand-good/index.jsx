import { useState, useTransition } from "react";
import { getRandomList } from "../../../utils";

const View = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list] = useState(getRandomList(3000));
  const [finalList, setFinalList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const toggleOpen = () => {
    setIsOpen((open) => !open);
    // 延迟渲染list内容
    startTransition(() => {
      setFinalList(() => (isOpen ? [] : list));
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          toggleOpen();
        }}
      >
        {isOpen ? "收缩" : "展开"}
      </button>
      <ul>
        {isPending && <div>加载中...</div>}
        {!isPending
          ? finalList.map((item, index) => (
              <div key={index}>{item.content}</div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default View;
