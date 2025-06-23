import { useEffect } from "react";
import { Button, Spin } from "shineout";
import InpView from "../../../components/inp-view";
import CardList from "./components/card-list";
import { useStore } from "./store";
import "./index.css";

const View = () => {
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    useStore.getState()?.load();
  }, []);

  return (
    <Spin className="container" loading={loading}>
      <InpView />
      <Button
        onClick={() => {
          useStore.getState()?.load();
        }}
      >
        刷新数据
      </Button>
      <CardList />
    </Spin>
  );
};

export default View;
