import { connect } from 'react-redux';
import { eatAcron } from '../actions/acronActions';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(eatAcron());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
