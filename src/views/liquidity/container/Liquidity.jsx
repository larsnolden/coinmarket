import { connect } from 'react-redux';
import Liquidity from '../components/Liquidity';

const mapState = state => ({
  coins: state.coinData.coinsVisible,
});

export default connect(mapState, null)(Liquidity)