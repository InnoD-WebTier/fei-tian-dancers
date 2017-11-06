import React, { Component } from 'react';
import logo from '../assets/feitiandancerslogo.jpg';
import '../styles/css/navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="logo">
                    <img src={logo} className="ftd-logo" alt="logo" />
                </div>
                <div className="menu">
                    <a href="/members">Members</a>
                    <a href="/multimedia">Multimedia</a>
                </div>

            </nav>

        );
    }
}

export default Navbar;