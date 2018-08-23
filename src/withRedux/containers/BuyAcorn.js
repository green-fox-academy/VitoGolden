import { connect } from 'react-redux';
import { buyAcron } from '../actions/acronActions';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(buyAcron());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
