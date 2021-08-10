import React from 'react';
import PropTypes from 'prop-types';

const Part = ({ exercises, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <small>✏️ Exercises: {exercises}</small>
    </>
  );
};

Part.propTypes = {
  exercises: PropTypes.number,
  title: PropTypes.string,
};

export default Part;
