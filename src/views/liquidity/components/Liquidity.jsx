import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/navigation/container/Navigation';
import SelectCoinNum from 'elements/selectCoinNum/container/SelectCoinNum';
import { Scatter } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';
import Heading from 'elements/Heading';

const createConfig = data => ({
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Coins',
      backgroundColor: '#ff9800',
      pointBorderWidth: 0,
      pointHoverRadius: data.map(coin => coin.radius),
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#ff9800',
      pointHoverBorderWidth: 2,
      radius: data.map(coin => coin.radius / 2),
      pointHitRadius: 10,
      data,
    }
  ]
});

const chartOptions = {
  pan: {
    enabled: true,
    mode: 'xy'
  },
  zoom: {
    enabled: true,
    mode: 'xy'
  },
}

const mapCoinData = coins => coins.map(coin => ({
  x: coin.marketCap,
  y: coin.volume24,
  radius: coin.percentChange24,
}));

export default ({
  coins,
}) => (
  <Navigation>
    <Heading>LIQUIDITY</Heading>
    <SelectCoinNum />
    <Scatter
      data={createConfig(mapCoinData(coins))}
      options={chartOptions}
    />
  </Navigation>
);
