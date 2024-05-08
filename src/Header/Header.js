import React, { useState } from 'react';
import './navbar.css';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isNavBarActive, setNavBarActive] = useState(false);
    const location = useLocation();
    const history = useNavigate();

    const handleHamburgerClick = () => {
        setNavBarActive(!isNavBarActive);
        const searchBoxes = document.querySelectorAll('.search-box');
        searchBoxes.forEach(box => box.classList.toggle('hidden'));
    };

    const handleSignOut = () => {
        console.log('Signing out...');
        history('/');
    };

    return (
        <header>
            <div className="logo">Staff-connect</div>
            <h7 >Welcome {location.state?.id}</h7>
            <div className="hamburger" onClick={handleHamburgerClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav-bar1 ${isNavBarActive ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/homeO ">Home</Link></li>
                    <li><Link to="/Arigato">About</Link></li>
                    <li><Link to="/ContactUs">Contact</Link></li>
                    <li>
                        <a href="" className='but-name' onClick={handleSignOut} >Sign Out
                        </a>
                    </li>
                    {location.state?.role === 'owner' && (
                        <li className='post'>
                            <a href="" >
                                <Link to="/postjob">Post Job</Link></a>
                        </li>
                    )}
                    <li>
                        <a href="">      
                            <Link to="/ViewMyJobs">ViewMyJobs</Link></a>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
