import { create } from "zustand";

const fetchList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Array(400).fill(0).map((_, index) => ({
          id: index,
          content: `content_${index}`,
        }))
      );
    }, 1000);
  });
};

const fetchLabelList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Array(400).fill(0).map((_, index) => ({
          id: index,
          label: `label_${index}`,
        }))
      );
    }, 2000);
  });
};

export const useStore = create((set) => {
  const requestList = async () => {
    const resList = await fetchList();
    set({
      list: resList,
    });
  };

  const requestLabelList = async () => {
    const resLabelList = await fetchLabelList();
    set({
      labelList: resLabelList,
    });
  };

  return {
    list: [],
    labelList: [],

    init: async () => {
      await requestList();
      requestLabelList();
    },
  };
});
