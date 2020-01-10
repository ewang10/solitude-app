import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return (
            <nav className='BottomNav'>
                <div className="nav">
                    <Link to='/search'>Search</Link>
                </div>
                <div className="nav">
                    <Link to='/journals'>Journals</Link>
                </div>
            </nav>
        );
    }
}

export default BottomNav;