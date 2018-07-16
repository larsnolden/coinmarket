import React from "react";
import { AppBar, Button } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import styled from "styled-components";


const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export default ({ onOverviewCLick, onLiquidityCLick, children }) => (
  <div>
    <AppBar position="static">
      <ToolBar>
        <Button onClick={onOverviewCLick}>Overview</Button>
        <Button onClick={onLiquidityCLick}>Liquidity</Button>
      </ToolBar>
    </AppBar>
    <ContentWrapper>{children}</ContentWrapper>
  </div>
);
