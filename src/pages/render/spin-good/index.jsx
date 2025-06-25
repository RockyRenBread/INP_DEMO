import { useEffect } from "react";
import { Button, Spin } from "antd";
import CardList from "./components/card-list";
import { useStore } from "./store";
import "./index.css";

// 单独的组件渲染 Spin
const CardLoading = () => {
  const loading = useStore((state) => state.loading);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin loading />
    </div>
  );
};

const View = () => {
  useEffect(() => {
    useStore.getState()?.load();
  }, []);

  // View 组件不需要知道 loading 参数了
  return (
    <div className="container">
      <CardLoading />
      <Button
        onClick={() => {
          useStore.getState()?.load();
        }}
      >
        刷新数据
      </Button>
      {/* 这个渲染很耗时的List组件不会立即重新渲染 */}
      <CardList />
    </div>
  );
};

export default View;
