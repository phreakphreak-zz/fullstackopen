import React from 'react';
import PropTypes from 'prop-types';
import Course from '../Course';

const Content = ({ courses }) => {
  return (
    <>
      {courses.map(({ id, title, parts }) => {
        return <Course key={id} parts={parts} title={title} />;
      })}
    </>
  );
};

Content.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      parts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
        })
      ),
    })
  ),
};

export default Content;
