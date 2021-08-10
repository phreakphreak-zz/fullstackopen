import PropTypes from 'prop-types';
import React from 'react';
import Part from '../Part/index';
import Total from '../Total';

const Course = ({ title, parts }) => {
  return (
    <>
      <h2>Course: {title}</h2>
      {parts.map(({ id, title, exercises }) => (
        <Part key={id} title={title} exercises={exercises} />
      ))}
      <Total parts={parts} />
    </>
  );
};

Course.propTypes = {
  title: PropTypes.string,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      exercises: PropTypes.number,
    })
  ),
};
export default Course;
