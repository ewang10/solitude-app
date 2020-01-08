import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

class TopNav extends Component {
    render() {
        return (
            <nav className="TopNav">
                <h1>
                    <Link to='/'>
                        Solitude
                    </Link>
                </h1>
                <div className="register-login">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;