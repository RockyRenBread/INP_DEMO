import { useEffect } from "react";
import { Button, Spin } from "antd";
import CardList from "./components/card-list";
import { useStore } from "./store";
import "./index.css";

const View = () => {
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    useStore.getState()?.load();
  }, []);

  return (
    <Spin className="container" spinning={loading}>
      <Button
        onClick={() => {
          useStore.getState()?.load();
        }}
      >
        刷新数据
      </Button>
      {/* 这是一个渲染很耗时的List组件，loading变化时会立即重新渲染 */}
      <CardList />
    </Spin>
  );
};

export default View;
