import { useState, useEffect, useRef } from "react";
import { getRandomList } from "../../../utils";

const Ellipsis = (props) => {
  const myRef = useRef();

  useEffect(() => {
    // 读取 width 属性会触发强制同步布局，执行耗时较长的样式计算和布局计算
    const width = myRef?.current?.getBoundingClientRect().width;

    console.log("width", width);
  }, []);

  // React 组件的 render 操作让布局过期，读取 width 属性不能使用缓存数据，而是要执行强制同步布局
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
        {/* 多次执行读取（强制布局）=> 写入DOM => 读取（强制布局） => 写入DOM。导致 INP 升高 */}
        {list.map((item, index) => (
          <Ellipsis key={index}>{item.content}</Ellipsis>
        ))}
      </ul>
    </div>
  );
};

export default View;
