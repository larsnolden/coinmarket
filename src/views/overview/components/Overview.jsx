import React from "react";
import styled from "styled-components";
import Navigation from "elements/navigation/container/Navigation";
import SelectCoinNum from "elements/selectCoinNum/container/SelectCoinNum";
import Heading from "elements/Heading";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const TableWrapper = styled.div`
  margin-top: 15px;
  background: #fff;
  overflow-x: scroll;
`;

const CoinRow = ({
  rank,
  name,
  price,
  percentChange24,
  marketCap,
  volume24
}) => (
  <TableRow>
    <TableCell numeric>{rank}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell numeric>{price}</TableCell>
    <TableCell numeric>{percentChange24}</TableCell>
    <TableCell numeric>{marketCap}</TableCell>
    <TableCell numeric>{volume24}</TableCell>
  </TableRow>
);

const CoinColumn = ({
  rank,
  name,
  price,
  percentChange24,
  marketCap,
  volume24
}) => (
  <TableRow>
    <TableCell>
      <TableRow>
        <div>Rank: {rank}</div>
      </TableRow>
      <TableRow>
        <div>Name: {name}</div>
      </TableRow>
      <TableRow>
        <div>Price: {price}</div>
      </TableRow>
      <TableRow>
        <div>Price Change (24h): {percentChange24} %</div>
      </TableRow>
      <TableRow>
        <div>Market Cap: {marketCap}</div>
      </TableRow>
      <TableRow>
        <div>Volume (24h): {volume24}</div>
      </TableRow>
    </TableCell>
  </TableRow>
);


export default ({ coins }) => (
  <Navigation>
    <Heading>
      OVERVIEW
    </Heading>
    <SelectCoinNum />

    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Price Change (24h)</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Volume (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins
            .map(coin => <CoinRow key={coin.rank} {...coin} />)}
        </TableBody>
      </Table>
    </TableWrapper>
  </Navigation>
);
