import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav className="nav-display">
                    <Link to='/home'><li>Home</li></Link>
                    <li>Work</li>
                    <Link to='/cv'><li>CV</li></Link>
                    <Link to='/about'><li>About Me</li></Link>
                    <li>Contact</li>
                </nav>
            </div>
        )
    }
}
