import { DatabaseOutlined, ProfileOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Menu = [
  {
    key: '/metadata',
    icon: <DatabaseOutlined />,
    label: '数据管理',
    children: [
      {
        key: '/originData',
        icon: '',
        label: '数据列表',
      },
    ],
  },
];
export default Menu;
