import { memo } from "react";
import { useStore } from "../../store";
import { Checkbox } from "antd";

const SingleCheckbox = memo((props) => {
  const checked = useStore((state) => {
    return (
      state.selected.length !== 0 &&
      !!state.selected?.find((item) => item.id === props.item?.id)
    );
  });

  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        useStore.getState().switchSelect(props.item);
      }}
    />
  );
});

const ListView = () => {
  const list = useStore((state) => state.list);

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={`${item.content}_${index}`}>
            <SingleCheckbox item={item} />
            <span>{item.content}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListView;
