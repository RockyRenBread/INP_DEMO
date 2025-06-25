import { useState } from "react";
import Counter from "./components/counter";
import { getRandomList } from "../../../utils";
import { useStore } from "./store";

const ListView = () => {
  const [list] = useState(getRandomList(999));
  const count = useStore((state) => state.count);

  // count 每次变化都会触发 ListView 的重新渲染。其实 ListView 只需要知道 count 是否大于5
  const isFull = count >= 5;

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <span>content: {item.content} </span>
          <span>是否加到5: {isFull ? "是" : "否"}</span>
        </li>
      ))}
    </ul>
  );
};

const View = () => {
  return (
    <>
      <Counter />
      <ListView />
    </>
  );
};

export default View;
