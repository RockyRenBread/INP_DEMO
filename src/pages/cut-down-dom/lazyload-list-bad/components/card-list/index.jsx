import { Card } from "antd";

const CardList = (props) => {
  const { list } = props;

  return (
    <div>
      {list?.map((item, index) => {
        // 所有 Card 直接渲染，下一帧的需要渲染的内容较多
        return (
          <Card
            title="Card title"
            key={index}
            variant="borderless"
            style={{
              width: 300,
              height: 150,
              padding: 12,
              marginBottom: 20,
            }}
          >
            <p>{item.content}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default CardList;
