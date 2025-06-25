import { useState } from "react";
import { useStore } from "../../store";
import { getRandomList } from "../../../../../utils";

const ListView = () => {
  const [list] = useState(getRandomList(1500));
  // ListView 组件并不需要 queue 数据渲染 UI
  const queue = useStore((state) => state.queue);

  const add = (item) => {
    useStore.getState().setState({
      // 只要在 click 事件中才需要知道 queue 数据，导致了重复渲染
      queue: [...queue, item.content],
    });
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
