import React from "react";
import styled from "styled-components";
import Navigation from "elements/navigation/container/Navigation";
import SelectCoinNum from "elements/selectCoinNum/container/SelectCoinNum";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CoinRow = ({
  rank,
  name,
  price,
  percentChange24,
  marketCap,
  volume24
}) => (
  <TableRow>
    <TableCell>{rank}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{price}</TableCell>
    <TableCell>{percentChange24}</TableCell>
    <TableCell>{marketCap}</TableCell>
    <TableCell>{volume24}</TableCell>
  </TableRow>
);

export default ({ coins, numberOfCoins }) => (
  <Navigation>
    <SelectCoinNum />
    Overview
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
          .slice(0, numberOfCoins)
          .map(coin => <CoinRow key={coin.rank} {...coin} />)}
      </TableBody>
    </Table>
  </Navigation>
);
