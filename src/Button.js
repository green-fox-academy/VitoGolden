import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { name, plus } = props;
  // const increase = () => {
  //   console.log('1');
  // };
  return (
    <button type="button" onClick={plus}>{name}</button>
  );
}
Buttons.defaultProps = {
  name: '',
  plus: () => {},
};
Buttons.propTypes = {
  name: PropTypes.string,
  plus: PropTypes.func,
};

export default Buttons;
