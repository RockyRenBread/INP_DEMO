import { create } from "zustand";

const getRandomList = (length) => {
  return Array.from({ length }, (_, index) => {
    return {
      id: index,
      content: Math.floor(Math.random() * 100),
    };
  });
};

export const useStore = create((set) => ({
  list: getRandomList(250),
  selected: [],

  switchSelect(item) {
    set((state) => {
      const selected = state.selected;
      // 判断 item 是否已经选中，这里假设根据 content 唯一标识
      const index = selected.findIndex((i) => i.content === item.content);
      let newSelected;

      if (index === -1) {
        // 如果没选中，添加
        newSelected = [...selected, item];
      } else {
        // 移除该 item
        newSelected = selected.filter((i) => i.content !== item.content);
      }

      return { selected: newSelected };
    });
  },

  switchSelectAll() {
    set((state) => {
      const list = state.list;
      const selected = state.selected;
      const allSelected =
        selected.length === list.length &&
        list.every((item) => selected.some((sel) => sel.id === item.id));

      if (allSelected) {
        // 已全选，取消选择
        return { selected: [] };
      } else {
        // 未全选，全部选中
        // 这里直接把 list 作为 selected，需注意 item 结构是否相同
        return { selected: [...list] };
      }
    });
  },
}));
