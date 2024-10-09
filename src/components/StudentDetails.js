// src/components/StudentDetails.js
import React from 'react';

const StudentDetails = () => {
    return (
        <div className="student-details">
            <div className="students">
                <span><i className="fas fa-calendar-check"></i></span>
                <div>
                    <h2>Fellow ID</h2>
                    <p>FE/23/57356443</p>
                    <p>Cohort 2</p>
                </div>
            </div>
            <div className="students">
                <span><i className="fas fa-bookmark"></i></span>
                <div>
                    <h2>0</h2>
                    <p>Module Assessment</p>
                </div>
            </div>
            <div className="students">
                <span><i className="fas fa-chalkboard-teacher"></i></span>
                <div>
                    <h2>0%</h2>
                    <p>Training Progress</p>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
