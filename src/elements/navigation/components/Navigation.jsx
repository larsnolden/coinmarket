import React from 'react';
import {
  AppBar,
  Button
} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

export default ({
  onOverviewCLick,
  onLiquidityCLick,
  children,
}) => (
  <Wrapper>
    <AppBar position="static">
      <ToolBar>
        <Button onClick={onOverviewCLick}>
          Overview
        </Button>
        <Button onClick={onLiquidityCLick}>
          Liquidity
        </Button>
      </ToolBar>
    </AppBar>
    {children}
  </Wrapper> 
);
