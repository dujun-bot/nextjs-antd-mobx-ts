import { Layout, Input, Menu, Dropdown } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import style from './index.module.less';

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  const onClick = () => {};

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: '权限',
          key: '1',
        },
        {
          label: 'Role',
          key: '2',
        },
        {
          label: '系统布置图',
          key: '3',
        },
      ]}
    />
  );

  const onSearch = () => {};

  return (
    <Header className={style.header}>
      <div className={style.content}>
        <Search placeholder='input search text' allowClear onSearch={onSearch} style={{ width: 250 }} />
        <div>
          <span style={{ marginRight: 20 }}>admin</span>
          <Dropdown overlay={menu} placement='bottom' arrow>
            <SettingOutlined />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
export default AppHeader;
