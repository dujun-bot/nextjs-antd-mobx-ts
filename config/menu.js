import { DatabaseOutlined, ProfileOutlined, VideoCameraOutlined } from '@ant-design/icons';

const Menu = [
  {
    key: '/metadata',
    icon: <DatabaseOutlined />,
    label: '元数据',
    children: [
      {
        key: '/originData',
        icon: '',
        label: '数据源',
      },
      {
        key: '/market',
        icon: '',
        label: '元数据集市',
      },
      {
        key: '/search',
        icon: '',
        label: '数据探查',
      },
    ],
  },
  {
    key: '/taskManage',
    icon: <ProfileOutlined />,
    label: '任务管理',
    children: [
      {
        key: '/scene',
        icon: '',
        label: '场景',
      },
      {
        key: '/dataTask',
        icon: '',
        label: '数据任务',
      },
      {
        key: '/platformTask',
        icon: '',
        label: '平台任务',
      },
      {
        key: '/dataJoin',
        icon: '',
        label: '数据接入',
      },
    ],
  },
  {
    key: '/watchStatistics',
    icon: <VideoCameraOutlined />,
    label: '监控统计',
    children: [
      {
        key: '/operation',
        icon: '',
        label: '运行大盘',
      },
      {
        key: '/dashboard',
        icon: '',
        label: '监控报表',
      },
      {
        key: '/configuration',
        icon: '',
        label: '监控配置',
      },
    ],
  },
];
export default Menu;
