import { useStore } from "../../store";
import { Checkbox } from "antd";

const AllSelectCheckbox = () => {
  const allChecked = useStore((state) => {
    const list = state.list;
    const selected = state.selected;

    return selected?.length > 0 && list.length === selected.length;
  });

  return (
    <Checkbox
      checked={allChecked}
      onClick={() => {
        useStore.getState().switchSelectAll();
      }}
    >
      全选
    </Checkbox>
  );
};

export default AllSelectCheckbox;
