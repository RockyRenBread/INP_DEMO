import { create } from "zustand";

const getRandomList = (length) => {
  return Array.from({ length }, () => {
    return {
      content: Math.floor(Math.random() * 100),
    };
  });
};

export const useStore = create((set, get) => {
  const setSingleList = (key) => {
    const { listMap } = get();

    set({
      listMap: {
        ...listMap,
        [key]: getRandomList(500),
      },
    });
  };

  return {
    listMap: {},

    resetList: async () => {
      for (let i = 0; i < 20; i++) {
        setSingleList(i);
      }
    },
  };
});
