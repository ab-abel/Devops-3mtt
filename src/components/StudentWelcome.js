// src/components/StudentWelcome.js
import React from 'react';
import studentImage from '../images/student.png'

const StudentWelcome = () => {
    return (
        <div className="student-welcome">
            <h2>Hello Abel, Welcome to your 3MTT Dashboard</h2>
            <div className="student-image">
                <img src={studentImage} alt="Student" />
            </div>
        </div>
    );
};

export default StudentWelcome;
