import { create } from "zustand";

export const useStore = create((set, get) => ({
  queue: [],

  addQueue: (content) => {
    const { queue } = get();
    set({
      queue: [...queue, content],
    });
  },
}));
