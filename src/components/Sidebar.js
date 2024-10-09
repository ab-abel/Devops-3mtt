// src/components/Sidebar.js
import React from 'react';
import logo from '../images/logo.png'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="Logo" className="logo" />
            <button><i className="fas fa-qrcode"></i>Dashboard</button>
            <ul className="sidebar-links">
                <li><i className="fas fa-user"></i><a href="https://github.com/ab-abel/Devops-3mtt">Profile</a></li>
                <li><i className="fas fa-users"></i><a href="https://github.com/ab-abel/Devops-3mtt">Community</a></li>
                <li><i className="fas fa-book"></i><a href="https://github.com/ab-abel/Devops-3mtt">My Courses</a></li>
                <li><i className="fas fa-calendar-check"></i><a href="https://github.com/ab-abel/Devops-3mtt">ALC Attendance</a></li>
                <li><i className="fas fa-phone"></i><a href="https://github.com/ab-abel/Devops-3mtt">Jobs & Gigs</a></li>
                <li><i className="fas fa-clipboard-list"></i><a href="https://github.com/ab-abel/Devops-3mtt">Surveys</a></li>
                <li><i className="fas fa-certificate"></i><a href="https://github.com/ab-abel/Devops-3mtt">Certificates</a></li>
                <li><i className="fas fa-question-circle"></i><a href="https://github.com/ab-abel/Devops-3mtt">FAQs</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
