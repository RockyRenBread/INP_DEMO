import { useEffect } from "react";
import { useStore } from "./store";
import { Input } from "antd";

// labelList 数据变化只会影响 LabelView 的重复渲染
const LabelView = (props) => {
  const labelList = useStore((state) => state.labelList);

  const targetLabel = labelList.find(
    (labelItem) => labelItem.id === props.itemId
  );

  return <div>label: {targetLabel?.label}</div>;
};

// labelList 数据变化不会影响 ListView 的重复渲染
const ListView = () => {
  const list = useStore((state) => state.list);
  const init = useStore((state) => state.init);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Input />
      <ul>
        {list.map((item) => {
          return (
            <li>
              <div>content: {item.content}</div>
              <LabelView itemId={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListView;
