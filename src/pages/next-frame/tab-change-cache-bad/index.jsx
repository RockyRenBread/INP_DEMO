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
  // list map 数据，可以缓存每个状态的 list 数据
  const [dataMap, setDataMap] = useState({});

  useEffect(() => {
    const init = async () => {
      const res = await fetchData();
      setDataMap({
        ...dataMap,
        [statusId]: res,
      });
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

      {/* 切换tab时，立即展示缓存数据，远程请求回来后再展示新的数据 */}
      <ListView list={dataMap[statusId]} />
    </div>
  );
};

export default View;
