const View = () => {
  // 直接调用 window.open INP 会异常高
  // const handleLinkTo = () => {
  //   window.open("https://www.baidu.com");
  // };

  // 使用 requestAnimationFrame 包裹一层后，INP 有所下降
  const handleLinkTo = (e) => {
    // 1. 阻止浏览器默认立即导航
    e.preventDefault();

    // 2. 下一帧再手动打开
    requestAnimationFrame(() => {
      window.open("https://www.baidu.com", "_blank", "noopener,noreferrer");
    });
  };

  return <span onClick={handleLinkTo}>跳转到</span>;
};

export default View;
