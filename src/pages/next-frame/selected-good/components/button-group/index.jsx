import { useStore } from "../../store";
import { Button } from "antd";

const ButtonGroup = () => {
  const hasChecked = useStore((state) => {
    return state.selected.length > 0;
  });

  return (
    <div>
      <Button disabled={!hasChecked}>操作1</Button>
      <Button disabled={!hasChecked}>操作2</Button>
    </div>
  );
};

export default ButtonGroup;
