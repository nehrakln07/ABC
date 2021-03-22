import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const {value, max, label} = props;
 
  return (
    <div className="progress-bar-container">
      <div className="attributes">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <progress value={value} max={max} />
    </div>
  );

}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  label: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  max: 100,
};

export default ProgressBar