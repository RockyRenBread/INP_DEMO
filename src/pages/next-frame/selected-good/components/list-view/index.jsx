import { useState, useTransition, useEffect, memo } from "react";
import { useStore } from "../../store";
import { Checkbox } from "shineout";

const SingleCheckbox = memo((props) => {
  const [optimisticChecked, setOptimisticChecked] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [trigger, setTrigger] = useState(0); // 触发重新渲染

  const checkedOuter = useStore((state) => {
    return (
      state.selected.length !== 0 &&
      !!state.selected?.find((item) => item.id === props.item?.id)
    );
  });

  const checked = optimisticChecked !== null ? optimisticChecked : checkedOuter;

  // 监听 trigger 变化，执行真正的全选/取消全选
  useEffect(() => {
    if (trigger === 0) return;
    useStore.getState().switchSelect(props.item);
    setOptimisticChecked(null);
  }, [trigger]);

  return (
    <Checkbox
      checked={checked}
      disabled={isPending}
      onChange={() => {
        setOptimisticChecked(!checked); // 先乐观更新

        startTransition(() => {
          setTrigger((t) => t + 1); // 触发副作用
        });
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
