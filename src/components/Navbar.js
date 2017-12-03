import React, { Component } from 'react';
import logo from '../assets/feitiandancerslogo.jpg';
import '../styles/css/navbar.css';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="logo">
                    <NavLink to="/"><img src={logo} className="ftd-logo" alt="logo" /></NavLink>
                </div>

                <div className="menu">
                    <NavLink to="/members" activeClassName="selected">Members</NavLink>
                    <NavLink to="/media" activeClassName="selected">Multimedia</NavLink>
                </div>
            </nav>

        );
    }
}

export default Navbar;