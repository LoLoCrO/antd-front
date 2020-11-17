import React from "react";
import AppSider from "../sider";
import AppHeader from "../header";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import AppFooter from "../footer";
import { Link, useLocation } from "react-router-dom";
import { getRouteFragments } from "../../util/routes";
import { IRouteFragment } from "../../typescript/interfaces";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Page = styled(Layout)`
  background: #f0f2f5;
`;

const { Content } = Layout;

const AppLayout: React.FunctionComponent = ({ children }): JSX.Element => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = React.useState<IRouteFragment[]>([]);
  React.useEffect(() => {
    setBreadcrumbs(getRouteFragments(location.pathname));
  }, [location.pathname]);

  const listBreadcrumbs = () =>
    breadcrumbs.map(({ name, route }: IRouteFragment, index: number) => (
      <Breadcrumb.Item key={index}>
        <Link to={`/${route}`}>{name}</Link>
      </Breadcrumb.Item>
    ));

  return (
    <StyledLayout>
      <AppSider />
      <Page>
        <AppHeader />
        <Content
          style={{
            margin: "0 16px",
            background: "#F0F2F5",
            marginBottom: "2%",
          }}
        >
          <Breadcrumb style={{ margin: "1%" }}>{listBreadcrumbs()}</Breadcrumb>
          {children}
        </Content>
        <AppFooter />
      </Page>
    </StyledLayout>
  );
};

export default AppLayout;
