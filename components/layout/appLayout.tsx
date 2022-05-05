import React from 'react';
import { Layout } from 'antd';
import AppHeader from './header';
import AppSider from './sider';
import style from './layout.module.less';

const { Content } = Layout;

const AppLayout = ({ children }) => (
  <Layout className={style.appLayout}>
    <AppSider />
    <Layout>
      <AppHeader />
      <Layout>
        <Content className={style.appContent}>{children}</Content>
      </Layout>
    </Layout>
  </Layout>
);
export default AppLayout;
