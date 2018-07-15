import SelectCoinNum from '../components/SelectCoinNum';
import { connect } from 'react-redux';
import { handleCoinNumChange } from 'actions/coinData';

const mapState = state => ({
  value: state.coinData.numberOfCoins,
})

const mapDispatch = dispatch => ({
  onValueChange: evt => dispatch(handleCoinNumChange(evt.target.value)),
});

export default connect(mapState, mapDispatch)(SelectCoinNum);
