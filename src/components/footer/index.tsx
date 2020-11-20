import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const {Footer} = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: #fff;
  margin-top: auto;
`;

const AppFooter: React.FunctionComponent = (): JSX.Element => {
  return <StyledFooter>FER Projekt ©2020</StyledFooter>;
};

export default AppFooter;
