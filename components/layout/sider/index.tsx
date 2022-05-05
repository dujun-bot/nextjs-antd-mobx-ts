import React, { PureComponent, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import _ from 'lodash';
import { useRouter } from 'next/router';
import menus from '../../../config/menu';
import style from './index.module.less';

const { Sider } = Layout;

const AppSider = () => {
  const route = useRouter();
  const [selectkey, useSelectKey] = useState('');
  const { pathname } = route;

  useEffect(() => {
    const menukey = _.chain(pathname).split('/').last().value();
    useSelectKey(`/${menukey}`);
  }, [pathname]);

  const menusClick = ({ key, keyPath }) => {
    const keys = keyPath.reverse().join('');
    useSelectKey(key);
    route.push(keys);
  };

  return (
    <Sider width={200} collapsible className={style.appSider}>
      <div className={style.logo}>logo</div>
      <Menu
        mode='inline'
        defaultSelectedKeys={['/originData']}
        defaultOpenKeys={['/metadata']}
        selectedKeys={[selectkey]}
        onClick={menusClick}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={menus}
      />
    </Sider>
  );
};
export default AppSider;
