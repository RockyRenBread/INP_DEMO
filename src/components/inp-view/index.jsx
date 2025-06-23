import { useState, useEffect } from "react";
import { onINP } from "web-vitals/attribution";

const Span = (props) => {
  return <span style={{ marginRight: 20 }}>{props.content}</span>;
};

const InpView = () => {
  const [inpData, setInpData] = useState(null);

  useEffect(() => {
    onINP((data) => {
      console.log("data-", data);
      setInpData(data);
    });
  }, []);

  const attribution = inpData?.attribution || {};

  const contentList = [
    `inp: ${inpData?.value || "-"}`,
    `输入延迟: ${attribution?.inputDelay || "-"}`,
    `处理用时: ${attribution?.processingDuration || "-"}`,
    `展示延迟: ${attribution?.presentationDelay || "-"}`,
  ];

  return (
    <div>
      {contentList?.map((content, index) => (
        <Span key={index} content={content} />
      ))}
    </div>
  );
};

export default InpView;
