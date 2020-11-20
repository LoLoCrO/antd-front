import { Layout } from "antd";
import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";
import DynamicMenu from "../menu";

const { Sider } = Layout;

const StyledLogo = styled.img`
  height: 5vh;
  display: flex;
  margin: auto;
  position: sticky;

`;

const AppSider: React.FunctionComponent = (): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const onCollapse = (collapse: boolean) => setCollapsed(collapse);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <StyledLogo src={logo} />
      <DynamicMenu inlineCollapsed={collapsed} />
    </Sider>
  );
};

export default AppSider;
