import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Label = styled.div`
  margin-right: 15px;
  align-self: center;
`;

export default ({
  value,
  onValueChange,
}) => (
  <Wrapper>
  <Label>
    Show:
  </Label>
    <Select
      value={value}
      onChange={onValueChange}
    >
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={100}>100</MenuItem>
      <MenuItem value={0}>all</MenuItem>
    </Select>
  </Wrapper>
);
