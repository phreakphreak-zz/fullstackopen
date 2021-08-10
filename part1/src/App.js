import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Courses from './services/getCourses';

const App = () => {
  return (
    <div>
      <Header title="FullStackOpen" />
      <Content courses={Courses} />
    </div>
  );
};

export default App;
