import { connect } from "react-redux";
import Overview from "../components/Overview";

const mapState = state => ({
  coins: state.coinData.coinsVisible,
});

export default connect(
  mapState,
  null
)(Overview);
