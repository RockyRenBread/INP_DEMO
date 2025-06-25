import { useEffect, useState } from "react";
import ListView from "./components/list-view";
import { getRandomList } from "../../../utils";

const TAB_STATUS = [
  {
    id: "id1",
    label: "状态1",
  },
  {
    id: "id2",
    label: "状态2",
  },
];

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getRandomList(3000));
    }, 1000);
  });
};

const View = () => {
  const [statusId, setStatusId] = useState("id1");
  // 只保存一份 list 数据，不记录缓存
  const [list, setList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await fetchData();
      // 等异步数据请求后才设置唯一一份 list 数据
      setList(res);
    };
    init();
  }, [statusId]);

  return (
    <div>
      <ul>
        {TAB_STATUS.map(({ id, label }, index) => (
          <button
            key={index}
            onClick={() => {
              setStatusId(id);
            }}
          >
            {label}
          </button>
        ))}
      </ul>

      <div>currentStatusId: {statusId}</div>

      {/* 切换tab时，原来的数据不变，远程请求回来后再展示新的数据 */}
      <ListView list={list} />
    </div>
  );
};

export default View;
