import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './TopNav.css';

class TopNav extends Component {
    handleLogout() {
        TokenService.clearAuthToken();
        //remove queue callbacks to refresh token and
        //unregister events that tracks user interactivity
        TokenService.clearCallbackBeforeExpiry();
        IdleService.unregisterIdleResets();
        window.location.reload(false);
    }
    logoutHeader() {
        return (
            <div className="logout-header">
                <Link
                    to='/login'
                    onClick={() => this.handleLogout()}
                >
                    Logout
                </Link>
            </div>
        );
    }
    loginHeader() {
        return (
            <div className="register-login-header">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        );
    }
    render() {
        const header = TokenService.hasAuthToken()
            ? <Link to='/search'>Solitude</Link>
            : <Link to='/'>Solitude</Link>
        return (
            <nav className="TopNav">
                <h1>
                    {header}
                </h1>
                {
                    TokenService.hasAuthToken()
                        ? this.logoutHeader()
                        : this.loginHeader()
                }
            </nav>
        );
    }
}

export default TopNav;