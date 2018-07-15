import { connect } from "react-redux";
import Overview from "../components/Overview";

const mapState = state => ({
  coins: state.coinData.coins,
  numberOfCoins: state.coinData.numberOfCoins
});

export default connect(
  mapState,
  null
)(Overview);
