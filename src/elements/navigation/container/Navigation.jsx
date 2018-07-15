import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Navigation from '../components/Navigation';

const mapDispatchToProps = dispatch => ({
  onOverviewCLick: () => dispatch(push('overview')),
  onLiquidityCLick: () => dispatch(push('liquidity')),
});

export default connect(null, mapDispatchToProps)(Navigation);
