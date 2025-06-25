import { useState, useEffect, useRef } from "react";
import { getRandomList } from "../../../utils";

const Ellipsis = (props) => {
  const myRef = useRef();

  // 去除读取 width 的逻辑，不再多次出发强制同步布局
  // useEffect(() => {
  //   const width = myRef?.current?.getBoundingClientRect().width;
  //   console.log("width", width);
  // }, []);

  return <div ref={myRef}>{props.children}</div>;
};

const View = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setList(getRandomList(700));
        }}
      >
        刷新数据
      </button>
      <ul>
        {list.map((item, index) => (
          <Ellipsis key={index}>{item.content}</Ellipsis>
        ))}
      </ul>
    </div>
  );
};

export default View;
