import { Card } from "antd";
import { useStore } from "../../store";

const CardList = () => {
  const list = useStore((state) => state.list);

  return (
    <div>
      {list?.map((item, index) => {
        return (
          <Card
            title="Card title"
            key={index}
            variant="borderless"
            style={{ width: 300, padding: 12, marginBottom: 20 }}
          >
            <p>{item.content}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default CardList;
