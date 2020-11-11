import React from "react";
import AppSider from "../sider";
import AppHeader from "../header";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import AppFooter from "../footer";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Page = styled(Layout)`
  background: #f0f2f5;
`;

const { Content } = Layout;

const AppLayout: React.FunctionComponent = ({children}): JSX.Element => {
  return (
    <StyledLayout>
      <AppSider />
      <Page>
        <AppHeader />
        <Content style={{ margin: "0 16px", background: "#F0F2F5" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, background: "#fff" }}
          >
            Bill is a cat.
          </div>
        </Content>
        <AppFooter />
      </Page>
    </StyledLayout>
  );
};

export default AppLayout;
