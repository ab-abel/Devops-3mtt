// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Create this CSS file for sidebar styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="logo.png" alt="Logo" className="logo" />
            <button><i className="fas fa-qrcode"></i>Dashboard</button>
            <ul className="sidebar-links">
                <li><i className="fas fa-user"></i><a href="#">Profile</a></li>
                <li><i className="fas fa-users"></i><a href="#">Community</a></li>
                <li><i className="fas fa-book"></i><a href="#">My Courses</a></li>
                <li><i className="fas fa-calendar-check"></i><a href="#">ALC Attendance</a></li>
                <li><i className="fas fa-phone"></i><a href="#">Jobs & Gigs</a></li>
                <li><i className="fas fa-clipboard-list"></i><a href="#">Surveys</a></li>
                <li><i className="fas fa-certificate"></i><a href="#">Certificates</a></li>
                <li><i className="fas fa-question-circle"></i><a href="#">FAQs</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
