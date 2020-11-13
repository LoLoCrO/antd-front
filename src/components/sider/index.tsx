// import {
//   PieChartOutlined,
//   DesktopOutlined,
//   UserOutlined,
//   TeamOutlined,
//   FileOutlined,
// } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";
import DynamicMenu from "../menu";
// import SubMenu from "antd/lib/menu/SubMenu";
// import { Link } from "react-router-dom";

const { Sider } = Layout;

const StyledLogo = styled.img`
  height: 5vh;
  display: flex;
  margin: auto;
`;

const AppSider: React.FunctionComponent = (): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const onCollapse = (collapse: boolean) => setCollapsed(collapse);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <StyledLogo src={logo} />
      <DynamicMenu collapsible collapsed={collapsed} onCollapse={onCollapse} />
        
      {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item> */}
      {/* <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
        <Menu.Item key="10" icon={<FileOutlined />}>
          <Link to={`/`}>Home</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<FileOutlined />}>
          <Link to={`/employees`}>Employees</Link>
        </Menu.Item>
      </Menu> */}
    </Sider>
  );
};

export default AppSider;