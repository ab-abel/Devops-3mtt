// src/components/CourseDetails.js
import React from 'react';

const CourseDetails = () => {
    return (
        <div className="course-details">
            <div className="course">
                <div>
                    <h2>Accessing your 3MTT dashboard</h2>
                    <img src="play.png" alt="video" />
                    <p>In this video, you will be guided through the process of accessing your 3MTT dashboard using your email and password.</p>
                </div>
            </div>
            {/* Repeat for other courses */}
        </div>
    );
};

export default CourseDetails;
