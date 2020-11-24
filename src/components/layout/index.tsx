import React from "react";
import AppSider from "../sider";
import AppHeader from "../header";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import AppFooter from "../footer";
import { Link, useLocation } from "react-router-dom";
import { getRouteFragments } from "../../utils/routes";
import { IRouteFragment } from "../../typescript/interfaces";

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  height: 100vh;
`;

const Page = styled(Layout)`
  background: #f0f2f5;
`;

const StyledContent = styled(Content)`
  margin: 0 16px;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 2vmin;
  position: sticky;
  top: 6vmin;
  background-color: #f0f2f5;
  z-index: 10;
`;

const AppLayout: React.FunctionComponent = ({ children }): JSX.Element => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = React.useState<IRouteFragment[]>([]);
  React.useEffect(() => {
    setBreadcrumbs(getRouteFragments(location.pathname));
  }, [location.pathname]);

  const Breadcrumbs = () => (
    <StyledBreadcrumb>
      {breadcrumbs.map(({ name, route }: IRouteFragment, index: number) => (
        <Breadcrumb.Item key={index}>
          <Link to={`/${route}`}>{name}</Link>
        </Breadcrumb.Item>
      ))}
    </StyledBreadcrumb>
  );

  return (
    <StyledLayout>
      <AppSider />
      <Page>
        <AppHeader />
        <Breadcrumbs />
        <StyledContent>
          {children}
          <AppFooter />
        </StyledContent>
      </Page>
    </StyledLayout>
  );
};

export default AppLayout;
