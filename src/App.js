// import all dependecies
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import StudentWelcome from './components/StudentWelcome';
import StudentInfo from './components/StudentInfo';
import StudentDetails from './components/StudentDetails';
import CourseDetails from './components/CourseDetails';
import './App.css'; 


const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
          <Header />
          <StudentWelcome />
          <StudentInfo />
          <StudentDetails />
          <CourseDetails />
      </div>
    </div>
  );
};

export default App;