import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { count } = props;
  return (
    <span>
      acrons left {count}
    </span>
  );
}
Display.defaultProps = {
  count: 0,
};
Display.propTypes = {
  count: PropTypes.number,
};

export default Display;
