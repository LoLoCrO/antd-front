import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  padding: 0;
  z-index: 10;
  background: #fff;
  position: sticky;
  top: 0;
  height: 6vmin;
  width: 100%;
`;

const AppHeader: React.FunctionComponent = (): JSX.Element => {
  return <StyledHeader />;
};

export default AppHeader;
