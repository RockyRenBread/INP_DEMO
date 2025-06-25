import { useState, useTransition, useEffect } from "react";
import { useStore } from "../../store";
import { Checkbox } from "shineout";

const AllSelectCheckbox = () => {
  // 乐观UI：优先渲染全选的 checked 状态
  const [optimisticChecked, setOptimisticChecked] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [trigger, setTrigger] = useState(0); // 触发重新渲染

  const allCheckedOuter = useStore((state) => {
    const list = state.list;
    const selected = state.selected;

    return selected?.length > 0 && list.length === selected.length;
  });

  const allChecked =
    optimisticChecked !== null ? optimisticChecked : allCheckedOuter;

  // 监听 trigger 变化，执行真正的全选/取消全选
  useEffect(() => {
    if (trigger === 0) return;
    useStore.getState().switchSelectAll();
    setOptimisticChecked(null);
  }, [trigger]);

  return (
    <Checkbox
      disabled={isPending}
      checked={allChecked}
      onClick={() => {
        setOptimisticChecked(!allChecked); // 先乐观更新

        // useTransition 只能管理 React 自身的状态更新队列。它无法控制 zustand 外部状态 的更新机制
        startTransition(() => {
          setTrigger((t) => t + 1); // 触发副作用
        });
      }}
    >
      全选
    </Checkbox>
  );
};

export default AllSelectCheckbox;
