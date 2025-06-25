import { memo } from "react";

const ListView = memo((props) => {
  return (
    <ul>
      {props.list?.map((item, index) => (
        <li key={index}>{item.content}</li>
      ))}
    </ul>
  );
});

export default ListView;
