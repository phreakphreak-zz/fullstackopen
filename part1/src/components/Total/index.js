import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ parts }) => {
  const totalParts = parts.length;
  const totalExercises = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return (
    <div>
      <p>
        <b>Total parts: {totalParts}</b>
      </p>
      <p>
        <b>Total exercises: {totalExercises}</b>
      </p>
    </div>
  );
};

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      exercises: PropTypes.number,
    })
  ),
};

export default Total;
