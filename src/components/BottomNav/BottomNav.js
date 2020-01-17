import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch } from '@fortawesome/free-solid-svg-icons';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return (
            <nav className='BottomNav'>
                <div className="nav">
                    <Link to='/search'>
                        <FontAwesomeIcon icon={faSearch} className='search-nav' />
                    </Link>
                </div>
                <div className="nav">
                    <Link to='/journals'>
                        <FontAwesomeIcon icon={faBook} className='journal-nav' />
                    </Link>
                </div>
            </nav>
        );
    }
}

export default BottomNav;