import { useState } from "react";
import { useStore } from "../../store";
import { getRandomList } from "../../../../../utils";

const ListView = () => {
  const [list] = useState(getRandomList(1500));

  const add = (item) => {
    // ListView 组件不需要知道 queue 数据了，减少了渲染
    useStore.getState().addQueue(item.content);
  };

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <span>content: {item.content}</span>
            <button
              onClick={() => {
                add(item);
              }}
            >
              add
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListView;
