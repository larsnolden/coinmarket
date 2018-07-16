import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/navigation/container/Navigation';
import SelectCoinNum from 'elements/selectCoinNum/container/SelectCoinNum';
import { Scatter } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';
import Heading from 'elements/Heading';
import formatNumber from 'formatNumber';

const createConfig = data => ({
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Coins',
      backgroundColor: '#ff9800',
      pointBorderWidth: 0,
      pointHoverRadius: data.map(coin => coin.radius / 9),
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#ff9800',
      pointHoverBorderWidth: 2,
      radius: data.map(coin => coin.radius / 10),
      pointHitRadius: 10,
      data,
    }
  ]
});

const chartOptions = {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Volume last 24hrs (in Million)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Market Cap (in Billion)'
      }
    }],
  },
  tooltips: {
    custom: function(tooltip) {
      if (!tooltip) return;
      // disable displaying the color box;
      tooltip.displayColors = false;
    },
    callbacks: {
      label: function(tooltipItem, data) {
        // console.log(data.datasets[0].data[tooltipItem.index].tooltip[0].value)
        return ''
      },
      title: function(tooltipItem, data) {
        return data.datasets[0].data[tooltipItem[0].index].name;
      },
      afterLabel: function(tooltipItem, data) {
        return data.datasets[0].data[tooltipItem.index].tooltipValues.map(pair => (
          `${pair.label}: ${pair.value}`
        ));
      },
    },
    mode: 'nearest',
    intersect: false,
    yPadding: 10,
    xPadding: 10,
    caretSize: 6,
    backgroundColor: '#ff9800',
    borderWidth: 0,
  },
  pan: {
    enabled: true,
    mode: 'xy'
  },
  zoom: {
    enabled: true,
    mode: 'xy'
  },
};

const mapCoinData = coins => coins.map(coin => ({
  x: coin.marketCap / 1000000000,
  y: coin.volume24 / 1000000,
  radius: coin.percentChange24,
  name: coin.name,
  tooltipValues: [
    {
      label: 'Marketcap',
      value: coin.marketCap ? formatNumber(coin.marketCap) : '',
    },    {
      label: 'Volume 24h',
      value: coin.volume24 ? formatNumber(coin.volume24) : '',
    },    {
      label: 'Price change',
      value: `${coin.percentChange24} %`,
    },
  ]
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
