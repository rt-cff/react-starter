import { FC } from 'react';
import { Layout, Menu } from 'antd';

export const SideMenu: FC = () => {
  return (
    <Layout.Sider>
      <Menu mode="inline">
        <Menu.SubMenu title="Sub Menu 1">
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Sub Menu 2">
          <Menu.Item>Menu Item 1</Menu.Item>
          <Menu.Item>Menu Item 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};
