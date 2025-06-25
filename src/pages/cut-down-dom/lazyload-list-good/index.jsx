import { useState, useEffect } from "react";
import CardList from "./components/card-list";
import { getRandomList } from "../../../utils";

const View = () => {
  const [list, setList] = useState([]);

  const load = () => {
    setList(getRandomList(400));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          load();
        }}
      >
        刷新数据
      </button>
      <CardList list={list} />
    </div>
  );
};

export default View;
