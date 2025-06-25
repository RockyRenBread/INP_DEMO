import { useState, useRef, useEffect } from "react";
import { Card } from "antd";

const Lazyload = ({ placeholder, children }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // 进入视口后停止观察
          }
        });
      },
      {
        root: null, // 相对于视口
        rootMargin: "0px",
        threshold: 0.1, // 元素至少10%可见触发
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef}>{isInView ? children : placeholder}</div>;
};

const placeholder = <div>loading</div>;

const CardList = (props) => {
  const { list } = props;
  // 是否范围内可见的卡片数
  const [visibleCount, _] = useState(Math.ceil(window.innerHeight / 170));

  return (
    <div>
      {list?.map((item, index) => {
        const content = (
          <Card
            title="Card title"
            key={index}
            variant="borderless"
            style={{
              width: 300,
              height: 150,
              padding: 12,
              marginBottom: 20,
            }}
          >
            <p>{item.content}</p>
          </Card>
        );

        // 如果超出首屏可视范围，则添加懒加载组件
        if (index >= visibleCount) {
          return (
            <Lazyload key={index} placeholder={placeholder}>
              {content}
            </Lazyload>
          );
        }

        return content;
      })}
    </div>
  );
};

export default CardList;
