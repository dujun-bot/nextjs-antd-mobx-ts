import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import style from './index.module.less'

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const AppSider = () => {
  return (
    <Sider width={200} collapsible className={style.appSider}>
      <div className={style.logo}>
        logo
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={items2}
      />
    </Sider>
  );
};
export default AppSider;
