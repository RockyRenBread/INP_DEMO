export const getRandomList = (count) => {
  return Array.from({ length: count }, () => {
    return {
      content: Math.floor(Math.random() * 999999),
    };
  });
};
