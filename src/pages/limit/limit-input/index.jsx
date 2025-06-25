import { useState } from "react";
import { Button, Input } from "shineout";

const View = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Input type="text" disabled={loading} />
      <Button
        loading={loading}
        onClick={async () => {
          setLoading(true);

          // 远程请求数据
          await fetchData();

          setLoading(false);
        }}
      >
        刷新数据
      </Button>
    </div>
  );
};

export default View;
