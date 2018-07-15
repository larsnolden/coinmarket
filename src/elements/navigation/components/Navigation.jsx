import React from 'react';
import {
  AppBar,
  Button
} from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

export default ({
  onOverviewCLick,
  onLiquidityCLick,
  children,
}) => (
  <div>
    <AppBar position="static">
      <ToolBar>
        <Button 
          onClick={onOverviewCLick}
          >
          Overview
        </Button>
        <Button onClick={onLiquidityCLick}>
          Liquidity
        </Button>
      </ToolBar>
    </AppBar>
    <Wrapper>
      {children}
    </Wrapper>
  </div> 
);
