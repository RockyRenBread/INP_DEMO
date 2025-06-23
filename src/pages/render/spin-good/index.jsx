import { useEffect } from "react";
import { Button, Spin } from "shineout";
import CardList from "./components/card-list";
import InpView from "../../../components/inp-view";
import { useStore } from "./store";
import "./index.css";

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

  return (
    <div className="container">
      <InpView />
      <CardLoading />
      <Button
        onClick={() => {
          useStore.getState()?.load();
        }}
      >
        刷新数据
      </Button>
      <CardList />
    </div>
  );
};

export default View;
