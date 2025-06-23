import { create } from "zustand";

const requestList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomList = Array.from({ length: 400 }, () => {
        return {
          content: Math.floor(Math.random() * 100),
        };
      });
      resolve(randomList);
    }, 1000);
  });
};

export const useStore = create((set) => ({
  list: [],
  loading: false,
  load: async () => {
    set({ loading: true });

    const newList = await requestList();

    set({
      loading: false,
      list: newList,
    });
  },
}));
