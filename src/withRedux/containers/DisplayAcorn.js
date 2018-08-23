import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.action.count,
  };
};

const DisplayAcron = connect(
  mapStateToProps,
)(Display);

export default DisplayAcron;
