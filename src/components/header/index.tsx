import React from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';

const {Header} = Layout;

const StyledHeader = styled(Header)`
  padding: 0;
  background: #fff;
`;

const AppHeader: React.FunctionComponent = (): JSX.Element => {
  return <StyledHeader />;
};

export default AppHeader;
