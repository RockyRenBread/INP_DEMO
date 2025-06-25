import { useEffect } from "react";
import { useStore } from "./store";
import { Input } from "shineout";

const View = () => {
  const list = useStore((state) => state.list);
  // View 组件引入了 list 和 labelList，因此 View 组件的 list 部分会渲染两次
  const labelList = useStore((state) => state.labelList);
  const init = useStore((state) => state.init);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Input />
      <ul>
        {list.map((item) => {
          const targetLabel = labelList.find(
            (labelItem) => labelItem.id === item.id
          );

          return (
            <li>
              <div>content: {item.content}</div>
              {/* list 和 labelList 的数据并不同步。labelList的数据来到后会让 ListView 组件重新请求一次 */}
              <div>label: {targetLabel?.label}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default View;
