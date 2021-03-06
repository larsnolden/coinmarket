import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
} from 'recompose';
import { getCoinData } from 'actions/coinData';

const fetchData = lifecycle({
  componentDidMount() {
    this.props.dispatch(getCoinData({ initial: true}));
  }
})


const renderChildren = ({ children }) => children;

export default compose(
  connect(null, null),
  fetchData,
)(renderChildren)