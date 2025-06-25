import { useStore } from "../../store";

const QueueView = () => {
  const queue = useStore((state) => state.queue) || [];

  return <div>队列数据：{queue.join(",")}</div>;
};

export default QueueView;
