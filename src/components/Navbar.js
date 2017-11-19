import React, { Component } from 'react';
import logo from '../assets/feitiandancerslogo.jpg';
import '../styles/css/navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <div className="logo">
                        <li><Link to="/"><img src={logo} className="ftd-logo" alt="logo" /></Link></li>
                    </div>

                    <div className="menu">
                        <li><Link to="/members">Members</Link></li>
                        <li><Link to="/media">Multimedia</Link></li>
                    </div>

                </ul>
            </nav>

        );
    }
}

export default Navbar;