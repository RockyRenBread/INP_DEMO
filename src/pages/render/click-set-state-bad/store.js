import { create } from "zustand";

export const useStore = create((set) => ({
  queue: [],

  // 一个很无敌的 setState 方法，使用它可以任意设置 store 里面任何值
  setState: (params) => {
    set({
      ...params,
    });
  },
}));
