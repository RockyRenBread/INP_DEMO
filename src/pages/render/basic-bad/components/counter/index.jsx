import { useStore } from "../../store";

const Counter = () => {
  const count = useStore((state) => state.count);

  return (
    <div>
      <span>count value: {count} </span>
      <button
        onClick={() => {
          useStore.getState().subtract();
        }}
      >
        subtract -
      </button>
      <button
        onClick={() => {
          useStore.getState().add();
        }}
      >
        add +
      </button>
    </div>
  );
};

export default Counter;
