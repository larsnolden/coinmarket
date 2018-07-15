import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/navigation/container/Navigation';
import SelectCoinNum from 'elements/selectCoinNum/container/SelectCoinNum';

const Wrapper = styled.div`

`;

export default () => (
  <Navigation>
    <SelectCoinNum />
  </Navigation>
);
