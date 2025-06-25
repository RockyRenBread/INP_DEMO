import { create } from "zustand";

export const useStore = create((set, get) => ({
  count: 0,

  add: () => {
    const { count } = get();
    if (count < 5) {
      set({
        count: count + 1,
      });
    }
  },

  subtract: () => {
    const { count } = get();
    if (count > 0) {
      set({
        count: count - 1,
      });
    }
  },
}));
