import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default ({
  value,
  onValueChange,
}) => (
    <Select
      value={value}
      onChange={onValueChange}
    >
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={100}>100</MenuItem>
      <MenuItem value={0}>all</MenuItem>
    </Select>
);
