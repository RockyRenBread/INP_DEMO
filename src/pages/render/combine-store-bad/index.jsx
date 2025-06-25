import { useStore } from "./store";

const View = () => {
  const listMap = useStore((state) => state.listMap);

  const keyList = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div>
      <button
        onClick={() => {
          useStore.getState().resetList();
        }}
      >
        刷新数据
      </button>
      {keyList.map((index) => (
        <div>
          <div key={index}>key: {index}</div>
          <ul>
            {listMap[index]?.map((item, listIndex) => (
              <li key={listIndex}>{item.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default View;
