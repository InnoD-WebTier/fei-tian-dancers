import React, { Component } from 'react';
import logo from '../assets/feitiandancerslogo.jpg';
import '../styles/css/navbar.css';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <div className="logo">
                        <li><NavLink to="/"><img src={logo} className="ftd-logo" alt="logo" /></NavLink></li>
                    </div>

                    <div className="menu">
                        <li><NavLink to="/members" activeClassName="selected">Members</NavLink></li>
                        <li><NavLink to="/media" activeClassName="selected">Multimedia</NavLink></li>
                    </div>

                </ul>
            </nav>

        );
    }
}

export default Navbar;