import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { useStore } from 'store';
import { observer } from 'mobx-react-lite';

const OriginData = (props) => {
  const { originData } = useStore();

  const add = () => {
    originData.addCount();
  };

  return (
    <div>
      <Button onClick={add}>元数据</Button>
      {originData.count}
    </div>
  );
};

export default observer(OriginData);
