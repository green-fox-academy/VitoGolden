import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { count } = props;
  // const onClick = () => {
  //   count += 1;
  // };
  return (
    <p>{count}</p>
  );
}
Display.defaultProps = {
  count: 0,
};
Display.propTypes = {
  count: PropTypes.number,
};

export default Display;
